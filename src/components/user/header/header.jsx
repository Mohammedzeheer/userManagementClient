import React, { useEffect } from 'react'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Header() {
  const navigate=useNavigate()
  useEffect(()=>{
    const token= localStorage.getItem('user')

    axios.post('http://localhost:5000',{token}).then((res)=>{
      
      if(res.data.token){
        if(res.data.token==='valid'){
          
        }else{
          localStorage.removeItem('user')
          navigate('/')
        }
      }else{
        navigate('/')
      }
    })
    
  },[])
  const handleLogout=(e)=>{
    e.preventDefault()
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div>


      {/* <div className="header">
        <div>
          <span className="profile-icon"></span>
          <span>Username</span>
        </div>
        <div>       
          <a className="home-btn" class="fa-solid fa-user fa-bounce" >Profile</a>
          <li><Link to={'/profile'}> <i className="fa-solid fa-user fa-bounce" ></i> Profile</Link></li>
          <a className="logout-btn" onClick={handleLogout}>Logout</a>
        </div>
      </div> */}



      <nav className="navbar">
        <div className="left">
          <h1 className='h1l'>A 1 Events</h1>
        </div>
        <div className="right">
          <input type="checkbox" id="check" />
          <label for="check" className="checkBtn">
            <i className="fa fa-bars"></i>
          </label>
          <ul className="list">
            <li><Link to={'/profile'}> <i class="fa-solid fa-user fa-bounce"></i> Profile</Link></li>
            <li style={{marginTop:6}}><a href=' ' onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header

// import React, { useEffect } from 'react'
// import './header.css'
// import { useNavigate } from 'react-router-dom'

// function Header() {

//  const navigate=useNavigate()
//   useEffect(()=>{

//   })
//   return (
//     <div class="header">
//     <div>
//       <span class="profile-icon"></span>
//       <span>Username</span>
//     </div>
//     <div>
//       <a class="logout-btn" onClick={navigate('/')}>Logout</a>
//       <a class="home-btn" >Home</a>
//     </div>
//   </div>
//   )
// }

// export default Header