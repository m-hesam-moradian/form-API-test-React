import React, { useEffect, useState } from "react";
// import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { object } from "prop-types";

export default function BasicTable() {
  let rows = [];
let i=0
  const [row, setrow] = useState([]);
  useEffect(() => {
    fetch("https://test-37988-default-rtdb.firebaseio.com/userInfo.json")
      .then((Response) => Response.json())
      .then((response) => setrow(Object.entries(response)));
    console.log(row);

  }, []);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row ?
            
            row.map((index) => {
            i++
            return (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {i}
                </TableCell>
                <TableCell align="center">{index[1].firstName}</TableCell>
                <TableCell align="center">{index[1].lastName}</TableCell>
                <TableCell align="center">{index[1].email}</TableCell>
              </TableRow>
            );
          
          
          
          
          
          }) : <h1>nothing</h1>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

