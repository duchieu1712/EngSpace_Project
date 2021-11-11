import React, { useEffect, useState } from "react";
import { Button, Grid, InputBase } from "@mui/material";
import TableForm from "../../Components/TableForm/TableForm";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import {getUserList} from '../../Redux/Actions/user';

const UserManagement = () => {
  const columns = [
    { id: "ID", label: "Mã người dùng", minWidth: 100 },
    { id: "name", label: "Tên người dùng", minWidth: 100, align: "center" },
    {
      id: "email",
      label: "Email",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "status",
      label: "Trạng thái",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "option",
      label: "Thao tác",
      minWidth: 170,
      align: "center",
      format: (value) => value.toFixed(2),
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  },[])
  const rows = [
    {
      ID: 123,
      name: "hahaha",
      email: "haha@email.com",
      status: "active",
    },
    {
      ID: 1223,
      name: "hahahi",
      email: "haa@email.com",
      status: "banned",
    },
  ];

  const [valueTarget, setValueTarget] = useState("");

  return (
    <div>
      <div style={{ marginLeft: "300px" }}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              //   onClick={() => addUser()}
            >
              Thêm người dùng
            </Button>
          </Grid>
          <Grid item>
            <h4>Quản lý người dùng</h4>
          </Grid>
          <Grid item>
            <div>
              <div>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Tìm kiếm người dùng..."
                inputProps={{ "aria-label": "search" }}
                onChange={(event) => setValueTarget(event.target.value)}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <TableForm rows={rows} columns={columns} keyword={valueTarget} />
    </div>
  );
};

export default UserManagement;
