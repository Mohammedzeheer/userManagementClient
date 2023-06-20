import React, { useEffect, useState } from 'react';
import './EditUser.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer ,toast } from 'react-toastify';


const EditUser = () => {
    const { name, id } = useSelector(state => state.admin)
     const [username,setUsername]=useState(name)
     const navigate= useNavigate()


    const generateError = (err) => toast.error(err, {
        position: "bottom-right"
      })
    

    const handleUserEdit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/admin/edituser',{username,id},{withCredentials:true}).then((res)=>{
          let data= res.data
          if(data.errors){
            const {username} = data.errors
            if(username) generateError(username) 
          }else{
            navigate('/admin')
          }
        })
      }


    return (
        <div className='bodyAdminLogin'>
        <div className="login-container">
            <div class="admin-symbol"></div>
            <h1 className="login-header">Edit User</h1>   
            <form className="login-form" onSubmit={handleUserEdit}>
                <input type="text" name="username"  value={username} placeholder="Username" className="input-field"  onChange={(e)=>setUsername(e.target.value)} />
                {/* <input type="password" name="password" placeholder="Password" className="input-field" required /> */}
                <button type="submit" className="login-button" >Save</button>
            </form>
        </div>
        <ToastContainer/>
        </div>
    );
};

export default EditUser;
