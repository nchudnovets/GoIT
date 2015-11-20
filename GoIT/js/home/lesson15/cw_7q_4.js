Array.prototype.reverse = function() {
  var array = this.concat();    
    
  for(var i = 0; i<this.length; i++){
     this[i] = array.pop();      
  }; 
  return this;
};

console.log([1,2,3].reverse());