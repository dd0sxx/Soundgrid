import p5 from 'p5';

export default function mesh(p){
    let cols, rows;
    let scl = 20;
    let w = 2000;
    let h = 2000;
    let flying = 0;
    let terrain =[];

    let bands = 1024;
    let amp, fft;
    var mic;


    p.setup = () => {
      p.createCanvas(2000, 2000, p.WEBGL)
      cols = w / scl
      rows = h / scl
      for (let x = 0; x < cols; x++) {
          terrain.push([]);
        for (let y = 0; y < rows; y++) {
                terrain[x].push(0);
            }
          }

          amp = new p5.Amplitude(1);
          fft = new p5.FFT(0.75, bands);
          mic = new p5.AudioIn();
          mic.start();
          fft.setInput(mic);
         

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





        flying -= 0.1;
        let xoff = flying;
         
        for (let x = 0; x < cols; x++) {
            let yoff = 0;
              for (let y = 0; y < rows; y++) {
                if (p.mouseIsPressed) {
                  terrain[y][x] = p.map(p.noise(xoff, yoff), 0, 1,  -(beatLevels[0] + beatLevels[1] + beatLevels[2] * 300) - 100, (beatLevels[3] + beatLevels[4] + beatLevels[5] * 300) + 100);
                } else {
                      terrain[y][x] = p.map(p.noise(xoff, yoff), 0, 1, -100, 100);
                    }
                      yoff += 0.15;
                  }
                  xoff += 0.15;
                }

        p.background(0);
        if (p.mouseIsPressed) {
        p.stroke(beatLevels[1] * 200 + beatLevels[2] * 200, beatLevels[3] * 200 + beatLevels[4] * 200, beatLevels[5] * 200 + beatLevels[6] * 200)
      } else {
        p.stroke(255);
      }
        p.noFill();
        p.translate(w / 6, h / 2);
        p.translate(-w / 2 + 50, -h / 1.25 - 50);
        p.translate(-w / 4, 0);
        p.rotateX(p.PI/4);
        for (let x = 0; x < cols; x++) {
            p.beginShape(p.TRIANGLE_STRIP);
            for (let y = 0; y < rows; y++) {
                p.vertex(y * scl, x * scl, terrain[y][x]);
                p.vertex( y * scl, (x + 1) * scl, terrain[y][x + 1]);
            }
            p.endShape();
        }
      } else {
        flying -= 0.1;
        let xoff = flying;
         
        for (let x = 0; x < cols; x++) {
            let yoff = 0;
              for (let y = 0; y < rows; y++) {
                if (p.mouseIsPressed) {
                  terrain[y][x] = p.map(p.noise(xoff, yoff), 0, 1, -300, 300);
                } else {
                      terrain[y][x] = p.map(p.noise(xoff, yoff), 0, 1, -100, 100);
                    }
                      yoff += 0.15;
                  }
                  xoff += 0.15;
                }

        p.background(0);
        if (p.mouseIsPressed) {
        p.stroke(p.map(p.noise(flying * 4, flying * 4), 0, 1, -50, 255), p.map(p.noise(flying,  4, flying * 4), 0, 1, -50, 255), p.map(p.noise(flying + 4, flying + 40), 0, 1, -50, 255))
      } else {
        p.stroke(255);
      }
        p.noFill();
        p.translate(w / 6, h / 2);
        p.translate(-w / 2 + 50, -h / 1.25 - 50);
        p.translate(-w / 4, 0);
        p.rotateX(p.PI/4);
        for (let x = 0; x < cols; x++) {
            p.beginShape(p.TRIANGLE_STRIP);
            for (let y = 0; y < rows; y++) {
                p.vertex(y * scl, x * scl, terrain[y][x]);
                p.vertex( y * scl, (x + 1) * scl, terrain[y][x + 1]);
            }
            p.endShape();
        }
      }
      }


    };

}

