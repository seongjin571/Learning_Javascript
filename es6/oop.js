const SYM = Symbol();
const o = {a: 1, b: 2, c: 3, [SYM]: 4};
for(let prop in o){
    console.log(`${prop} : ${o[prop]}`);
    console.log(prop);
    if(o.a == o.prop){
        console.log("a");
    }
}
console.log(o.a);
// console.log(o[a]);
const array = [10,9,8,7];
for(let i in array){
    console.log(i);
}
array.forEach(e => console.log(e));
Object.keys(o).forEach(p => console.log(`${p} : ${o[p]}`));

const o2 = { x2: 1, x3: 2, f2: 4, xle: 5};
Object.keys(o2).filter(e => e.match(/^x/)).forEach(v => {
    console.log(`${v} : ${o2[v]}`);
});
 