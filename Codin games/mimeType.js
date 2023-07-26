const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

const typeMap = new Map();

for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");

  const EXT = inputs[0].toLowerCase(); // file extension
  const MT = inputs[1]; // MIME type

  typeMap.set(EXT, MT); //Set the types in Map
}

for (let i = 0; i < Q; i++) {
  const FNAME = readline().split("."); // One file name per line.
  if (FNAME.length < 2) {
    // Check if there is an extension
    console.log("UNKNOWN");
    continue;
  }
  const testExt = FNAME.pop().toLowerCase(); // Get the extension (might use a better variable)
  console.error(testExt);
  const result = typeMap.get(testExt);
  if (result === undefined) {
    console.log("UNKNOWN");
  } else {
    console.log(result);
  }
}
