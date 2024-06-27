function makeLine(size) {
 let line = "";
 for (let i = 0; i < size; i++) {
    line += '#'
 }
 return line
}
console.log(makeLine(5));
console.log("+++++++++++++")

function makeSquare(size) {
    let square = "";
    for (let i = 0; i < size; i++) {
        square += (makeLine(size) + '\n')
    }
    return square
}
console.log(makeSquare(5))
console.log("+++++++++++++")

function makeRectangle(width, height) {
    let rectangle = "";
    for ( let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n')
    }
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3))
console.log("+++++++++++++")

function makeDownwardStairs(height) {
    let downwardStairs = "";
    for (let i = 0; i < height; i++) {
        downwardStairs += (makeLine(i+1) + '\n')
    }
    return downwardStairs.slice(0, -1)
}
console.log(makeDownwardStairs(5))
console.log("+++++++++++++")


function makeSpaceLine(numSpaces, numChars) {
    let spaces = "";
    let chars = "";
    for (let i = 0; i < numSpaces; i++) {
        spaces += " "
    }
    for (let i = 0; i < numChars; i++) {
        chars += "#"
    }
    return spaces + chars + spaces
}
console.log(makeSpaceLine(3, 5));
console.log("+++++++++++++")

function makeIsoscelesTriangle(height) {
    let triangle = "";
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) +'\n')
    }
    return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5))
console.log("+++++++++++++")


function makeDiamond(height) {
    let diamond = "";
    for (let i = 0; i < height; i++) {
        diamond += (makeSpaceLine(height - i - 1, 2 * i + 1) +'\n')
    }
    for (let i = height - 1; i >= 0; i--)
        diamond += (makeSpaceLine(height - i - 1, 2 * i + 1) +'\n')
    return diamond
}
console.log(makeDiamond(5));