import Navbar from "../navbar/navbar.js"
import "../navbar/navbar.css"
import "./music.css"
import { Button } from "@mui/material"
import { IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { LinearProgress } from "@mui/material"
import { TextField } from "@mui/material"
import { fontFamily } from "@mui/system"

var progress = 3


const Music = ()=>{
    return(
        <div className="mainmusic">
        <h1 className="headlinemusic">
            Queue
        </h1>
        <div className="searchicon">
        <IconButton 
        style = {{color:'#FFFFFF'}}
        size="large" 
        >
        <SearchIcon />
        </IconButton>
        </div>
       
        <TextField 
        className="searchbar"
        color="secondary"
        label="search songs" 
        sx={{ input: { color: 'white',fontFamily:'Montserrat' } }}
        focused
          />

        <div className="displaycurrentmusic">
        <label className="currentlyplay2">
          Currently playing:
        </label>

        <label className="songname2" >
        The Night
        </label>
    
        <label className="artistlabel2">
        Finn Foxell
        </label>
        <LinearProgress 
        color="secondary"
        className="progressbar"
        variant="determinate" 
        value={progress} />
        </div>
        <Navbar/>
        </div>
    )
}

export default Music;