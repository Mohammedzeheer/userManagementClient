import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import './addUser.css'

function AddUser() {
    const navigate=useNavigate();  
    const [user,setUser] = useState({})

    
    const generateError = (err) => toast.error(err, {
        position: "bottom-right"
    })
     

    const handleAddUser=async(e)=>{
        e.preventDefault()
        const {data}=await axios.post('http://localhost:4000/admin/addUser',{...user},{withCredentials:true})
        console.log(data,"-----------------------------------------");
        if(data.status){
            navigate('/admin')
        }else{
            const {username,password}= data.errors
            if(username) generateError(username)
            else generateError(password)
        }
    }
 

  return (
    <div className="bodySignup">
    <div className="containerS">  
    <h2>Add User</h2>
    <input type="text" placeholder="Username" name="username" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} className="input" />
     <input type="password" placeholder="Password" name="password" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} className="input" />
    <button type="submit" onClick={handleAddUser} className="button">Add</button>
    </div>
    <ToastContainer />
    </div>
  )
}

export default AddUser