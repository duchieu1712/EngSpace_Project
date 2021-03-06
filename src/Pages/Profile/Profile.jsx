import { Container, Dialog, TextField } from "@mui/material";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MyButton from "../../Utils/Button/MyButton";
import { changePassword, getProfileUser, changeUserAvatar } from "../../Redux/Actions/user";
import EditProfile from "../../Components/EditProfile/EditProfile";
import avatars from "../../Utils/defaultAvatar";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { userProfile, currentUser } = useSelector(
    (state) => state.userReducer
  );
  const [password, setPassword] = useState({
    old_password: "",
    password: "",
    password2: "",
  });
  const [avatar, setAvatar] = useState({ preview: userProfile.avatar, raw: {} });
  const dispatch = useDispatch();
  const handleChange = (type) => (e) => {
    setPassword({ ...password, [type]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(changePassword(currentUser.id, password));
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(getProfileUser());
    // eslint-disable-next-line
  }, []);
  const handleEdit = () => {
    setOpen(!open);
  };
  const handleAvatar = (ava) => {
    // const file = new File(ava);
    setAvatar({...avatar, preview: ava});
    // setAvatar({...avatar, raw: file});
    // console.log(avatar);
  
    // dispatch(changeUserAvatar(ava))
  };
  const handleUpload = (e) => {
    setAvatar({...avatar, raw: e.target.files[0]})
  }
  const submitAvatar = () => {
    dispatch(changeUserAvatar(avatar.raw))
  }

  return (
    <div className="profileBackground">
      <Container>
        <Box className="profileItem">
          <Box className="profileTitle">
            <ContactMailRoundedIcon className="icon" />
            <h4 className="title">Th??ng tin ta??i khoa??n</h4>
          </Box>
          <Box className="profileContent">
            <Box className="infoContent">
              <h5>Th??ng tin ta??i khoa??n ng??????i du??ng</h5>
              <Box
                style={{ marginTop: "20px", marginRight: "20px", width: "60%" }}
              >
                <p className="infoUser">
                  T??n ta??i khoa??n: {userProfile.username}
                </p>
                <p className="infoUser">Email hi????n ta??i: {userProfile.email}</p>
                <p className="infoUser">
                  Ho?? va?? T??n: {userProfile.last_name} {userProfile.first_name}
                </p>
                <p className="infoUser">Nga??y sinh: {userProfile.dob}</p>
              </Box>
            </Box>
            <MyButton style={{ margin: 0 }} onClick={() => handleEdit()}>
              Chi??nh s????a
            </MyButton>
          </Box>
        </Box>
        <Box className="profileItem">
          <Box className="profileTitle">
            <Avatar
              src={avatar.preview}
              alt=""
              sx={{ width: 60, height: 60, margin: "0 auto" }}
            />
            <h4 className="title">A??nh ??a??i di????n</h4>
          </Box>
          <Box className="profileContent">
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>Cho??n a??nh ??a??i di????n</h5>
              <MyButton onClick={submitAvatar}>L??u</MyButton>
            </Box>
            <Box style={{ display: "flex", flexWrap: "wrap" }}>
              {avatars.map((item, index) => (
                <Button onClick={() => handleAvatar(item.image)}>
                  <Avatar alt="" src={item.image} className="avatars" />
                </Button>
              ))}
            </Box>
            <Divider>Ho????c</Divider>
            <Box style={{ textAlign: "center" }}>
              <label>
                <input
                  type="file"
                  style={{display:"none"}}
                  onChange={handleUpload}
                />
                <MyButton variant="contained" component="span" color="red">
                  Ta??i l??n a??nh cu??a ri??ng ba??n
                </MyButton>
              </label>
            </Box>
          </Box>
        </Box>
        <Box className="profileItem">
          <Box className="profileTitle">
            <VpnKeyRoundedIcon className="icon" />
            <h4 className="title">M????t kh????u</h4>
          </Box>
          <Box className="profileContent">
            <h5>Chi??nh s????a m????t kh????u</h5>
            <TextField
              label="M????t kh????u cu??"
              className="input"
              onChange={handleChange("old_password")}
            />
            <TextField
              label="M????t kh????u m????i"
              className="input"
              onChange={handleChange("password")}
            />
            <TextField
              label="Xa??c nh????n m????t kh????u m????i"
              className="input"
              onChange={handleChange("password2")}
            />
            <MyButton style={{ margin: 0 }} onClick={handleSubmit}>
              ??????i m????t kh????u
            </MyButton>
          </Box>
        </Box>

        <Dialog open={open} onClose={handleClose}>
          <EditProfile userProfile={userProfile} />
        </Dialog>
      </Container>
    </div>
  );
};

export default Profile;
