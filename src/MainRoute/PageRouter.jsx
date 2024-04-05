


import { Routes, Route } from "react-router-dom";
import styled from 'styled-components'
// import Create_Fund from "../Pages/Create_Fund";
import DashboardMain from '../Pages/DashboardMain';
import Manual_Order from "../Pages/Manual_Order";
// import Scanner_page from "../Pages/Scanner_page";

const Container = styled.div`
  /* background-color: #F2F3F6; */
`;
const PageRouter = () => {
  
  return (
    <>
      <Container>
        <Routes>
          <Route path="/dashboard" element={<DashboardMain />} />
          <Route path="/manual_order" element={<Manual_Order />} />
          {/* <Route path="/create_fund/:urlParam" element={<Create_Fund />} /> */}
          {/* <Route path="/pay" element={<Scanner_page />} /> */}
        </Routes>
      </Container>
    </>
  );
};

export default PageRouter;
