// "use strict";
let globalFunc;
{
    const blockVar = "a";
    globalFunc = function(){
        console.log(blockVar);
    }
}
globalFunc();

{
    const blockVar = "b";
    const blockFunc = function(){
        console.log(blockVar);
    }
}
blockFunc();