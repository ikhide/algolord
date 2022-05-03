function solution(N, K) {
  //separate N
  N = N.toString().split("");
  //increase N(0) till it gets to 9

  while (N[0] < 9 && K > 0) {
    N[0]++;
    K--;
  }

  //increase N(1) till it gets to 9

  while (N[1] < 9 && K > 0) {
    N[1]++;
    K--;
  }

  //increase N(0) till it gets to 9

  while (N[2] < 9 && K > 0) {
    N[2]++;
    K--;
  }

  return parseInt(N.join(""));
}

// console.log(solution(512, 10));

users = [
  { id: "123", name: "sunday", skills: ["dancing", "sleeping", "dying"] },
  { id: "124", name: "monday", skills: ["dancing", "shitting", "dying"] },
];

function findUser(reqSkills) {
  const skillObj = {};
  reqSkills = reqSkills.split(",");
  users.map((user) => {
    skillObj[user.id] = 0;
    for (let i = 0; i < reqSkills.length; i++) {
      if (user.skills.includes(reqSkills[i])) {
        skillObj[user.id]++;
      }
    }
  });

  return Object.keys(skillObj).reduce((a, b) =>
    skillObj[a] > skillObj[b] ? a : b
  );
}

console.log(findUser("dancing,sleeping"));
