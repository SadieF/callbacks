var words = ["ground", "control", "to", "major", "tom"];


function map(words, cb) {
var array = [];
  for (var i = 0; i < words.length; i++) {
  array.push(cb(words[i]));
  }
    console.log(array);
}




map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});