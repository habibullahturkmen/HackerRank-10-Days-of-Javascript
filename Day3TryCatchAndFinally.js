function reverseString(s) {
    try {
        return s.split("").reverse().join("");
    } catch (e) {
        return "s.split is not a function\n" + s;
    }

}

console.log(reverseString("1234"));
console.log(reverseString(Number(1234)));
