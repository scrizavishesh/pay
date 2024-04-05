import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Create_Fund from '../Pages/Create_Fund';
import Login from '../Dashboard/Login';

const WithoutAuth = () => {

  // const token = localStorage.getItem("token");

  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create_fund/:order_id/:receipt/:agent" element={<Create_Fund />} />
        </Routes>
    </>
  )
}

export default WithoutAuth


