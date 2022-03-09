import  Navbar from "../navbar/navbar.js";
import './home.css';
import React, { Component } from "react";
import kellerpic from '../../sources/keller1.jpg';
import SpotifyWebApi from "spotify-web-api-js";
const spotifyapi = new SpotifyWebApi();


var usernamevar = "user"
var songnamevar = ""
var artistvar = "Nu:Tone, Lalin St. Juste"




spotifyapi.setAccessToken('');

function currentlyplaying(){
  spotifyapi.getMyCurrentPlaybackState()
        .then((response) => {
          console.log(response.item.name)
          return response.item.name
        })
}
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
    </h3>
    </div>

    <div className="musiccontrolls">
    <label className="currentlyplay">
      Currently playing:
    </label>

    <label className="songname" >
      
    </label>
    
    <label className="artistlabel">
    </label>

    <button onClick={() => currentlyplaying()}>
            Check Now Playing
          </button>

    </div>

  </div>



<Navbar />
    
</div>

  );
}

export default HomeTab;