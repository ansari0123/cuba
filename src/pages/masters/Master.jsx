import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from '../../sharedComponents/Header'
import Sidebar from '../../sharedComponents/Sidebar'
import InviteCodes from './InviteCodes'

const Master = () => {
  return (
    <>
    <div className="main_container">
<div className="side_bar_container">
 <Sidebar/>
</div>
<div className="content_container">
<Header/>
<div className="content_background">
    <Outlet/>
</div>
</div>
</div>
</>
  )
}

export default Master