import p5 from 'p5';

export default function mesh(p){
    let cols, rows;
    let scl = 20;
    let w = 2000;
    let h = 2000;
    let flying = 0;
    let terrain =[];


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
         

    p.draw = () => {
        flying -= 0.1;
        let xoff = flying;
        for (let x = 0; x < cols; x++) {
            let yoff = 0;
              for (let y = 0; y < rows; y++) {
                      terrain[y][x] = p.map(p.noise(xoff, yoff), 0, 1, -150, 150);
                      yoff += 0.15;
                  }
                  xoff += 0.15;
                }

        p.background(0);
        p.stroke(255);
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


    };

}
