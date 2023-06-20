import React, { Fragment } from 'react'
import Header from '../../components/user/header/header'
import Profile2 from '../../components/user/profile/profile2'
import Profile from '../../components/user/profile/profile'


function profilePage() {
  return (
    <Fragment>
        <Header/>
        <Profile/>
    </Fragment>
  )
}

export default profilePage