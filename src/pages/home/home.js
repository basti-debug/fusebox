import  Navbar from "../navbar/navbar.js";
import './home.css';
import React from "react";
import kellerpic from '../../sources/keller1.jpg';

var varusername = "basti"
var songnamevar = "One Day At A Time"
var artistvar = "Nu:Tone, Lalin St. Juste"

const CLIENT_ID = "4989153d89f24776aafab0641779427a"
const REDIRECT_URI = "http://192.168.212.89:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

const HomeTab = () => {
  return (

    

<div className="main">

  <img src={kellerpic} className="picutre1"/>

  
  <div className="down">
    <div className = "motd">
    <h1>
      Good Evening
    </h1>
    
    <h3 className="usernamelabel">
      {varusername}
    </h3>
    </div>
    <script src="https://sdk.scdn.co/spotify-player.js"></script>

    <div className="musiccontrolls">
    <label className="currentlyplay">
      Currently playing:
    </label>

    <label className="songname" >
    {songnamevar}
    </label>
    
    <label className="artistlabel">
      {artistvar}
    </label>
    </div>

  </div>



<Navbar />
    
</div>

  );
}

export default HomeTab;