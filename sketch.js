let a;
function setup() {
  //createCanvas(400, 400);
  createCanvas(1,1);
  a = 0;
}

function draw() {
  background(0,0,0,0);
  for(let i = 0; i < 22; i++){
    let a = sin(3.2*(((i*25 + frameCount)%255)/255));
    document.getElementById("t" + i).style.color="rgba(" + 250*a + ",250,150," + a + ")";
  }
}

function myFunction() {
  if (a < 10) {
    print("Yessss....");
  } else if (a < 50) {
    print("I crave clicks");
  } else if (a < 100) {
    if (a % 2 == 0) print("You have done well fledgling clicker");
    else print("I am not yet satiated");
  } else if (a < 200) {
    print("Your hand may hurt but I must feed");
  }

  a++;
}


