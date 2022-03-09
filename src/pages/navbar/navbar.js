import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import LiquorIcon from '@mui/icons-material/Liquor';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';  
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import IconButton from '@mui/material/IconButton';
import './navbar.css';


const navbar = () =>{
    return(
<div className="navbarmain"> 

<box className = "liquor"> 


<IconButton 
    aria-label="LiquorIcon"
    style = {{color:'#F7E25B', height: '60px'}}
    onClick={()=> {
      window.location.href= "/drinks"
    }}
    >
  <LiquorIcon />
</IconButton>
</box>

<box className = "home">
<IconButton 
    aria-label="HomeIcon"
    style = {{color:'#6E42F0'}}
    size="large"
    onClick = {()=>{
      window.location.href= "/"
    }}
    >
  <HomeIcon />
</IconButton>
</box>
<box className = "queue">
<IconButton 
    aria-label="QueueMusicIcon"
    style = {{color:'#47EEAE'}}
    onClick={()=> {
      window.location.href= "/queue"
    }}
    >
  <QueueMusicIcon />
</IconButton>
</box>

<box className = "togglesaudio">
<IconButton 
    aria-label="ToggleOnIcon"
    style = {{color:'#F75B5B'}}
    onClick={()=> {
      window.location.href= "/switch"
    }}
    >
  <ToggleOnIcon />
</IconButton>
</box>
  

  </div>
    )

}
  export default navbar;