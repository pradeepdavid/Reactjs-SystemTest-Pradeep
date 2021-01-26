import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function UserList() {
    const [data, setData] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://reqres.in/api/users?page=2',
          );
          console.log(result.data.data);
          setData(result.data.data);
        };
     
        fetchData();
      }, []);
    return (

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Avator</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                {/* <TableCell align="right">ID</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                  <img src={row.avatar} alt="avator" />
                  </TableCell>
                  <TableCell >{row.email}</TableCell>
                  <TableCell align="right">{row.first_name}</TableCell>
                  <TableCell align="right">{row.last_name}</TableCell>
                  {/* <TableCell align="right">{row.id}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
  }

export default UserList;