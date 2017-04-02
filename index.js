function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const array = [1, 3, 5, 7, 9]
  array.forEach(callback)
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
