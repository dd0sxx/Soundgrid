// import p5 from 'p5';

export default function sketch(p){
    let canvas;
    let pg;
    // let inc = 0.1;
    // let scl = 100;
    // let cols, rows;

    // let zoff = 0;

    // let fr;

    // let particles = [];

    p.setup = () => {
      canvas = p.createCanvas(2000, 2000);
      pg = p.createGraphics(2000,2000)
    //   cols = p.floor(p.width / scl);
    //   rows = p.floor(p.height / scl);
    }

    p.draw = () => {

       
        if (p.mouseIsPressed) {
            p.noFill();
            p.stroke('purple');
            p.ellipse(p.mouseX, p.mouseY, 60, 60);
        } else {
            p.fill(0, 12);
            p.rect(0, 0, p.width, p.height);
            p.fill('purple');
            p.noStroke();
            p.ellipse(p.mouseX, p.mouseY, 60, 60);
        }
      
        //Draw the offscreen buffer to the screen with image()
        p.image(pg, 150, 75);
      }


    //   p.background(200);
    //   let yoff = 0;
    //   for (let y = 0; y < rows; y++) {
    //     let xoff = 0
    //     for (let x = 0; x < cols; x++) {
    //         let index = (x + y * p.width) * 4;
    //         let angle = p.noise(xoff, yoff, zoff) * (p.TWO_PI);
    //         let v = p5.Vector.fromAngle(angle);
    //         xoff += inc;
    //         p.stroke(0);
    //         p.push();
    //         p.translate(x * scl, y * scl);
    //         p.rotate(v.heading());
    //         p.line(0, 0, scl, 0);

    //         p.pop();
    //     }
    //     yoff += inc;
    //     zoff += 0.001;
    //   }
    //   var x = p.map(p.noise(xoff1), 0, 1, 0, 1000);
    //   var y = p.map(p.noise(xoff2), 0, 1, 0, 1000);
    //   p.ellipse(x, y, 100, 100);
    //   xoff1 += 0.01
    //   xoff2 += 0.01
    }

    // p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //   if(canvas) //Make sure the canvas has been created
    //     p.fill(newProps.color);
    // }


// function Particle (p) {
//     this.position = p5.createVector(0,0);
//     this.vel = p5.createVector(0,0);
//     this.acc = p5.createVector(0,0);

//     this.update = function () {
//         this.vel.p.add(this.acc);
//         this.pos.p.add(this.vel);
//         this.acc.p.mult(0)
//     }

//     this.applyForce = function (force) {
//         this.acc.p.add(force);
//     }

//     this.show = function () {

//         p.stroke(0);
//         p.point(this.pos.x, this.pos.y);
//     }
// }