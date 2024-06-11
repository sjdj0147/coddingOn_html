
let obj = {name:'해리', age: '30'};
for(let key in obj){
  // console.log(key + ':' + obj[key]);
  console.log(`${key} : ${obj[key]}`);
}

for(let key in obj){
  if(key === 'age') break;
  console.log(obj[key]);
}