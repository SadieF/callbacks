function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
     var id = -1;

  return function() {
      id += 1;
      if (list[id] < list.length -1) {
        return list[id];
      } else {
        return "No more dice";
      }

  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
