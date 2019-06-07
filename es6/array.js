const array = [{name : "sung", age : 27},{name : "ww", age : 37}];
const array2 = [1,2,3,4,5,"a"];
const mapArray = array.map(e => 
        e.name
)
const price = [9000, 3000];
const mapArray2 = array.map((e,i) => ({name : e.name, price : price[i]}));
const mapArray3 = array2.filter(e => typeof e === 'number');
console.log(mapArray);
console.log(mapArray2);
console.log(mapArray3); 