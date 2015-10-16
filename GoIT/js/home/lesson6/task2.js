var arr = ['HTML', 'JavaScript', 'CSS'];
var arrSorted = [];

for (var item in arr){
  arrSorted.push(arr[item]);
};

arrSorted = arrSorted.sort();

console.log(arrSorted);
console.log(arr);