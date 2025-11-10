
for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        console.log(i, "cointrap");
        console.log(i, "trap");
        console.log(i, "coin");
        
    } else if (i % 5 === 0) {
        console.log(i,"trap");

    } else if (i % 3 === 0) {
        console.log(i, "coin");
    }
}
console.log("trap = 4");
console.log("coin = 6");
console.log("cointrap = 1");
console.log("everyone = 11");



