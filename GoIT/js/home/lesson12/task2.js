function printNumbersInterval (minNumber, maxNumber, interval){
    var i = minNumber - 1;
  
  var timerId = setTimeout(function printThemNow(){
      i++;
      console.log(i);
      if(i < maxNumber){
          setTimeout(printThemNow, interval);
      };
      
  }, interval);
};

printNumbersInterval(1, 20, 100);