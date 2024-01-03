// compare two json have  the same properties without order
let obj1 = { name: 'person1', age: 5 };
let obj2 = { age: 5, name: 'person1' };
function areEqual(obj1, obj2) {
    const stringifyAndSort = (obj) => JSON.stringify(obj, Object.keys(obj).sort());
  
    return stringifyAndSort(obj1) === stringifyAndSort(obj2);
  }
  let result = areEqual(obj1, obj2);
console.log(result); 