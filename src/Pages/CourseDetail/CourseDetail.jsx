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
import React from "react";
import VerticalPanel from "../../Utils/TabPanel/VerticalPanel";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import HearingIcon from "@mui/icons-material/Hearing";
import FlashCard from "../../Components/FlashCard/FlashCard";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import "./CourseDetail.scss";
import Learn from "../../Components/Learn/Learn";
import Writing from "../../Components/Writing/Writing";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const CourseDetail = () => {
  const terms = [
    {
      word: "go",
      define: "đi",
    },
    {
      word: "hi",
      define: "chào",
    },
    {
      word: "bye",
      define: "tạm biệt",
    },
    {
      word: "good",
      define: "tốt",
    },
    {
      word: "eat",
      define: "ăn",
    },
    {
      word: "drink",
      define: "uống",
    },
    {
      word: "water",
      define: "nước",
    },
    {
      word: "rock",
      define: "đá",
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Container fixed>
        <h2>Name course</h2>
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
          <Box sx={{ marginLeft: 20 }}>
            <VerticalPanel value={value} index={0}>
              <FlashCard terms={terms}/>
            </VerticalPanel>
            <VerticalPanel value={value} index={1}>
              <Learn terms={terms}/>
            </VerticalPanel>
            <VerticalPanel value={value} index={2}>
              <Writing terms={terms}/>
            </VerticalPanel>
            <VerticalPanel value={value} index={3}>
              Nghe
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
          <Box>
            <Tooltip title="Thêm học phần">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Theo dõi người đăng">
              <IconButton>
                <PersonAddAlt1RoundedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Copy học phần">
              <IconButton>
                <ContentCopyRoundedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
      <Box className="termList">
        <Container fixed>
          <h4>Danh sách thuật ngữ</h4>
          {terms.map(item => (
            <Paper className="termItem">
            <p>{item.word}</p>
            <Divider orientation="vertical" variant="middle" flexItem />
            <p>{item.define}</p>
          </Paper>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default CourseDetail;
