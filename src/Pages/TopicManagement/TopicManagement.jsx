import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button, Grid, InputBase } from "@mui/material";
import TableForm from "../../Components/TableForm/TableForm";
import SearchIcon from "@mui/icons-material/Search";
const TopicManagement = () => {
  const columns = [
    { id: "ID", label: "Mã chủ đề", minWidth: 100 },
    { id: "name", label: "Tên chủ đề", minWidth: 100, align: "center" },
    {
      id: "description",
      label: "Mô tả",
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

  const rows = [
    {
      ID: 123,
      name: "hahaha",
      description: "Cười",
    },
    {
      ID: 1223,
      name: "hahahi",
      description: "hihi.com",
    },
  ];

  const [valueTarget, setValueTarget] = useState("");
  return (
    <Box>
      <div style={{ marginLeft: "300px" }}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              //   onClick={() => addUser()}
            >
              Thêm chủ đề
            </Button>
          </Grid>
          <Grid item>
            <h4>Quản lý chủ đề</h4>
          </Grid>
          <Grid item>
            <div>
              <div>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Tìm kiếm chủ đề..."
                inputProps={{ "aria-label": "search" }}
                onChange={(event) => setValueTarget(event.target.value)}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <TableForm rows={rows} columns={columns} keyword={valueTarget} />
    </Box>
  );
};

export default TopicManagement;
