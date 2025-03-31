const nemo = ["nemo"];
const large = new Array(10000000).fill("nemo");

const findNemo = (array) => {
  let t0 = process.hrtime();
  console.log(t0);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") console.log("found Nemo");
  }

  let t1 = process.hrtime(t0);
  console.log("Loop took " + t1[1] / 1000000000 + "s");
};

findNemo(large);
// node bigo_nemo
