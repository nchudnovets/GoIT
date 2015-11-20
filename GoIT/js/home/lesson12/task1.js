function printNumbersInterval (minNumber, maxNumber, interval){
    var i = minNumber - 1;
  
  var timerId = setInterval(function(){
      i++;
      console.log(i);
      if(i === maxNumber){
          clearInterval(timerId);
      };
      
  }, interval);
};

printNumbersInterval(1, 20, 100);