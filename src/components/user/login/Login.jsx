import React, { Fragment } from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'  //naviagete page path
import axios from 'axios';  // axios for connect with node (API)
import {ToastContainer , toast } from 'react-toastify'  // for error npm 
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {updateUser} from '../../../redux/user/userSlice';
import Header from '../header/header';
import '../login/login.css'
import './custom.css'

function Login() {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const [user,setUser]=useState({})

  useEffect(()=>{
    let user=localStorage.getItem('user')
    if(user){
      Navigate('/home')
    }
  },[])

  const handleLogin = (e)=>{
    e.preventDefault() // for make render 
    axios.post('http://localhost:4000/login',{...user},{withCredentials:true}).then((res)=>{
      res=res.data
      if(res){
        console.log(res);
        if(res.errors){
          const{username,password}= res.errors
          if (username) generateError(username)
          else if (password) generateError(password)
        }else{
          localStorage.setItem('user',JSON.stringify(res))
          console.log(res.user);
          dispatch(updateUser({username:res.user.username,userId:res.user._id,image:res.user.image}))
          Navigate('/home')
        }
      }
    })
  }

  const generateError = (err) => toast.error(err, {
    autoClose: 2000, 
    position: toast.POSITION.TOP_CENTER
})

const generateError1 = (err) => {
    toast.error(
      err,
      {
        // position: "bottom-right",
        position:toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Adjust the autoClose duration as needed
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
  
  

  return ( 
      <Fragment>
          <div className="bodyLogin">
              <div className="containerL">
                  <h2>Login</h2>
                  <input type="text" placeholder="Username" name="username" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} className="input" />
                  <input type="password" placeholder="Password" name="password" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} className="input" />
                  <button type="submit" className="button" onClick={handleLogin}>Login</button>
                  <br />  
                  {/* <p><span style={{fontSize:15}}>Don't have an account?   </span><a style={{color:"#333" ,fontWeight:5 }} onClick={() => Navigate('/Signup')}>SignUp</a></p> */}
                 
                  <p><span className='doyouhave'>Don't have an account?</span><a className='navigateSignup' onClick={() => Navigate('/Signup')}> Sign up</a></p>
                 
                  <div className='thosterror'> {/* <ToastContainer /> */}</div> 
                
              </div>             
              <ToastContainer />
          </div>
      </Fragment>
     
  )
}

export default Login