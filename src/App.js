import './App.css';
import TestHowl from './howltest';
// import BgGraphics from './bgGraphics';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

function App() {

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <div className='background-div'>
        {/* <BgGraphics /> */}
        <>
        <div className='bg-image'></div>
        <P5Wrapper sketch={sketch} 
        // particle={particle} 
        />
        </>
      </div>
        <div className='sound-grid'>
        <TestHowl />
        </div>
      {/* </header> */}
    </div>
  );
}

export default App;