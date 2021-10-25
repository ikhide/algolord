function sherlockAndAnagrams(s) {
  const substring = createSubstrings(s);
  const newString = [...substring];
  let count = 0;

  while (newString.length > 0) {
    let currentString = newString.shift();
    let reverseString = currentString.split("").reverse().join("");

    console.log("currentString", currentString);
    if (newString.includes(reverseString)) {
      //   newString.splice(newString.indexOf(reverseString), 1);
      console.log(newString, "sub", substring);
      count++;
    }
  }

  return count++;
}

function createSubstrings(str) {
  let i,
    j,
    result = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

console.log(sherlockAndAnagrams("kkkk"));

// a,b,b,a,ab,bb,ba,abb,bba

//[a,a],[b,b],[ab,ba][abb,bba]

//kkkk
//k,kk,,kkk
//[k,k],[k,k],[k,k],[k,k],[k,k],[k,k],[kk,kk],[kk,kk],[k,kk],[kkk,kkk],[],[],[],[],[],[],[]
