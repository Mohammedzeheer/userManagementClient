import React, { Fragment } from 'react'
import UserHome from '../../components/user/userHome/UserHome'
import Header from '../../components/user/header/header'




function homePage() {
    return (
        <Fragment>
            <Header />
            <UserHome />
        </Fragment>
    )
}

export default homePage