import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Runner() {
  return (
    <div>
      <button
        style={{ color: "white", margin: "1rem" }}
        color="secondary"
        variant="contained"
      >
        <Link to="/login" style={{ color: "white", margin: "2rem" }}>
          Form
        </Link>
      </button>
      <button color="secondary" variant="outlined">
        <Link to="/users" style={{ color: "white", margin: "2rem" }}>
          Tabel
        </Link>
      </button>
    </div>
  );
}
