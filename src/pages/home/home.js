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

    <div className="musiccontrolls1">
      <div className="currentlyplay1">
      Currently playing:
      </div>

      <div className="songname1" >
      The Night
      </div>
    
      <div className="artistlabel1">
      Finn Foxell
      </div>
    </div>
    <div className="drinkoftheday">
      <div className="label1">
      Drink of the Day 
      </div>

      <div className="drinkname1" >
      Salzi - Spezial
      </div>
    
      <div className="by1">
      recommended by simon
      </div>

    

    </div>
  </div>



<Navbar />
    
</div>

  );
}

export default HomeTab;