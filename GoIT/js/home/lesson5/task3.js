function getSum () {
  var sum = 0;
  
  while (true){
    var number = prompt('Type your number: ');       
    if (number === '' || typeof(number) === 'object' || isNaN(number)) {
     break;
    };
    sum += +number;     
  };

  return sum;
};

getSum();