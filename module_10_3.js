let string = prompt("Enter a word");
function reverse(string) {
    return string.split("").reverse().join("");
}
console.log(reverse(string));