import {
  Box,
  Container,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import React, { useState, useEffect } from "react";
import MyButton from "../../Utils/Button/MyButton";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./CreateCourse.scss";

export default function CreateCourse() {
  const [listTerm, setListTerm] = useState([{ term: "", define: "" }]);
  const [course, setCourse] = useState({
    name: "",
    descrip: "",
    image: "",
    listTerm: [],
  });

  useEffect(() => {
    setCourse((obj) => ({ ...obj, listTerm: listTerm }));
  }, [listTerm]);

  const handleChangeCourse = (type) => (e) => {
    if (type === "image") {
      setCourse((obj) => ({
        ...obj,
        image: e.target.file[0],
      }));
    } else {
      setCourse((obj) => ({ ...obj, [type]: e.target.value }));
    }
  };
  const handleChangeTerm = (e, index) => {
    const { name, value } = e.target;
    const list = [...listTerm];
    list[index][name] = value;
    setListTerm(list);
  };
  const handleDeleteTerm = (index) => {
    const list = [...listTerm];
    list.splice(index, 1);
    setListTerm(list);
  };
  const handleAddTerm = () => {
    setListTerm([...listTerm, { term: "", define: "" }]);
  };
  const handleSubmit = () => {
    console.log(course);
  };
  return (
    <Box>
      <Container>
        <Box>
          <h3>Tạo học phần mới</h3>
          <TextField
            label="Tên học phần"
            variant="outlined"
            className="input"
            onChange={handleChangeCourse("name")}
            fullWidth
          />
          <TextField
            label="Mô tả"
            variant="outlined"
            className="input"
            onChange={handleChangeCourse("descrip")}
            fullWidth
          />
          <FormControl fullWidth style={{width: "50%"}}>
            <InputLabel id="demo-simple-select-label">Chủ đề</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Chủ đề"
              onChange={handleChangeCourse("topic")}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            className="input img"
            type="file"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Ảnh</InputAdornment>
              ),
            }}
            variant="outlined"
            onChange={handleChangeCourse("image")}
            fullWidth
          />
        </Box>
      </Container>
      <Box className="terms">
        <Container>
          <h4>Thuật ngữ trong học phần</h4>
          {listTerm.map((item, index) => (
            <Paper className="termItem">
              <Box className="headItem">
                <h6>{index + 1}</h6>
                <IconButton onClick={handleDeleteTerm}>
                  <DeleteIcon />
                </IconButton>
              </Box>
              <Divider />
              <Box className="bodyItem">
                <TextField
                  label="Thuật ngữ"
                  name="term"
                  value={item.term}
                  onChange={(e) => handleChangeTerm(e, index)}
                  className="addInput"
                />
                <TextField
                  label="Định nghĩa"
                  name="define"
                  value={item.define}
                  onChange={(e) => handleChangeTerm(e, index)}
                  className="addInput"
                />
              </Box>
            </Paper>
          ))}
          <Paper className="termItem text-center py-3">
            <Button startIcon={<AddRoundedIcon />} onClick={handleAddTerm}>
              Thêm thẻ
            </Button>
          </Paper>
          <Box className="btnSubmit">
            <MyButton style={{ width: 200, margin: 0 }} onClick={handleSubmit}>
              Tạo
            </MyButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
