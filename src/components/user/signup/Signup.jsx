import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import '../signup/signup.css'

function Signup() {
    const navigate=useNavigate()

    useEffect(()=>{
        let user=localStorage.getItem('user')
        if(user){
          navigate('/')
        }
      },[])
   
    
    const [user,setUser]=useState({
        username:" ",
        password:" "
    })
    
    const generateError = (err) => toast.error(err, {
        position: "bottom-right"
    })
     
    const handleSubmit=  async(e)=>{
        e.preventDefault()
        const { data } = await axios.post("http://localhost:4000/register", { ...user}, { withCredentials: true })
        console.log(data)
            console.log(data);
            if (data) {
            if (data.errors) {
                const { username, password } = data.errors
                if (username) generateError(username)
                else if (password) generateError(password)
            } else {
                navigate("/")
            }
        }
    }
 

  return (
    <div className="bodySignup">
    <div className="containerS">  
    <h2>Sign Up</h2>
    <input type="text" placeholder="Username" name="username" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} className="input" />
    {/* <input type="text" placeholder="PhoneNumber" name="phonenumber" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} className="input" /> */}
    {/* <input type="email" placeholder="Email" name="email" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} className="input" /> */}
    <input type="password" placeholder="Password" name="password" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} className="input" />
    <button type="submit" onClick={handleSubmit} className="button">SignUp</button>
    <br/> 
    {/* <a onClick={()=>navigate('/')}>for Login </a> */}
    <p><span className='doUhvAccount'>have an account?</span><a className='navigateLogin' onClick={() => navigate('/')}> Log in</a></p>
                 
     
    </div>
    <ToastContainer />
    </div>
  )
}

export default Signup