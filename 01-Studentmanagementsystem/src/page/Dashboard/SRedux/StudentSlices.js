import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: "",
  isSuccess: "",
};

//student Add;
export const StudentDetails = createAsyncThunk(
  "StudetnAddDetails",
  async (values) => {
    let response = await fetch("http://localhost:8080/student", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        fees: values.fees,
        AdmissionDate: values.AdmissionDate,
        educationqual: values.educationqual,
      }),
    });
    response = await response.json();
  }
);

export const EditStudent = createAsyncThunk("Editstudent", async (values) => {
  const _id = values._id
  let response = await fetch(`http://localhost:8080/studentdata/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      fees: values.fees,
      AdmissionDate: values.AdmissionDate,
      educationqual: values.educationqual,
    }),
  });
  response = await response.json();
});

export const studetnsli = createSlice({
  name: "Teachers",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(StudentDetails.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(StudentDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [];
        state.isSuccess = action.payload;
      })
      .addCase(StudentDetails.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = action.error.message;
      });
  },
});

const Students = studetnsli.reducer;
export default Students;
