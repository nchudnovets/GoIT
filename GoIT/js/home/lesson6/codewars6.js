
function isValidWalk(walk) {
    if(walk.length !== 10){
        return false;
    }
    else{
        return walk.filter(function(direction){return direction === 'n';}).length ===
               walk.filter(function(direction){return direction === 's';}).length &&
               walk.filter(function(direction){return direction === 'e';}).length ===
               walk.filter(function(direction){return direction === 'w';}).length; 
    };
};



// бонус. Решение для той же задачи с доп условием - 
// true возвращается только в том случае, если герой возвращается той же дорогой.

function isValidWalk_more(walk) {
  if(walk.length !== 10){
    return false;
  }
  else {
    var forward = walk.slice(0, 5);
    var back = walk.slice(5);
    var isBack = function(fw, bk){
                   return fw === 'n' && bk === 's' || 
                          fw === 'e' && bk === 'w' ||
                          fw === 's' && bk === 'n' || 
                          fw === 'w' && bk === 'e';
                   };
    
    for(i=0; i < 5; i++){
      if( !isBack(forward[i], back[i]) ){
        return false;
      };
    };
    
  }; 
  
  return true;
};
