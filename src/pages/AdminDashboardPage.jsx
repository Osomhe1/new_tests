import React, { useState } from "react";
import {  useNavigate } from "react-router";

const AdminDashboardPage = () => {
  const [logOut, setLogOut] = useState(false)
  let navigate = useNavigate()

   const logout = (e) => {
    e.preventDefault()
     localStorage.clear()
     setLogOut(logOut)
     console.log('logout');
     navigate('/admin/login')
   }
  return (
    <>
      <div className='w-full flex justify-center items-center text-7xl h-screen text-gray-700 '>
        Dashboard
        <div className=''>
          <button className="bg-red-500 text-md p-5 text-gray-50  " onClick={logout} >Logout</button>
        </div>
      </div>
    </>
  )
};

export default AdminDashboardPage;
