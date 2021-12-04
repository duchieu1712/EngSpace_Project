import { Container, Dialog, TextField } from "@mui/material";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import MyButton from "../../Utils/Button/MyButton";
import { changePassword, getProfileUser } from "../../Redux/Actions/user";
import EditProfile from "../../Components/EditProfile/EditProfile";
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

  return (
    <div className="profileBackground">
      <Container>
        <Box className="profileItem">
          <Box className="profileTitle">
            <ContactMailRoundedIcon className="icon" />
            <h4 className="title">Thông tin tài khoản</h4>
          </Box>
          <Box className="profileContent">
            <Box className="infoContent">
              <Box
                style={{ marginTop: "20px", marginRight: "20px", width: "60%" }}
              >
                <p className="infoUser">
                  Tên tài khoản: {userProfile.username}
                </p>
                <p className="infoUser">Email hiện tại: {userProfile.email}</p>
                <p className="infoUser">
                  Họ và Tên: {userProfile.last_name} {userProfile.first_name}
                </p>
                <p className="infoUser">Ngày sinh: {userProfile.dob}</p>
              </Box>
            </Box>
            <MyButton style={{ margin: 0 }} onClick={() => handleEdit()}>
              Chỉnh sửa
            </MyButton>
          </Box>
        </Box>
        <Box className="profileItem">
          <Box className="profileTitle">
            <VpnKeyRoundedIcon className="icon" />
            <h4 className="title">Mật khẩu</h4>
          </Box>
          <Box className="profileContent">
            <TextField
              label="Mật khẩu cũ"
              className="input"
              onChange={handleChange("old_password")}
            />
            <TextField
              label="Mật khẩu mới"
              className="input"
              onChange={handleChange("password")}
            />
            <TextField
              label="Xác nhận mật khẩu mới"
              className="input"
              onChange={handleChange("password2")}
            />
            <MyButton style={{ margin: 0 }} onClick={handleSubmit}>
              Đổi mật khẩu
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
