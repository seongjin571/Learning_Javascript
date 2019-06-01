let globalFunc;
{
    const blockVar = "a";
    globalFunc = function(){
        console.log(blockVar);
    }
}
globalFunc();

// {
//     const blockVar = "b";
//     const blockFunc = function(){
//         console.log(blockVar);
//     }
// }
// blockFunc();

let f;
{
    let o = {note : 'Safe'}
    f = function(){
        return o;
    }
}
let oRef = f();
console.log(oRef.note);
oRef.note = "Not so safe after all!";
console.log(oRef.note);

const f2 = (function(){
    let count = 0;
    return function(){
        return `I have been called ${++count} time(s)`;
    }
})();
f2();
f2();