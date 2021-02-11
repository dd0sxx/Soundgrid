import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

export default function sketch(p){
    let canvas;
    let pg;
    let bands = 1024;
    let amp, fft;
    var mic;


    p.setup = () => {
      canvas = p.createCanvas(2000, 2000);
      pg = p.createGraphics(2000,2000)
    amp = new p5.Amplitude(1);
    fft = new p5.FFT(0.75, bands);
    mic = new p5.AudioIn();
    mic.start();
    fft.setInput(mic);
    }

    p.draw = () => {
      let amplitude = amp.getLevel();
      fft.analyze();

      let beatLevels = []
            beatLevels.push(p.map(fft.getEnergy(16,60), 0, 255, 0, 1.0))
            beatLevels.push(p.map(fft.getEnergy(60,250), 0, 255, 0, 1.0))
            beatLevels.push(p.map(fft.getEnergy(250,500), 0, 255, 0, 1.0))
            beatLevels.push(p.map(fft.getEnergy(500,2000), 0, 255, 0, 1.0))
            beatLevels.push(p.map(fft.getEnergy(2000,4000), 0, 255, 0, 1.0))
            beatLevels.push(p.map(fft.getEnergy(4000,6000), 0, 255, 0, 1.0))
            beatLevels.push(p.map(fft.getEnergy(6000,20000), 0, 255, 0, 1.0))

            if (mic.enabled) {

              
              if (p.mouseIsPressed) {
                p.noFill();
                p.stroke(beatLevels[1] * p.random() * 255, beatLevels[3] * p.random() * 255, beatLevels[5] * p.random() * 255);
                p.ellipse(p.mouseX, p.mouseY, beatLevels[0] * beatLevels[1] * beatLevels[3] * 200, beatLevels[0] * beatLevels[1] * beatLevels[3] * 200);
              } else {
                p.fill(0, 12);
                p.rect(0, 0, p.width, p.height);
                p.fill(beatLevels[3] * p.random() * 255, beatLevels[4] * p.random() * 255, beatLevels[5] * p.random() * 255);
                p.noStroke();
                p.ellipse(p.mouseX, p.mouseY, beatLevels[0] * beatLevels[2] * 60, beatLevels[1] * beatLevels[2] * 60);
              }

            } else {
              if (p.mouseIsPressed) {
                p.noFill();
                p.stroke(p.random() * 255, p.random() * 255, p.random() * 255);
                p.ellipse(p.mouseX, p.mouseY, 60, 60);
              } else {
                p.fill(0, 12);
                p.rect(0, 0, p.width, p.height);
                p.fill('purple');
                p.noStroke();
                p.ellipse(p.mouseX, p.mouseY, 60, 60);
              }
            }
        p.image(pg, 150, 75);
      }
    }
