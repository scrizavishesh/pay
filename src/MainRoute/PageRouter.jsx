import { Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import DashboardMain from '../Pages/DashboardMain';
import Manual_Order from "../Pages/Manual_Order";

const Container = styled.div`
  /* styles */
`;

const PageRouter = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<DashboardMain />} />
        <Route path="/manual_order" element={<Manual_Order />} />
      </Routes>
    </Container>
  );
};

export default PageRouter;
