function createElement(tag){
  return document.createElement(tag);
}

function setElementText(el, text){
  el.textContent = text;
}


function insert(el, parent, anchor){
  parent.insertBefore(el, anchor)
}