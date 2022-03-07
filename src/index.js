import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drinks from "./pages/drinks/drinks.js";
import HomeTab from "./pages/home/home.js";
import Music from "./pages/music/music.js";
import Switch from "./pages/switch/switch.js";
import Settings from "./pages/settings.js";
import Layout from "./layout.js";


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element = {<HomeTab/>}/>
          <Route path ="drinks" element = {<Drinks/>}/>
          <Route path = "queue" element = {<Music/>}/>
          <Route path = "switch" element = {<Switch/>}/>
          <Route path = "settings" element = {<Settings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

