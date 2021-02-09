import {useEffect, useState} from 'react';
import { useHowl, Play } from 'rehowl';
import sample from './sounds/md-sprite-16.webm';

let TestHowl = () => {
  const [digit, setDigit] = useState(0);
  const [digits, setDigits] = useState([]);
  const [loop, setLoop] = useState(false);
  const [fading, setFading] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  let counter = 0;
  const { howl, state } = useHowl({
    src: [sample],
      sprite: {
        1: [
           0,
          2711.8367346938776
        ],
        2: [
          4000,
          1209.9092970521542
        ],
            3: [
              7000,
              2003.90022675737
            ],
            4: [
              11000,
              5777.301587301587
            ],
            5: [
              18000,
              4366.439909297053
            ],
            6: [
              24000,
              2828.752834467121
            ],
            7: [
              28000,
              3621.519274376418
            ],
            8: [
              33000,
              1391.7233560090735
            ],
            9: [
              36000,
              1084.6712018140606
            ],
            10: [
              39000,
              1084.6938775510182
            ],
            11: [
              42000,
              780.1587301587318
            ],
            12: [
              44000,
              884.7392290249445
            ],
            13: [
              46000,
              1507.3469387755126
            ],
            14: [
              49000,
              841.9047619047647
            ],
            15: [
              51000,
              884.9886621315193
            ],
            16: [
              53000,
              3927.165532879819
            ]
          },
        })
        return (
          <>
           <div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(dig => (
                <button
                    key={counter++}
                    onMouseEnter={() => {
                      if (mouseDown) {
                        let lastDigit = digits[digits.length - 1];
                        lastDigit ?
                        setDigits([lastDigit, dig]) :
                        setDigits([dig])
                      }
                    }}
                    onMouseDown={() => {
                        setDigits([dig]);
                        setLoop(true);
                        setMouseDown(true);
                    }}
                    onMouseUp={(() => {
                    setLoop(false);
                    setMouseDown(false);
                    setFading(true);
                    setDigits([]);
                    })}
                >
                {dig}
                </button>
                ))}
            </div>
            <div className='howl'>
              {digits.map((dig) => (
                mouseDown ?
                // {/* && dig === digit ? */}
                <Play
                  howl={howl}
                  sprite={`${dig}`}
                  key={counter++}
                  pause={!mouseDown}
                  loop={loop}
                  fade={mouseDown ? [0, 1, 1000] :[1, 0, 1000]}
                  // onFade={() => setFading(false)}
                >
                </Play> 
                :
                <> </>
              ))}
            </div>
          </>
        )
}


export default TestHowl;