var deskSize = 8;
var output = '';
var i = 1;


function printLine (signs, number){
  for(var j = 1; j <= number; j++){
      output += signs;
    };
    output += '\n';
};


while(i <= deskSize){
  if(i % 2 !== 0){
    printLine ('# ', deskSize/2);
  }
  else{
    printLine (' #', deskSize/2);
  };
  i++;
};

console.log(output);