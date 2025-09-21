const array = [14, 20, 35, 40, 57, 60, 100];
let i = 0;

for (const num of array) {
    if (num % 4 == 0 && num % 5 == 0) {
        i += num;
    }
    
}
console.log(i);