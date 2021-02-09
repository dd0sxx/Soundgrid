import {useEffect, useState} from 'react';
import { useHowl, Play } from 'rehowl';
import sample from './sounds/sprite124.webm';
import sprite128 from './sprite128';
import oneTwoEight from './128';

let TestHowl = () => {
  const [digit, setDigit] = useState(0);
  const [digits, setDigits] = useState([]);
  const [loop, setLoop] = useState(false);
  const [fading, setFading] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  let counter = 0;
  const { howl, state } = useHowl({
    src: [sample],
      sprite: sprite128,
        })
        return (
          <div>
           <div className='howl-div'>
                {oneTwoEight.map(dig => (
                <div className='howl-button'
                    key={counter++}
                    onMouseEnter={() => {
                      if (mouseDown) {
                        setDigit(dig);
                        let lastDigits = [...digits];
                        if (lastDigits.length > 3) {
                          lastDigits = lastDigits.slice(-3);
                        }
                        lastDigits ?
                        setDigits([...lastDigits, dig]) :
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
                    setTimeout(() => {
                      if (!mouseDown) {
                        setDigits([]);
                      }
                    },2000)
                    })}
                >
                </div>
                ))}
            </div>
            <div className='howl'>
              {digits.map((dig) => (
                // mouseDown ?
                // {/* && dig === digit ? */}
                <Play
                  howl={howl}
                  sprite={`${dig}`}
                  key={counter++}
                  pause={!mouseDown}
                  loop={loop}
                  fade={mouseDown ? [0, 1, 250] :[1, 0, 2000]}
                  // onFade={() => setFading(false)}
                >
                </Play> 
                // :
                // <> </>
              ))}
            </div>
          </div>
        )
}


export default TestHowl;

// chop-1.wav chop-11.wav chop-120.wav chop-2.wav chop-30.wav chop-41.wav chop-52.wav chop-63.wav chop-74.wav chop-85.wav chop-96.wav chop-10.wav chop-110.wav chop-121.wav chop-20.wav chop-31.wav chop-42.wav chop-53.wav chop-64.wav chop-75.wav chop-86.wav chop-97.wav chop-100.wav chop-111.wav chop-122.wav chop-21.wav chop-32.wav chop-43.wav chop-54.wav chop-65.wav chop-76.wav chop-87.wav chop-98.wav chop-101.wav chop-112.wav chop-123.wav chop-22.wav chop-33.wav chop-44.wav chop-55.wav chop-66.wav chop-77.wav chop-88.wav chop-99.wav chop-102.wav chop-113.wav chop-124.wav chop-23.wav chop-34.wav chop-45.wav chop-56.wav chop-67.wav chop-78.wav chop-89.wav chop-103.wav chop-114.wav chop-13.wav chop-24.wav chop-35.wav chop-46.wav chop-57.wav chop-68.wav chop-79.wav chop-9.wav chop-104.wav chop-115.wav chop-14.wav chop-25.wav chop-36.wav chop-47.wav chop-58.wav chop-69.wav chop-8.wav chop-90.wav chop-105.wav chop-116.wav chop-15.wav chop-26.wav chop-37.wav chop-48.wav chop-59.wav chop-7.wav chop-80.wav chop-91.wav chop-106.wav chop-117.wav chop-16.wav chop-27.wav chop-38.wav chop-49.wav chop-6.wav chop-70.wav chop-81.wav chop-92.wav chop-107.wav chop-118.wav chop-17.wav chop-28.wav chop-39.wav chop-5.wav chop-60.wav chop-71.wav chop-82.wav chop-93.wav chop-108.wav chop-119.wav chop-18.wav chop-29.wav chop-4.wav chop-50.wav chop-61.wav chop-72.wav chop-83.wav chop-94.wav chop-109.wav chop-12.wav chop-19.wav chop-3.wav chop-40.wav chop-51.wav chop-62.wav chop-73.wav chop-84.wav chop-95.wav