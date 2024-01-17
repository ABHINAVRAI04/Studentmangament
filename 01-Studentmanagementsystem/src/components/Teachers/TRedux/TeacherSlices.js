import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: "",
  isSuccess: "",
};

//TeacherAddDetails
export const TeacherDetails = createAsyncThunk(
  "AddTeacherDetails",
  async (values) => {
    let response = await fetch("http://localhost:8080/teacher", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstName, //passing The teacher Add details
        lastName: values.lastName,
        email: values.email,
        courses: values.courses,
        JoiningDate: values.JoiningDate,
      }),
    });
    response = await response.json();
  }
);

export const EditTeacherDetails = createAsyncThunk("EditTeacherDetails",async (values) => {
  const _id = values._id;
    let edit_response = await fetch(`http://localhost:8080/teachersdata/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstName, //Updating  The teacher Details
        lastName: values.lastName,
        email: values.email,
        courses: values.courses,
        JoiningDate: values.JoiningDate,
      }),
    });
        edit_response = await edit_response.json()

  }
);

export const TeacherSlices = createSlice({
  name: "Teachers",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(TeacherDetails.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(TeacherDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [];
        state.isSuccess = action.payload;
      })
      .addCase(TeacherDetails.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = action.error.message;
      });
  },
});

const Teachers = TeacherSlices.reducer;
export default Teachers;
