let a;
function setup() {
  //createCanvas(400, 400);
  noCanvas();
  a = 0;
}

function draw() {
  background(220);
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

//function getGoldfishResponse
