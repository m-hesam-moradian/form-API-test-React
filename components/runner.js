import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Runner() {
  return (
    <div>
      <button color="secondary" variant="contained">
        <Link  to="/login" >Form</Link>
      </button>
      <button color="secondary" variant="outlined">
        <Link  to="/users" >Tabel</Link>
      </button>
    </div>
  );
}
