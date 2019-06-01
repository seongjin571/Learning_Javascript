
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

const seongjin = {name : "Seungjin"};
const friend = {name : "friend"};

function greet(age, height){
    this.age = age;
    this.height = height;
    return `${this.name} is ${this.age} years old and he's height is ${this.height}`;
}

console.log(greet.call(seongjin,27,176));
console.log(seongjin);

function insertInfo(age, height){
    this.age = age;
    this.height = height;
    return `${this.name} is ${this.age} years old and he's height is ${this.height}`;
}
console.log(insertInfo.apply(friend, [26,173]));
console.log(friend);

