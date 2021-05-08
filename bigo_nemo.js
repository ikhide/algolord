const nemo = ["nemo"];
const large = new Array(1000).fill("nemo");

const findNemo = (array) => {
  let t0 = process.hrtime();
  console.log(t0);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") console.log("found Nemo");
  }

  let t1 = process.hrtime(t0);
  console.log("Loop took " + t1 + "ns");
};

findNemo(large);
// node bigo_nemo
