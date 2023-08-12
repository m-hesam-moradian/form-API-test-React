import React, { Component } from "react";
import Form from "./components/Form/Form";
import Tabel from "./components/table/Table";
import { useNavigate, Route, Routes } from "react-router-dom";
import Runner from "./components/runner";
// import "./App.css"

export default function App() {
  return (
    <div>
      <Runner></Runner>
      <Routes>
        <Route path="/login" element={<Form />} />
        <Route path="/users" element={<Tabel />} />
      </Routes>
    </div>
  );
}
