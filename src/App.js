import './App.css';
import SoundGrid from './SoundGrid';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import mesh from './mesh';
import {useEffect, useState} from 'react';
import logo from './noware_website_logo.gif';

function App() {
  const [effect, setEffect] = useState(null);

  const changeEffect = (e) => {setEffect(e.target.id)}

  return (
    <div className="App">
      <header>
      <h1 unselectable="on">Enable your microphone and Click Around! the audio is used reactively with the graphics ^__^ </h1>
      <h3 unselectable="on"> If you see nothing after clicking on circles or mesh, try refreshing. Sometimes the audio bins don't load properly </h3>
      <button id='mesh' onClick={changeEffect} unselectable="on">mesh</button> 
      <button id='circles' onClick={changeEffect} unselectable="on">circles</button>
      </header>
      <div className='background-div'>
        {effect === 'mesh'  ? 
        <P5Wrapper 
        sketch={mesh} 
        /> : <></> }
        { effect === 'circles'  ? 
        <P5Wrapper 
        sketch={sketch} 
        /> :  <></>
      }
      </div>
        <div className='sound-grid'>
        <SoundGrid />
        </div>
    </div>
  );
}

export default App;