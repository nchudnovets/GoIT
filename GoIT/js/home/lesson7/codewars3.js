
var make_lazy = function () {
  var func = arguments[0];
  var args = [];
  
  for(i=1; i < arguments.length; i++){
      args.push(arguments[i]);
    };
  
  return function(){
    return func.apply(this, args);
  };
};
