let a = prompt("Enter the number");
a = +a;
alert(typeof a);

if (a % 2 === 0) {
    alert("even");
} else if (a % 1 === 0) {
    alert("odd");
} else {
    alert("Oops, looks like you made a mistake.");
}

