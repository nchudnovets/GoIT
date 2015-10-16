function getSum () {
  var sum = 0;
  
  while (true){
    var number = prompt('Type your number: ');
    sum += +number;    
    if (number === '' || typeof(number) === 'object') {
       break;
    };
  };

  return sum;
};