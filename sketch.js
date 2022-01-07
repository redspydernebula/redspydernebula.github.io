let a;
function setup() {
  //createCanvas(400, 400);
  createCanvas(1,1);
  a = 0;
}

function draw() {
  background(0,0,0,0);
  for(let i = 0; i < 24; i++){
    let a = sin(3.2*((abs(i*25 - frameCount)%255)/255));
    document.getElementById("t" + i).style.color="rgba(" + 250*a + ",250,150," + a + ")";
  }
}


