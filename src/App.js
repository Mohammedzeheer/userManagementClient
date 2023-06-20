import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/user/login/Login';
import Signup from './components/user/signup/Signup';
import Profile from './components/user/profile/profile';
import Profile2 from './components/user/profile/profile2';
import Header from './components/user/header/header';
import LoginPage from './pages/user/loginPage';
import ProfilePage from './pages/user/profilePage';
import AdminHeader from './components/admin/AdminHeader/AdminHeader';
import AdminLogin from './components/admin/AdminLogin/AdminLogin';
import AdminHome from './components/admin/AdminHome/AdminHome';
import AdminHomePage from './pages/admin/homePage';
// import UserHome from './components/user/userHome/UserHome';
import HomePage from './pages/user/homePage';
// import EditUser from './components/admin/AdminEditUser/EditUser';
import EditUserPage from './pages/admin/EditUserPage';
import AddUserPage from './pages/admin/AddUserPage';







// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element ={<ProfilePage/>} />
        <Route path="/pro" element ={<Profile2/>} />
        <Route path="/profile2" element ={<ProfilePage/>} />
        <Route path="/Header" element ={<Header/>} />  
        {/* <Route path="/home" element ={<UserHome/>} />   */}

        <Route path="/adminh" element ={<AdminHeader/>} />    
        <Route path="/admin" element ={<AdminLogin/>} />  
        {/* <Route path='/adminhome' element = {<AdminHome/>} /> */}
        <Route path="/adminhome" element={<AdminHomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/admin/edituser" element={<EditUserPage/>}/>
        <Route path="/admin/adduser" element={<AddUserPage/>}/>


             
      </Routes>
    </BrowserRouter>
  );
}

export default App;
