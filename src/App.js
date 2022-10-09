import { Route, Router, Routes } from 'react-router-dom';
import './assets/css/main.css'
import Login from './pages/Login';
import Header from './sharedComponents/Header';
import Sidebar from './sharedComponents/Sidebar';
import InviteCodes from './pages/masters/InviteCodes';
import { AppContext } from "../src/context/AppContext";
import { useContext } from 'react';
import Master from './pages/masters/Master';
import Dashboard from './pages/dashboard/Dashboard';
import WaitingList from './pages/masters/WaitingList';
import Retailers from './pages/masters/Retailers';
import Platforms from './pages/masters/Platforms';
import Users from './pages/masters/Users';
import BoardingScreens from './pages/masters/BoardingScreens';
import TaskType from './pages/masters/TaskType';
import CampaignWizard from './pages/masters/CampaignWizard';
import Campaign from './pages/Campaign';
function App() {
  const login = localStorage.getItem('login');
  return (
      <>

        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/masters' element={ login?<></>:<Master/>}>
            <Route path='invite_codes' element={login?<></>:<InviteCodes/>}/>
            <Route path='waiting_list' element={login?<></>:<WaitingList/>}/>
            <Route path='retailers' element={login?<></>:<Retailers/>}/>
            <Route path='platforms' element={login?<></>:<Platforms/>}/>
            <Route path='users' element={login?<></>:<Users/>}/>
            <Route path='boarding_screens' element={login?<></>:<BoardingScreens/>}/>
            <Route path='task_types' element={login?<></>:<TaskType/>}/>
          </Route>
          <Route exact path='/campaign_wizard' element={<CampaignWizard/>}/>
          <Route exact path='/campaigns' element={<Campaign/>}/>
        </Routes>
        
       
      </>
  );
}

export default App;
