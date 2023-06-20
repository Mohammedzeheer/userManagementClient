import React, { useEffect, useState } from 'react'
import './AdminLogin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../../user/login/custom.css'

function AdminLogin() {
    const navigate= useNavigate()

    useEffect(()=>{
        const admin= localStorage.getItem('admin')
        if(admin){
            navigate('/adminhome')
        }
    },[])
    
    const generateError = (err) => {
        toast.error(
          err,
          {
            position:toast.POSITION.TOP_CENTER,
            autoClose: 2000, // Adjust the autoClose duration as needed
            style: {
              background: "#f44336",
              color: "#ffffff",
              fontSize: "14px",
              whiteSpace: "nowrap"
            },
            toastClassName: "custom-toast-error"
          }
        );
      };

    const [admin,setAdmin]= useState({})

    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/admin',{...admin},{withCredentials:true}).then((res)=>{    
            const data=res.data
            console.log(data);
            if(data){
                if(data.errors){
                    const {username,password}=data.errors
                    if(username) generateError(username)
                    else generateError(password)    
                }else{
                    if(data.token){
                        localStorage.setItem('admin',JSON.stringify(data))
                        navigate('/adminhome')
                    }
                }
            }
        })
    }

    return (
        <div className='bodyAdminLogin'>
            <div className="login-container">
                <div class="admin-symbol">&#9812;</div>
                <h1 className="login-header">Admin Login</h1>   
                <form className="login-form">
                    <input type="text" name="username" placeholder="Username" className="input-field" onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})} required />
                    <input type="password" name="password" placeholder="Password" className="input-field" onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})} required />
                    <button type="submit" onClick={handleLogin} className="login-button" >Login</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default AdminLogin