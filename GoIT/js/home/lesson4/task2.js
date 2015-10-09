function checkSpam (string){
  var string = string.toLowerCase();
  return string.indexOf('spam') > -1 || string.indexOf('sex') > -1 ? true : false;
};