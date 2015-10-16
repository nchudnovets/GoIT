var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

function unique(strings){
  var arr = [];
  
  for(var i = 0; i < strings.length; i++){     
    if(arr.indexOf(strings[i]) < 0){
      arr.push(strings[i]);      
    };
  };
  return arr;  
};

unique(strings);