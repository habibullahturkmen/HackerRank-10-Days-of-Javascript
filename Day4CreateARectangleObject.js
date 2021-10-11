function Rectangle(a, b) {
    let rectangle = {
        length: a,
        width: b,
        perimeter: a * 2 + b * 2,
        area: a * b
    }
    return rectangle;
}

console.log(Rectangle(2, 4));