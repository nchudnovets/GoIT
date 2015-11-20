function NamedOne(first, last) {

   var first = first;
   var last = last;
    
    Object.defineProperties(this, {
        firstName: {
            get: function(){
                return first;
            },
            set: function(newFirst){
                first = newFirst;
            }
        },
        lastName: {
            get: function(){
                return last;
            },
            set: function(newLast){
                last = newLast;
            }
        },
        fullName: {
            get: function () {
                return first + ' ' + last;
            },
            set: function(newFull){                
                var splited = newFull.split(' ');
                if (splited.length !=2){return};
                first = splited[0];
                last = splited[1];
            }
        }
    });
};

