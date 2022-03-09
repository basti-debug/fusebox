import "./drinks.css" 
import Navbar from "../navbar/navbar.js";
import "../navbar/navbar.css"
import { Button, Icon } from "@mui/material";
import { IconButton } from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';

import glass from '../../sources/drinks/emptyglass.png'

//drinks 

import acapulcopic from '../../sources/drinks/acapulco.jpg';
import ambassadorpic from '../../sources/drinks/ambassador.jpg'
import amfpic from '../../sources/drinks/amf.png'
import baybreezepic from '../../sources/drinks/baybreeze.png'
import bluehawaiipic from '../../sources/drinks/bluehawaii.jpg'
import bluekamikazepic from '../../sources/drinks/bluekamikaze.png'
import bluelagoonpic from '../../sources/drinks/bluelagoon.jpg'
import blueoceanpic from '../../sources/drinks/blueocean.png'
import caipirinhapic from '../../sources/drinks/caipirinha.png'
import melonballpic from '../../sources/drinks/melonball.jpg'
import midoriillusionpic from '../../sources/drinks/midoriillusion.jpg'
import caipiroskapic from '../../sources/drinks/caipiroska.jpg'
import capecodpic from '../../sources/drinks/capecod.png'
import cosmopolitanpic from '../../sources/drinks/cosmopolitan.jpg'
import cubalibrepic from '../../sources/drinks/cubalibre.jpg'
import daiquiripic from '../../sources/drinks/daiquiri.jpg'
import cultopic from '../../sources/drinks/cultoalavida.jpg'
import fuzzypic from '../../sources/drinks/fuzzynavel.jpg'
import greenmexpic from '../../sources/drinks/greenmexican.jpg'
import greyhoundpic from '../../sources/drinks/greyhound.jpg'
import hairynavelpic from '../../sources/drinks/hairynavel.jpg'
import hornybullpic from '../../sources/drinks/hornybull.jpg'
import jappic from '../../sources/drinks/japaneseslipper.jpg'
import jollyrancherpic from '../../sources/drinks/jollyrancher.jpg'
import kamikazepic from '../../sources/drinks/kamikaze.jpg'
import liquidmarpic from '../../sources/drinks/liquidmarijuana.jpg'
import longbeachpic from '../../sources/drinks/longbeachicedtea.jpg'
import longislandpic from '../../sources/drinks/longisland.jpg'
import malibubaybreezepic from '../../sources/drinks/malibubaybreeze.jpg'
import margaritapic from '../../sources/drinks/margarita.jpg'
import martinilemonpic from '../../sources/drinks/martinilemon.jpg'
import mojitopic from '../../sources/drinks/mojito.jpg'
import rocketfuelpic from '../../sources/drinks/rocketfuel.jpg'
import screwdriverpic from '../../sources/drinks/screwdriver.jpg'
import seabreezepic from '../../sources/drinks/seabreeze.jpg'
import sexonthebeachpic from '../../sources/drinks/sexonthebeach.jpg'
import tequilaslammerpic from '../../sources/drinks/tequilaslammer.jpg'
import woowoopic from '../../sources/drinks/woowoo.jpg'
import salzipic from '../../sources/drinks/salzi.jpg'

const Drinks = () => {
    return(
        
        

    <div className="main">
       
        <div className="downdrinks">
        <h1 className = "headlinedrinks">Drinks</h1>
        <div className="drinky" >
            
            <img src= {glass} className="drinkpic"/>
            <label className="drinkname">
            Virgin Sunrise    
            </label > 

            <label className="drinkdesk">
            Ananassaft, Orangensaft, Cranberrysaft
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
            fetch('http://192.168.137.212/virgin')
            .then(response => response.json())
            .then(data => console.log(data.total));
            fetch('http://192.168.137.212/')
            .then(response => response.json())
            .then(data => console.log(data.total));
        
        }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {glass} className="drinkpic"/>
            <label className="drinkname">
            Cola    
            </label > 

            <label className="drinkdesk">
            Cola
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
            fetch('http://192.168.137.212/cola')
            .then(response => response.json())
            .then(data => console.log(data.total));
            fetch('http://192.168.137.212/')
            .then(response => response.json())
            .then(data => console.log(data.total));
        
        }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {glass} className="drinkpic"/>
            <label className="drinkname">
            Safer sex on the Beach    
            </label > 

            <label className="drinkdesk">
            Pfirsichsaft, Ananassaft,Cranberrysaft
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
            fetch('http://192.168.137.212/safesex')
            .then(response => response.json())
            .then(data => console.log(data.total));
            fetch('http://192.168.137.212/')
            .then(response => response.json())
            .then(data => console.log(data.total));
        
        }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {glass} className="drinkpic"/>
            <label className="drinkname">
            Orangensaft  
            </label > 

            <label className="drinkdesk">
            Orangensaft
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
            fetch('http://192.168.137.212/orange')
            .then(response => response.json())
            .then(data => console.log(data.total));
            fetch('http://192.168.137.212/')
            .then(response => response.json())
            .then(data => console.log(data.total));
        
        }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {acapulcopic} className="drinkpic"/>
            <label className="drinkname">
            Acapulco    
            </label > 

            <label className="drinkdesk">
            Tequlia Silver, Weißer Rum, Ananassaft,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
            fetch('http://192.168.137.212/acapulco')
            .then(response => response.json())
            .then(data => console.log(data.total));
            fetch('http://192.168.137.212/')
            .then(response => response.json())
            .then(data => console.log(data.total));
        
        }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {ambassadorpic} className="drinkpic"/>
            <label className="drinkname">
            Ambassador    
            </label > 

            <label className="drinkdesk">
            Tequlia Silver, Orangensaft, Zuckersirup,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/ambassador')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {amfpic} className="drinkpic"/>
            <label className="drinkname">
            AMF    
            </label > 

            <label className="drinkdesk">
            Wodka, Weißer Rum, Tequlia Silver, Gin,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/amf')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {baybreezepic} className="drinkpic"/>
            <label className="drinkname">
            Bay Breeze    
            </label > 

            <label className="drinkdesk">
            Wodka, Cranberrysaft, Ananassaft, Lime,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/baybreeze')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {bluehawaiipic} className="drinkpic"/>
            <label className="drinkname">
            Blue Hawaii    
            </label > 

            <label className="drinkdesk">
            Weißer Rum, Wodka, Blue Curacao,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/bluehawaii')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {bluekamikazepic} className="drinkpic"/>
            <label className="drinkname">
            Blue Kamikaze    
            </label > 

            <label className="drinkdesk">
            Wodka, Blue Curacao, Limette, Eis,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/bluekamikaze')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {bluelagoonpic} className="drinkpic"/>
            <label className="drinkname">
            Blue Lagoon    
            </label > 

            <label className="drinkdesk">
            Wodka, Blue Curacao, Limonade, Zitrone,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/bluelagoon')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

    
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {blueoceanpic} className="drinkpic"/>
            <label className="drinkname">
            Blue Ocean    
            </label > 

            <label className="drinkdesk">
            Wodka, Blue Curacao, Zuckersirup,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/blueocean')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {caipirinhapic} className="drinkpic"/>
            <label className="drinkname">
            Caipirinha    
            </label > 

            <label className="drinkdesk">
           Cachaca, Limette, Zucker, Eis,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/caipirinha')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {caipiroskapic} className="drinkpic"/>
            <label className="drinkname">
            Caipiroska    
            </label > 

            <label className="drinkdesk">
           Wodka,Limette,Zucker,Eis...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/caipiroska')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {capecodpic} className="drinkpic"/>
            <label className="drinkname">
            Cape Cod    
            </label > 

            <label className="drinkdesk">
           Wodka,Cranberrysaft, Limette,Eis,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/capecod')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {cosmopolitanpic} className="drinkpic"/>
            <label className="drinkname">
            Cosmopolitan     
            </label > 

            <label className="drinkdesk">
            Wodka Citron, Cointreu, Limette,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/cosmopolitan')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {cubalibrepic} className="drinkpic"/>
            <label className="drinkname">
            Cuba Libre     
            </label > 

            <label className="drinkdesk">
            Weißer Rum, Cola, Limette, Eis,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/cubalibre')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {daiquiripic} className="drinkpic"/>
            <label className="drinkname">
            Daiquiri
            </label > 

            <label className="drinkdesk">
            Weißer Rum, Limette, Zuckersirup, Eis,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/daquiri')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {cultopic} className="drinkpic"/>
            <label className="drinkname">
            Culto A la Vida
            </label > 

            <label className="drinkdesk">
            Weißer Rum, Limette, Zuckersirup, Eis,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/culto')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {fuzzypic} className="drinkpic"/>
            <label className="drinkname">
            Fuzzy Navel
            </label > 

            <label className="drinkdesk">
            Pfirsichschnaps, Orangensaft,Orange,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/fuzzy')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {daiquiripic} className="drinkpic"/>
            <label className="drinkname">
            Gimlet
            </label > 

            <label className="drinkdesk">
            Gin, Limette, Zuckersirup, Limette, Eis,..
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/gimlet')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {greenmexpic} className="drinkpic"/>
            <label className="drinkname">
            Green Mexican
            </label > 

            <label className="drinkdesk">
            Tequlia Silver, Midori, Limette,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/greenmex')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {greyhoundpic} className="drinkpic"/>
            <label className="drinkname">
            Greyhound
            </label > 

            <label className="drinkdesk">
            Gin, Grapefruitsaft, Eis, Zitrone,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/greyhound')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {hairynavelpic} className="drinkpic"/>
            <label className="drinkname">
            Hairy Navel
            </label > 

            <label className="drinkdesk">
            Pfirsichschnaps, Wodka, Orangensaft,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/hairynavel')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {hornybullpic} className="drinkpic"/>
            <label className="drinkname">
            Horny Bull
            </label > 

            <label className="drinkdesk">
            Tequlia Silver, Orangensaft, Eis,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/hornybull')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {jappic} className="drinkpic"/>
            <label className="drinkname">
            Japanese Slipper
            </label > 

            <label className="drinkdesk">
            Midori, Cointreum, Zitrone, Honigmelone,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/jap')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        
        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {jollyrancherpic} className="drinkpic"/>
            <label className="drinkname">
            Jolly Rancher    
            </label > 

            <label className="drinkdesk">
            Wodka, Midori, Cranberrysaft, Eis,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/jolly')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {kamikazepic} className="drinkpic"/>
            <label className="drinkname">
            Kamikaze    
            </label > 

            <label className="drinkdesk">
            Wodka, Triple Sec, Limette, Eis,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/kamikaze')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>


        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {liquidmarpic} className="drinkpic"/>
            <label className="drinkname">
            Liquid Marijuana    
            </label > 

            <label className="drinkdesk">
            Dunkler Rum, Blue Curacao, Malibu,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/liquidmarijuana')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {longbeachpic} className="drinkpic"/>
            <label className="drinkname">
            Long Beach Iced Tea   
            </label > 

            <label className="drinkdesk">
            Wodka, Tequila Silver, Weißer Rum,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/longbeach')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {longislandpic} className="drinkpic"/>
            <label className="drinkname">
            Long Island Iced Tea   
            </label > 

            <label className="drinkdesk">
            Wodka, Tequila Silver, Weißer Rum, Gin,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/longisland')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {malibubaybreezepic} className="drinkpic"/>
            <label className="drinkname">
            Malibu Bay Breeze
            </label > 

            <label className="drinkdesk">
            Wodka, Tequila Silver, Weißer Rum, Gin,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/malibu')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {margaritapic} className="drinkpic"/>
            <label className="drinkname">
            Margarita
            </label > 

            <label className="drinkdesk">
            Tequila Silver, Cointreu, Limette, Salz,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/margarita')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {martinilemonpic} className="drinkpic"/>
            <label className="drinkname">
            Martini Lemon Drop
            </label > 

            <label className="drinkdesk">
            Wodka Citron, Triple Sec, Zitrone, Zucker,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/martini')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {mojitopic} className="drinkpic"/>
            <label className="drinkname">
            Mojito
            </label > 

            <label className="drinkdesk">
            Weißer Rum, Limette, Minze, Zucker,..
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/mojito')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {rocketfuelpic} className="drinkpic"/>
            <label className="drinkname">
            Rocket Fuel
            </label > 

            <label className="drinkdesk">
            Wodka, Triple Sec, Weißer Rum, Gin,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/rocketfuel')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {screwdriverpic} className="drinkpic"/>
            <label className="drinkname">
            Screwdriver
            </label > 

            <label className="drinkdesk">
            Wodka, Orangensaft, Orange, Eis,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/screwdriver')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>


        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {seabreezepic} className="drinkpic"/>
            <label className="drinkname">
            Sea Breeze 
            </label > 

            <label className="drinkdesk">
            Wodka, Cranberrysaft, Grapefruitsaft,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/seabreeze')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>


        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {salzipic} className="drinkpic"/>
            <label className="drinkname">
            -- Salzi Spezial --
            </label > 

            <label className="drinkdesk">
            Rum, Cola 
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/sexonthebeach')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {sexonthebeachpic} className="drinkpic"/>
            <label className="drinkname">
            Sex on the Beach
            </label > 

            <label className="drinkdesk">
            Wodka, Pfirsichschnaps, Orangensaft,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/sexonthebeach')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {tequilaslammerpic} className="drinkpic"/>
            <label className="drinkname">
            Tequila Slammer
            </label > 

            <label className="drinkdesk">
            Tequila Silver, 7 UP
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/tequillaslammer')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>

        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {woowoopic} className="drinkpic"/>
            <label className="drinkname">
            Woo Woo
            </label > 

            <label className="drinkdesk">
           Wodka, Pfirsichschnaps, Cranberrysaft,..
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/woowoo')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>


        <div className="space"> </div>


        
        <div className="drinky" >
            
            <img src= {melonballpic} className="drinkpic"/>
            <label className="drinkname">
            Melon Ball    
            </label > 

            <label className="drinkdesk">
            Wodka, Midori, Orangensaft, Eis,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/melonball')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>


        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {glass} className="drinkpic"/>
            <label className="drinkname">
            Clean    
            </label > 

            <label className="drinkdesk">
            only for cleaning
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/clean')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>


        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {glass} className="drinkpic"/>
            <label className="drinkname">
            Setup    
            </label > 

            <label className="drinkdesk">
            Setup
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/setupdrinky')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            >
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>


        <div className="space"> </div>
        <div className="drinky" >
            
            <img src= {midoriillusionpic} className="drinkpic"/>
            <label className="drinkname">
            Midori Illusion    
            </label > 

            <label className="drinkdesk">
            Midori, Wodka, Triple Sec, Zitrone,...
            </label>
        
            <IconButton 
            className="send"
            onClick={()=>{
                fetch('http://192.168.137.212/midorillusion')
                .then(response => response.json())
                .then(data => console.log(data.total));
                fetch('http://192.168.137.212/')
                .then(response => response.json())
                .then(data => console.log(data.total));
            
            }}
            > 
                <SendIcon style={{color:"gray"}}/>
            </IconButton>
        </div>
        
        <div className="longspace"></div>



        <Navbar/>

</div>     
       
        </div>
      
    )
}

export default Drinks;