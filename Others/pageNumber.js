// function numberOfElements(digit) {
//   count = 0;
//   for (let i = 1; i <= digit; i++) {
//     count += i.toString().length;
//   }
//   return count;
// }

function numberOfElements(target) {
  numberOfDigits = target.toString().length;
  exemptedDigits = Math.pow(10, numberOfDigits - 1) - 1;
  console.log(exemptedDigits);
  const remainder = target - exemptedDigits;
  return remainder * numberOfDigits + 2700 + 180 + 9;
}

console.log(numberOfElements(9999));
// totalDigits(12);
