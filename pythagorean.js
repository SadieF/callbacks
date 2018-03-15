var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(obj => {
  var numArr = [];
  numArr[obj.x] = obj.x * obj.x;
  numArr[obj.y] = obj.y * obj.y;
  numArr = Math.sqrt(numArr[obj.x] + numArr[obj.y]);
  return numArr;
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
