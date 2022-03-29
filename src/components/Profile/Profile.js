import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom';

const Profile=()=>{
    
    const [users,setusers]=useState({});
    const params=useParams();
    useEffect(()=>{
axios.get(`http://localhost:4000/user-list/${params.id}`)
.then(res=>setusers(res.data))
.catch(e=>console.log(e));
    },[]);
    
   
    return(
       
      
        <div className='h-screen bg-pink-100'>
            {
                    <div>
                         <h1 className='p-10 text-2xl text-center text-red-600 font-bold'>Profile</h1>
                  
                       
                        <div className='ml-96 text-lg '>
                        <p>USER ID: <small className='ml-10  text-lg text-violet-900'>{users.id}</small></p>
                        <p>USER NAME: <small className='ml-10  text-lg text-violet-900'>{users.username} </small></p>
                        <p>NAME:   <small className='ml-10  text-lg text-violet-900'>{users.name} </small></p>
                        <p>EMAIL: <small className='ml-10  text-lg text-violet-900'> {users.email}</small></p>
                        <p>CONTACT:<small className='ml-10  text-lg text-violet-900'>{users.phone}</small></p>
                        <p>ADDRESS:<small className='ml-10  text-lg text-violet-900'>{users.address}</small></p>
                        <Link to="/users"><button className='rounded  bg-blue-500 hover:bg-blue-900 text-white p-3 m-10'>Back</button></Link>
                        <Link to={`/edit-profile/${users.id}`}><button className='rounded  bg-blue-500 hover:bg-blue-900 text-white p-3 m-10'>Edit Profile</button></Link>
                        </div>
                   
                    </div>
               
            }
           
        </div>
    )
}
export default Profile;