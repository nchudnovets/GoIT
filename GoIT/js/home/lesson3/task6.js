function pow(x, n){
  if(n > 1){
    var output = x;
    for(i = 1; i < n; i++){
      output *= x;
    };
  }
  else {
    return x;
  };
  return output;
};