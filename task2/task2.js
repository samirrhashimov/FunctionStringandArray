function filter(...numbers) {
  for (let num of numbers) {
    if (num % 2 == 0) {
        console.log("Cut: " + num);
    }
    else {
        console.log("Tek: " + num);
    }
  }
}

console.log(filter(14, 20, 35, 40, 57, 60, 100));