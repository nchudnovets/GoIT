function getType (arg){
    return typeof(arg);
};

console.log(getType (2));
console.log(getType ('2'));
console.log(getType (true));
console.log(getType ({}));