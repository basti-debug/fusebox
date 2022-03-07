
import Switch1 from '@mui/material/Switch';
import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import "./switch.css"
import Navbar from "../navbar/navbar.js" 
import "../navbar/navbar.js"
import supplypic from '../../sources/power-supply.png';
import React from 'react';

var switch1 = false;
var switch2 = false;
var sliderval = 1;

function valuetext(value){
    return "{value}";
}

function setswitch1(){
  
    if (switch1==false)
    {
        switch1 = true;
        fetch('http://192.168.137.114/supply1on')
        .then(response => response.json())
        .then(data => console.log(data.total));
    }
    else
    {
        switch1 = false;
        fetch('http://192.168.137.114/supply1off')
        .then(response => response.json())
        .then(data => console.log(data.total));
    }

    console.log(switch1)
}

function setswitch2(){
    
    if (switch2==false)
    {
        switch2= true;
        fetch('http://192.168.137.114/supply2on')
        .then(response => response.json())
        .then(data => console.log(data.total));
    }
    else
    {
        switch2 = false;
        fetch('http://192.168.137.114/supply2off')
        .then(response => response.json())
        .then(data => console.log(data.total));
    }
    console.log(switch2)
}

function handleslider(){
console.log(sliderval)
}

const Switch = ()=>{
    return(


        <div className="mainswitch">
            
        <Navbar />
        <h1 className="headlineswitch">
            Controll PowerSupplys and Outputs
        </h1>
        <div className="quickactions1">  
                
                
                <div className="q1info">
                    PowerSupply 1
                </div>
                
                <img src={supplypic} alt="picture of a powersupply" className="supplypic1"/>

                
                <Switch1 className="q1switch"
                   onChange={()=> {setswitch1()}}
                />
        </div>

        <div className="quickactions2">
                
                
                <div className="q2info">
                    PowerSupply 2
                </div>
                
                <img src={supplypic} alt="picture of a powersupply" className="supplypic2"/>

                
                <Switch1 className="q2switch"
                   onChange={()=> {setswitch2()}}
                /> 
        </div>

        <div className="sliderdiv">

        <label className="labeloutput1">
            Output 3 
        </label>
        <label className="labeloutput2">
            Plattenspieler / Mikrofon
        </label>
        <label className="labeloutput3">
            Output 2 
        </label>
        <label className="labeloutput4">
            Beamer
        </label>
        <label className="labeloutput5">
            Output 1 
        </label>
        <label className="labeloutput6">
            Spotify
        </label>
        <Box  sx = {{height:220}} className="slideroutputs">
            <Slider 
                
                orientation = "vertical"
                defaultValue={sliderval}
                getAriaValueText={valuetext}
                step={1}
                marks
                max={3}
                min={1}
                onChange={handleslider()}
                
            />
        </Box>
        

        </div>
        
        </div>
    )
}

export default Switch;