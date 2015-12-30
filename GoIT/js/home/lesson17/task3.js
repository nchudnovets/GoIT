function insertAfter(elem, refElem) {
    if (!refElem.nextSibling){
        refElem.parentNode.appendChild(elem);
    }
    else {
        refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    };
};
