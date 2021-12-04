import React,{useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MyButton from '../../Utils/Button/MyButton';
import { updateProfileUser } from "../../Redux/Actions/user";
import { useDispatch } from "react-redux";
export default function EditProfile({userProfile}) {
  const [user, setUser] = useState({
    email: userProfile.email,
    first_name: userProfile.first_name,
    last_name: userProfile.last_name,
    dob: userProfile.dob,
  });
const dispatch = useDispatch()
  const handleChange = (type) => (event) => {
    setUser({ ...user, [type]: event.target.value });
  };
  const handleSubmit = (user) => {
    dispatch(updateProfileUser(user))
    // console.log(user);
  };
  return (
    <Box className="editInfo">
      <h4>Chỉnh sửa thông tin</h4>

      <TextField
        label="Email"
        className="inputEdit"
        value={user.email}
        onChange={handleChange("email")}
      />
      <TextField
        label="Họ"
        className="inputEdit"
        value={user.last_name}
        onChange={handleChange("last_name")}
      />
      <TextField
        label="Tên"
        className="inputEdit"
        value={user.first_name}
        onChange={handleChange("first_name")}
      />
      <TextField
        label="Ngày sinh(YYYY-MM-DD)"
        className="inputEdit"
        value={user.dob}
        onChange={handleChange("dob")}
      />
      <MyButton onClick={() => handleSubmit(user)}>Lưu</MyButton>
    </Box>
  );
}
