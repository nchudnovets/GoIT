var elems = document.getElementsByTagName('a');
  for(var i = 0; i < elems.length; i++){
    var attr = elems[i].getAttribute('href');
    if (!attr){continue};
    if ( attr.indexOf('http://internal') !== 0 &&
          attr.indexOf('://') > -1
    ){
      elems[i].classList.add('external');
    }
  }