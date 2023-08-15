import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {HiOutlineUserRemove} from "react-icons/hi";
import {FaUserEdit} from "react-icons/fa";

export default function BasicTable() {
  let rows = [];
  let i = 0;
  const [row, setrow] = useState([]);
  useEffect(() => {
    fetch("https://test-37988-default-rtdb.firebaseio.com/userInfo.json")
      .then((Response) => Response.json())
      .then((response) => setrow(Object.entries(response)));
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">activation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row ? (
            row.map((index) => {
              i++;
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
                  <TableCell align="center">
                    <TableCell align="center">
                      <HiOutlineUserRemove
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={handleOpen}
                      ></HiOutlineUserRemove>
                    </TableCell>
                    <TableCell align="center">
                      <FaUserEdit
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={handleOpen}
                      ></FaUserEdit>
                    </TableCell>
                  </TableCell>
                  <div>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          remove user
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
are you sure you want to remove this user
                        </Typography>
                        
                        <Button >no</Button>
                        <Button>yes</Button>
                      </Box>
                    </Modal>
                  </div>
                </TableRow>
              );
            })
          ) : (
            <h1>nothing</h1>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
