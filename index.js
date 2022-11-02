const arr = [
  { name: `Cass`, age: 15, mood: `happy`, favNumbers: [1, 2, 3, 4] },
  { name: `Abby`, age: 14, mood: `happy`, favNumbers: [2, 3, 4, 5] },
  { name: `Oracle`, age: 15, mood: `sad`, favNumbers: [3, 4, 5, 6] },
  { name: `LaPointe`, age: 17, mood: `happy`, favNumbers: [4, 5, 6, 7] },
];

//Part 1 & 2

arr.forEach((person) => {
  console.log(person.name);
  person.favNumbers.forEach((number) => {
    console.log(number);
  });
});

//Part 3

arr
  .filter((people) => people.mood === `happy`)
  .forEach((person) => {
    console.log(person.name);
  });
