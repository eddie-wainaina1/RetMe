import { Menu, MenuOpen } from "@mui/icons-material"
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { useState } from "react"


interface NavbarProps{
    isLoggedIn:boolean,
    openSidebar:()=>void
    closeSidebar:()=>void
}
export const Navbar = (props:NavbarProps)=>{
    const [isSidebarOpen,setIsSideBarOpen] = useState(false);
    const openSidebar = ()=>{
        props.openSidebar();
        setIsSideBarOpen(true);
    }
    const closeSidebar = ()=>{
        props.closeSidebar();
        setIsSideBarOpen(false);
    }
    return <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
        {
            isSidebarOpen ? 
            <MenuOpen onClick={closeSidebar}/>:
            <Menu onClick={openSidebar}/>
        }
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RetMe
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
}