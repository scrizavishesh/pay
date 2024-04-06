import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Approval_Agent from '../Pages/Approval_Agent';
import DashboardMain from '../Pages/DashboardMain';
import Manual_Order from '../Pages/Manual_Order';

const Container = styled.div`
  /* styles */
`;

const PageRouter = () => {

  

  const [role, setRole] = useState();

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("data"));
    setRole(profile[0].is_agent);
  }, []);


  return (
    <Container>
      <Routes>
        <Route path="/" element={<DashboardMain />} />
        {role ? (
          <Route path="/manual_order" element={<Approval_Agent />} />
        ) : (
          <Route path="/manual_order" element={<Manual_Order />} />
        )}
      </Routes>
    </Container>
  );
};

export default PageRouter;

