let auto = new Map();
auto.set('lamborghini', 'Italy');
auto.set('porsche', 'Germany');
auto.set('tesla', 'United States of America');

for (let name of auto.keys()){
    console.log(name,'-x')
}
for (let name of auto.values()){
    console.log(name,'-y')
}