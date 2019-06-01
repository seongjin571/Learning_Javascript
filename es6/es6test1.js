const testFunc = name => name;
console.log(testFunc("한성진"));

const o = {
    name : 'Sungjin',
    getBackWards : function(){
        const self = this;
        function getReversName(){
            let nameBackwards ='';
            for(let i = self.name.length-1; i>=0; i--)
                nameBackwards += self.name[i];
            return nameBackwards;
        }
    return `${getReversName()} si ym ,olleH`;
    },
}
console.log(o.getBackWards());


const o2 = {
    name : 'Sungjin',
    getBackWards : function(){
        const getReversName = () =>{
            let nameBackwards ='';
            for(let i = this.name.length-1; i>=0; i--)
                nameBackwards += this.name[i];
            return nameBackwards;
        }
    return `${getReversName()} si ym ,olleH`;
    },
}
console.log(o2.getBackWards());


const o3 = {
    name : 'Sungjin',
    getBackWards : function(){
        function getReversName(){
            let nameBackwards ='';
            for(let i = this.name.length-1; i>=0; i--)
                nameBackwards += this.name[i];
            return nameBackwards;
        }
    return `${getReversName()} si ym ,olleH`;
    },
}

const seongjin = {name : "Seungjin"};
const friend = {name : "friend"};

o3.getBackWards.call(seongjin);
// function greet(){
//     return `Hello, I'm ${this.name}!`;
// }


