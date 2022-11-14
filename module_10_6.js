let array = [1, 2, 3, 4, 5];

let equality = true;
for(let i = 0; i < array.length - 1; i++){
    for (let a = i + 1; a < array.length; a++){
        if (typeof array[i] !== typeof array[a]){
            equality = false;
        }
    }
}

if (equality) {
    console.log("array are the same");
} else {
    console.log("elements are not the same");
}