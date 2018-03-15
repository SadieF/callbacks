// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function (ele, i) {
    if (ele === "Waldo") {
      found(ele, i); // execute callback
    }
  });

    }

function actionWhenFound(ele, i) {

  console.log("Found " + ele + " at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
