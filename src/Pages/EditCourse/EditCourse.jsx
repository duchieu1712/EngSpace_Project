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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyButton from "../../Utils/Button/MyButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { deleteTerm, updateCourse } from "../../Redux/Actions/course";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function EditCourse(props) {
  const { topicList } = useSelector((state) => state.topicReducer);
  const { course } = useSelector((state) => state.courseReducer);
  const { currentUser } = useSelector((state) => state.userReducer);
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);


  const [set_details, setSet_details] = useState(course.set_details);
  const dispatch = useDispatch();
  
  const handleClose = () => {
    setOpen(false);
    window.history.back();
  };
  const handleCloseTerm = () => {
    setOpenDel(false)
  }
  const [courseUpdate, setCourseUpdate] = useState({
    is_public: true,
    name: course.name,
    description: course.description,
    // image: "",
    user: {
      username: currentUser.username,
    },
    topic: course.topic,
    set_details: [],
  });

  useEffect(() => {
    setCourseUpdate((obj) => ({ ...obj, set_details: set_details }));
  }, [set_details]);

  const handleChangeCourse = (type) => (e) => {
    // if (type === "image") {
    //   setCourse((obj) => ({
    //     ...obj,
    //     image: e.target.file[0],
    //   }));
    // } else {
    setCourseUpdate((obj) => ({ ...obj, [type]: e.target.value }));
    // }
  };
  const handleChangeTerm = (e, index) => {
    const { name, value } = e.target;
    const list = [...set_details];
    list[index][name] = value;
    setSet_details(list);
  };
  const handleDeleteTerm = (id,index) => {
    dispatch(deleteTerm(id))
    setOpenDel(true)
    const list = [...set_details];
    list.splice(index, 1);
    setSet_details(list);
  };
  const handleAddTerm = () => {
    setSet_details([
      ...set_details,
      { term: "", definition: "", term_lang: "en", definition_lang: "en" },
    ]);
  };
  const handleSubmit = () => {
    dispatch(updateCourse(course.id,courseUpdate));
    setOpen(true);
    // console.log(course.id,courseUpdate);
  };
  
  return (
    <Box>
      <Container>
        <Box>
          <h4>Cập nhật học phần</h4>
          <TextField
            label="Tên học phần"
            variant="outlined"
            className="input"
            onChange={handleChangeCourse("name")}
            value={courseUpdate.name}
            fullWidth
          />
          <TextField
            label="Mô tả"
            variant="outlined"
            className="input"
            onChange={handleChangeCourse("description")}
            value={courseUpdate.description}
            fullWidth
          />
          <FormControl fullWidth style={{ width: "50%" }}>
            <InputLabel id="demo-simple-select-label">Chủ đề</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Chủ đề"
              onChange={handleChangeCourse("topic")}
              value={courseUpdate.topic}
            >
              {topicList.map((item, index) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
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
            // onChange={handleChangeCourse("image")}
            fullWidth
          />
        </Box>
      </Container>
      <Box className="terms">
        <Container>
          <h4>Thuật ngữ trong học phần</h4>
          {set_details?.map((item, index) => (
            <Paper className="termItem">
              <Box className="headItem">
                <h6>{index + 1}</h6>
                <IconButton onClick={() => handleDeleteTerm(item.id, index)}>
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
                  name="definition"
                  value={item.definition}
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
              Lưu
            </MyButton>
          </Box>
        </Container>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Sửa học phần thành công!!!
        </Alert>
      </Snackbar>
      <Snackbar open={openDel} autoHideDuration={6000} onClose={handleCloseTerm}>
        <Alert onClose={handleCloseTerm} severity="error" sx={{ width: "100%" }}>
          Xóa thuật ngữ thành công!!!
        </Alert>
      </Snackbar>
    </Box>
  );
}
