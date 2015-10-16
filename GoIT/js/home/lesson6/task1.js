var obj = {
  className: 'open menu menu my menu'
};


function removeClass(obj, cls) {
  var classNames = obj.className.split(' ');
  
  while (classNames.indexOf(cls) > 0){
    for (var i = 0; i < classNames.length; i++) {
      if (classNames[i] === cls) {
        classNames.splice(i, 1);   
      };    
    }; 
  }
  
  obj.className = classNames.join(' ');
  return obj.className;
};


removeClass(obj, 'menu');