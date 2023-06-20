import React, { Fragment } from 'react'
import AdminHeader from '../../components/admin/AdminHeader/AdminHeader'
import EditUser from '../../components/admin/AdminEditUser/EditUser'

function EditUserPage() {
  return (
    <Fragment>
       <AdminHeader/>
       <EditUser/>
   </Fragment>
  )
}

export default EditUserPage