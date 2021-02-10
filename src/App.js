import './App.css';
import SoundGrid from './SoundGrid';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import mesh from './mesh';
import {useEffect, useState} from 'react';

function App() {
  const [effect, setEffect] = useState(0);

  const changeEffect = () => {effect === 0 ? setEffect(1) : setEffect(0);}

  return (
    <div className="App">
      <h1>Click Around!</h1>
      <button onClick={changeEffect}>Change Effects</button>
      {/* <header className="App-header"> */}
      <div className='background-div'>
        {/* <BgGraphics /> */}
        <>
        <div className='bg-image'></div>
        {effect === 0  ? 
        <P5Wrapper 
        // sketch={sketch} 
        sketch={mesh} 
        /> :
        <P5Wrapper 
        sketch={sketch} 
        />
      }
        </>
      </div>
        <div className='sound-grid'>
        <SoundGrid />
        </div>
      {/* </header> */}
    </div>
  );
}

export default App;