import React, { Fragment } from 'react'
import AdminHeader from '../../components/admin/AdminHeader/AdminHeader'
import AdminHome from '../../components/admin/AdminHome/AdminHome'


function homePage() {
  return (
    <Fragment>
         <AdminHeader/>
         <AdminHome/>
    </Fragment>
  )
}

export default homePage