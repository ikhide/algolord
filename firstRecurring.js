//Google Question
let array = [2, 1, 5, 1, 3, 5, 1, 2, 4];
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  //creates an object key with each array item
  //increase the value of the key on array loop
  //when any key returns value of 2, return that key

  map = {};
  for (let i = 0; i < input.length; i++) {
    if (!map[input[i]]) {
      map[input[i]] = true;
    } else if (map[input[i]]) {
      return input[i];
    }
  }
  return "undefined";
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

console.log(firstRecurringCharacter(array));
