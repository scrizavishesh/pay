import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Admin_Order from '../Pages/Admin_Order';
import Approval_Agent from '../Pages/Approval_Agent';
import CreateUser from '../Pages/CreateCreator';
import DashboardMain from '../Pages/DashboardMain';
import Download from '../Pages/Download';
import SuperAdminUserList from '../Pages/SuperAdminUserList';
import SuperAdmin_Order from '../Pages/SuperAdmin_Order';
import UpdateUser from '../Pages/Password_Update_User';
import Update_user from '../Pages/Update_user';
import ResetPassword from '../Pages/ResetPassword';
import CreateSubCreator from '../Pages/CreateSubCreator';
import SubCreatorList from '../Pages/SubCreatorList';
import ResetCreatorPassword from '../Pages/ResetCreatorPassword';
import Update_Sub_Creator from '../Pages/Update_Sub_Creator';
import { decryptData } from '../utils/Encrypt_data';

const Container = styled.div`
  /* styles */
`;

const PageRouter = () => {
  const [role, setRole] = useState();
  const [superAdmin, setSuperAdmin] = useState();

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('data'));
    // const profile = decryptData(encryptedUserData);
    if (profile && profile.length > 0) {
      setRole(profile[0].is_agent);
      setSuperAdmin(profile[0].is_superadmin);
    }
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<DashboardMain />} />
        <Route path="/create_creator" element={<CreateUser />} />
        <Route path="/updateuser" element={<UpdateUser />} />
        {role ? (
          <Route path="/manual_order" element={<Approval_Agent />} />
        ) : (
          superAdmin ? (
            <>
              <Route path="/manual_order" element={<SuperAdmin_Order />} />
              <Route path="/download" element={<Download />} />
              <Route path="/userlist" element={<SuperAdminUserList />} />
              <Route path="/updateuser/:id" element={<Update_user />} />
              <Route path="/resetpassword/:id" element={<ResetPassword />} />
            </>
          ) : (
            <>
              <Route path="/create_sub_creator" element={<CreateSubCreator />} />
              <Route path="/update_sub_creator/:id" element={<Update_Sub_Creator />} />
              <Route path="/reset_password_sub_creator/:id" element={<ResetCreatorPassword />} />
              <Route path="/manual_order" element={<Admin_Order />} />
              <Route path="/sub_creator_list" element={<SubCreatorList />} />
            </>
          )
        )}
      </Routes>
    </Container>
  );
};

export default PageRouter;
