const n = parseInt(readline());
let inputs = readline().split(" ");

let maximalLoss = 0;
let currHighest = inputs[0];
let currLowest = 0;

for (let i = 1; i < n; i++) {
  const curr = parseInt(inputs[i]);
  if (currHighest > curr && maximalLoss < currHighest - curr) {
    maximalLoss = currHighest - curr;
  } else if (currHighest < curr) {
    currHighest = curr;
  }
}

if (maximalLoss === 0) {
  console.log(maximalLoss);
} else {
  console.log(Math.abs(maximalLoss) * -1);
}
