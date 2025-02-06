export const DEFAULT_PANDORAS = {
  desire: `A dog surfing`,
  result: `p5.background(135, 206, 235); // Light blue sky
        p5.push();
        p5.translate(0, 100, -200);
        p5.fill(0, 100, 255);
        p5.noStroke();
        p5.beginShape();
        for (let i = -300; i <= 300; i += 10) {
          let y = 20 * p5.sin(i * 0.05 + p5.frameCount * 0.1);
          p5.vertex(i, y, 0);
        }
        p5.vertex(300, 100, 0);
        p5.vertex(-300, 100, 0);
        p5.endShape(p5.CLOSE);
        p5.pop();

        // Surfboard
        p5.push();
        p5.translate(0, 50, -100);
        p5.rotateX(p5.PI / 2);
        p5.fill(255, 0, 0);
        p5.ellipse(0, 0, 100, 30);
        p5.pop();

        // Dog body
        p5.push();
        p5.translate(0, 30, -100);
        p5.fill(160, 82, 45);
        p5.box(40, 20, 20);

        // Head
        p5.push();
        p5.translate(25, -10, 0);
        p5.box(20, 20, 20);
        p5.pop();

        // Legs
        for (let i = -15; i <= 15; i += 30) {
          for (let j = -5; j <= 5; j += 10) {
            p5.push();
            p5.translate(i, 10, j);
            p5.box(10, 20, 10);
            p5.pop();
          }
        }

        // Tail
        p5.push();
        p5.translate(-25, -5, 0);
        p5.rotateZ(-p5.PI / 6);
        p5.box(5, 20, 5);
        p5.pop();

        p5.pop();`,
};
