var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array,el){
  
  array = [el,...array]
  return array
  
}

function destructivelyAddElementToBeginningOfArray(array,el){
  array.unshift(el);
  return array
  
}

function addElementToEndOfArray (array,el){
  
  return [...array,el];
  

  
}

function destructivelyAddElementToEndOfArray(array,el){
  array.push(el);
  return array
  
}


function accessElementInArray(array,i){
  return array[i];
  
}

function destructivelyRemoveElementFromBeginningOfArray(array){ array.shift(); return array}

function removeElementFromBeginningOfArray(array){array.slice(1);}


function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
}


function removeElementFromEndOfArray(array){array.slice(0,removeElementFromEndOfArray.length-1)
  
}