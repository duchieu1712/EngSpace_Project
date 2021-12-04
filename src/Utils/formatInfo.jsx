import React from "react";

const FormatInfo = (props) => {
  const { date, user } = props;
  return (
    <p style={{fontSize:"14px"}}>
      {date.slice(11, 16)}, {date.slice(8, 10)} tháng{" "}
      {date.slice(5, 7)} năm {date.slice(0, 4)} từ{" "}
      {user}
    </p>
  );
};

export default FormatInfo;
