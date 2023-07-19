/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(" ");
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position
let thorY = initialTy;
let thorX = initialTx;

// game loop
while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

  if (lightX > thorX && lightY > thorY) {
    console.log("SE");
    thorX++;
    thorY++;
  } else if (lightX < thorX && lightY > thorY) {
    console.log("SW");
    thorX--;
    thorY++;
  } else if (lightX > thorX) {
    console.log("E");
    thorX++;
  } else if (lightX < thorX) {
    console.log("W");
    thorX--;
    console.error(thorX);
  } else if (lightY < thorY) {
    console.log("N");
    thorY--;
  } else if (lightY > thorY) {
    console.log("S");
    thorY++;
  }
}
