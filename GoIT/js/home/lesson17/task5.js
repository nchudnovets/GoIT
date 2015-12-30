var ul_elem = document.createElement('ul');

while (true){
    var text = prompt('what to store? : ');
    
    if (!text) {break};
};

var li_elem = document.createElement('li');
li_elem.appendChild(document.createTextNode(text));
ul_elem.appendChild(li_elem);