import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Admin_Order from '../Pages/Admin_Order';
import Approval_Agent from '../Pages/Approval_Agent';
import CreateUser from '../Pages/CreateUser';
import DashboardMain from '../Pages/DashboardMain';
import Download from '../Pages/Download';
import SuperAdmin_Order from '../Pages/SuperAdmin_Order';
import UpdateUser from '../Pages/UpdateUser';

const Container = styled.div`
  /* styles */
`;

const PageRouter = () => {
  const [role, setRole] = useState();
  const [superAdmin, setSuperAdmin] = useState();

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("data"));
    if (profile && profile.length > 0) {
      setRole(profile[0].is_agent);
      setSuperAdmin(profile[0].is_superadmin);
    }
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<DashboardMain />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/updateuser" element={<UpdateUser />} />
        {role ? (
          <Route path="/manual_order" element={<Approval_Agent />} />
        ) : (
          superAdmin ? (
           <>
            <Route path="/manual_order" element={<SuperAdmin_Order />} />
            <Route path="/download" element={<Download />} />
           </>
          ) : (
            <Route path="/manual_order" element={<Admin_Order />} />
          )
        )}
      </Routes>
    </Container>
  );
};

export default PageRouter;
