import React from 'react';
import ReactDom from 'react-dom';
import { Canvas } from 'p5-react-renderer';
import {useDraw} from 'p5-react-renderer';


function BgGraphics () {
    return (
        <Canvas size={[2000, 2000]} background={0}>
          <stroke args={255} strokeWeight={2}>
            <circle args={[300, 300, 20]} />
            <rect args={[700, 400, 100, 100]} noFill />
          </stroke>
          <noStroke>
            <rect args={[700, 400, 100, 100]} fill="red" />
          </noStroke>
        </Canvas>
      );
    }

export default BgGraphics