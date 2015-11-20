var MyNamespace;

MyNamespace.MyClass = function(str){
    this.str = str;
    
    this.sayHello = function(){
        return this.str;
    };
};

