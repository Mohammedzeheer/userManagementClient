import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import  './AdminHeader.css'

function AdminHeader() {

  const navigate = useNavigate()

  const handleLogout =()=>{
      localStorage.removeItem('admin')
      navigate('/admin')
  }


  return (
    <Fragment>
      <nav>
        <div className="navbar">
          <h1 className="logo">A1 Events</h1>
          <div className="navbar-right">
            {/* <span class="username">User Name</span> */}
            <button id="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
    </Fragment>
  ) 
}

export default AdminHeader