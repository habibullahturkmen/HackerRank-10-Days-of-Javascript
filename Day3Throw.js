function isPositive(a) {
    if (a < 0) {
        throw new Error("Negative Error");
    } else if (a === 0) {
        throw new Error("Zero Error");
    } else {
        return "YES";
    }
}

console.log(isPositive(1));
console.log(isPositive(12));
console.log(isPositive(-3));
