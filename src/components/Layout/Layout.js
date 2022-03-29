import { useNavigate } from 'react-router-dom';
import React from 'react';

const Layout=()=>{
    const navigate=useNavigate();
    
    return (
        <div>
            <h1 className='text-center text-red-600 font-bold text-xl m-10'>Users API</h1>
            <div className='text-center m-20'>
                <img className='ml-96' src='https://rietveld-ict.nl/wp-content/uploads/2014/01/users.png' alt='users'/>
                <button className='rounded p-5 m-10 mr-20 bg-gray-500 hover:bg-gray-900 text-white' onClick={()=>navigate('/users')}>Show Users</button>
            </div>
        </div>
    )
}
export default Layout;