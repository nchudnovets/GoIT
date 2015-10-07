var start = 2, stop = 10;

outer: for (var i = start; i <= stop; i++){
  for (var j = 2; j < i; j++){
    if ( i % j === 0){
      continue outer;
    }    
  };
  console.log(i);
};