import React from 'react'
import setWelcomeMessage from './welcome'
import { useSelector } from 'react-redux'
import './userHome.css'


function UserHome() {
    // setWelcomeMessage();
    const { username, userId, image } = useSelector(state => state.user)
  return (
      <div class="containerUserHome">
        <h1>Welcome to Your Home Page</h1>
        <p className='para'>Hello,  <span id="username" style={{color:"red"}}>{username}</span>! We're glad to have you here.</p>
      </div>
    
  )
}

export default UserHome