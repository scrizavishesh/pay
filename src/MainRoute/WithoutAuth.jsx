import { Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import Login from "../Dashboard/Login";
// import Create_Fund from "../Pages/Create_Fund";

const Container = styled.div`
  /* background-color: #F2F3F6; */
`;
const WithoutAuth = () => {

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/create_fund/:urlParam" element={<Create_Fund />} /> */}
        </Routes>
      </Container>
    </>
  );
};

export default WithoutAuth;
