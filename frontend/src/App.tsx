import { Grid } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import { Login } from './components/Auth/login';
import { Signup } from './components/Auth/Signup';
import { BigHeader } from './components/helpers/BigHeader';
import { Navbar } from './components/helpers/Navbar';
import { Sidebar } from './components/helpers/Sidebar';

function App() {
  const [isSidebarOpen,setIsSideBarOpen] = useState(false);

  const openSidebar = ()=>{
    setIsSideBarOpen(true)
  }
  const closeSidebar = ()=>{
    setIsSideBarOpen(false);
  }
  return (
    <div className="App">
      <Navbar 
        isLoggedIn={false} 
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
      />
      <Grid container spacing={0}>
      { 
     isSidebarOpen && <Grid item xs={3}>
       <Sidebar/>
       </Grid>
     }
     <Grid item xs={9}>
        {/* <Login/> */}
        {/* <Signup/> */}
        <BigHeader title="big title"
        description = "big description"
        photoUrl="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
      </Grid>
     </Grid>
     </div>
  );
}

export default App;
