// not solved till end yet !!!

function pattern(n){
    var output="";

    if (n <= 0){
        return '';
    }
    else{
        var i = n;
        
        while ( i >= 1){
            for (var j = i-1; j > 0; j--){  //spaces befor numbers
                output += ' ';
            };
            
            for (var k = 1; k <= n; k++){  //numbers
                output += k;
            };
            
            for (var l = n-1; l > i-1; l--){  //spaces after numbers
                output += ' ';
            };
            
            output += '\n';
            i--;
       }; 
    };
    
    return output.slice(0, -1);
};

console.log(pattern(5));