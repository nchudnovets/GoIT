function stringCutter (string){
  if(string.length <= 20){
    return string;
  }
  else{
    return string.slice(0, 20) + '...';
  };
};