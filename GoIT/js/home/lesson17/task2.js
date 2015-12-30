if (!Element.prototype.remove){
    Element.prototype.remove = function(){
        if (!this.parentNode){return}
        else {
            this.parentNode.removeChild(this);
        }
    };
}