import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";

const StyledButton = styled.button`
  background-color: skyblue;
  border-radius: 20px;
  border: 0;
  margin: 2vh;
  padding: 1vh;
  outline: 0;
  cursor: pointer;
`;

const Lists = () => {
  const [members, setMembers] = useState([]);
  // 로딩 구현 - 응답이 오기 전
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //axios
  useEffect(() => {
    // async는 한번 선언을 해줘야 함
    const fecthData = async () => {
      setLoading(true);
      // 응답 오는 걸 변수 설정 한 번 해준 것 - 비동기적으로 해결(속도 향상 위해)
      const response = await axios.get(
        "https://220213fa-2acc-4019-a210-b010a269ce40.mock.pstmn.io"
      );
      setMembers(response.data);
      setLoading(false);
    };
    // callback 함수로 선언했으니 호출해야 됨
    fecthData();
  }, []);
  //  [members]하면 members가 바뀔 때마다 불러와라 라는 의미
  console.log(members);

  if (loading) {
    return <h1>로딩 중</h1>;
  }

  //   members에 아무것도 없다면 null -> 이거 안하면 흰화면에 아무것도 뜨지 않음
  if (!members) {
    return null;
  }

  //fetch
  //   useEffect(() => {
  //     fetch("https://16b9534b-1b6f-4e0a-bd63-b966d5d571f7.mock.pstmn.io/list")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       // 불러온 data를 setMembers에 넣어주기
  //       .then((data) => {
  //         setMembers(data);
  //       });
  //   }, []);

  // url, id 를 인수로 받아오겠다!
  const handleClick = (url, id) => {
    //  memId는 1부터 시작하지만 배열 인덱스 상으로는 0부터 시작하니 id-1
    navigate(url, { state: members[id - 1] });
  };

  return (
    <>
      {members.map((member) => (
        <StyledButton
          onClick={() => handleClick(`/${member.memId}`, member.memId)}
          key={member.memId}
        >
          {" "}
          {member.name}
        </StyledButton>
      ))}
      {/* 버튼 아래 Outlet 두면 버튼 아래 정보가 나옴 */}
      <Outlet />
    </>
  );
};

export default Lists;
