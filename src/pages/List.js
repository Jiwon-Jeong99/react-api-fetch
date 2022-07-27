import React from "react";
import { useLocation } from "react-router-dom";

// useNavigate(값 가져오기) - useLocation(값 받기) : 짝꿍
const List = (props) => {
  // useLocation은 정보를 가져와서 쓰는 거기 때문에 {} 써줘야 함
  const { state } = useLocation();
  return (
    <>
      <p>memId = {state.memId}</p>
      <p>name = {state.name}</p>
      <p>nickname = {state.nickname}</p>
      <p>role = {state.role}</p>
      <p>description = {state.description}</p>
    </>
  );
};

export default List;
