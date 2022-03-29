import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout';
import Create from './components/Create/Createuser';
import Edit from './components/Edit/EditUser'
import axios from 'axios';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Editprofile/EditProfile'
function App() {
  
  const DeleteUser=(id)=>{
   
      axios.delete(`http://localhost:4000/user-list/${id}`)
      .then(res=>console.log("successfully deleted the user,",id))
      .catch(e=>console.log(e));
      
  }
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/users" element={<Home delUser={DeleteUser}/>}/>
        <Route path="/create-user" element={<Create/>}/>
        <Route path="/edit-user/:id" element={<Edit/>}/>
        <Route path="/edit-profile/:id" element={<EditProfile/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>        
      </Routes>

    </div>
  );
}

export default App;
