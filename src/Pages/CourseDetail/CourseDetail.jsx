import {
  Container,
  Tabs,
  Tab,
  Box,
  Divider,
  Avatar,
  IconButton,
  Paper,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import VerticalPanel from "../../Utils/TabPanel/VerticalPanel";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import HearingIcon from "@mui/icons-material/Hearing";
import FlashCard from "../../Components/FlashCard/FlashCard";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import "./CourseDetail.scss";
import Learn from "../../Components/Learn/Learn";
import Writing from "../../Components/Writing/Writing";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, getCourse } from "../../Redux/Actions/course";
import Listening from "../../Components/Listening/Listening";
import Loading from "../../Components/Loading/Loading";
import { NavLink } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const CourseDetail = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userReducer);
  const { course, loading } = useSelector((state) => state.courseReducer);
  useEffect(() => {
    dispatch(getCourse(props.match.params.courseID));
    // eslint-disable-next-line
  }, [props.match.params.courseID]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const copyCourseUrl = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  const handleDelete = (id) => {
    dispatch(deleteCourse(id))
    window.history.back()
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <Box>
      <Container fixed>
        <h4 style={{ marginTop: "100px" }}>{course.name}</h4>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 400,
            marginBottom: 5,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab
              icon={<DynamicFeedIcon />}
              label="Thẻ ghi nhớ"
              {...a11yProps(0)}
            />
            <Tab icon={<MenuBookRoundedIcon />} label="Học" {...a11yProps(1)} />
            <Tab icon={<BorderColorIcon />} label="Viết" {...a11yProps(2)} />
            <Tab icon={<HearingIcon />} label="Nghe" {...a11yProps(3)} />
          </Tabs>
          <Box>
            <VerticalPanel value={value} index={0}>
              <FlashCard terms={course.set_details} />
            </VerticalPanel>
            <VerticalPanel value={value} index={1}>
              <Learn terms={course.set_details} />
            </VerticalPanel>
            <VerticalPanel value={value} index={2}>
              <Writing terms={course.set_details} />
            </VerticalPanel>
            <VerticalPanel value={value} index={3}>
              <Listening terms={course.set_details} />
            </VerticalPanel>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 80,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar>U</Avatar>
            <p style={{ marginBottom: 0, marginLeft: "10px" }}>UserName</p>
          </Box>
          <Box style={{ display: "flex" }}>
            <Tooltip title="Theo dõi người đăng">
              <IconButton>
                <PersonAddAlt1RoundedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Copy học phần">
              <IconButton onClick={copyCourseUrl}>
                <ContentCopyRoundedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Thêm học phần">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Tooltip>
            {course.user?.id === currentUser.id ? (
              <div>
                <Tooltip title="Sửa học phần">
                  <NavLink to={`/editcourse/${course.id}`}>
                    <IconButton>
                      <EditRoundedIcon />
                    </IconButton>
                  </NavLink>
                </Tooltip>
                <Tooltip title="Xóa học phần">
                  <IconButton onClick={() => handleDelete(course.id)}>
                    <DeleteRoundedIcon />
                  </IconButton>
                </Tooltip>
              </div>
            ) : null}
          </Box>
        </Box>
      </Container>
      <Box className="termList">
        <Container fixed style={{ padding: "20px 0" }}>
          <h4 style={{ margin: "20px 0" }}>Danh sách thuật ngữ</h4>
          {course.set_details?.map((item) => (
            <Paper className="termItem">
              <p>{item.term}</p>
              <Divider orientation="vertical" variant="middle" flexItem />
              <p>{item.definition}</p>
            </Paper>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default CourseDetail;
