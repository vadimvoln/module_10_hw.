let x = 2;

switch(x) {
    case Number(x):
        alert(`X — number`);
        break;
    case Boolean(x):
        alert(`X — boolean type`);
        break;
    case String(x):
        alert(`X — string`);
        break;
    default:
        alert(`Type x is undefined`);
}

console.log('X = ' + x + ', type = ' + typeof x);