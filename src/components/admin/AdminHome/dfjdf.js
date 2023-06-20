import React from 'react'
import './AdminHome.css'
import userSlice from '../../../redux/user/userSlice'

function AdminHome() {
  return (
    <div className='bodyAdminHome'>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Password</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>JaneSmith</td>
          <td>*********</td>
          <td><img src="avatar.jpg" alt="User Avatar"/></td>
          <td>
          <button class="edit-btn"><i class="fas fa-edit"></i></button>
          <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
        </td>
        </tr>
      </tbody>
    </table></div>
  )
}

export default AdminHome