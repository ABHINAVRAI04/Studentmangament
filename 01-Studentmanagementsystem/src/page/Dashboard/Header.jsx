import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      <h1 className="font-serif text-4xl text-blue-700 text-center">Manage Students!</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button text-white" style={{background:"#be0ac4",border:"none"}}  >
          Add Students
        </button>
      </div>
    </header>
  );
}

export default Header;