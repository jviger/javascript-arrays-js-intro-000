var chocolateBars = ['snickers', 'hundred grande', 'kitkat','skittles'];

var addElementToBeginningOfArray = function(array, element){
  var newArray = [element,...array];
  return newArray;
  
}

var destructivelyAddElementToBeginningOfArray = function(array, element){
   array.unshift(element);
   return array;
}


var addElementToEndOfArray = function(array){
   var newArray = array.push(element);
   return newArray;
}
var destructivelyAddElementToEndOfArray = function(){
   array.push(element);
   return array;
}

var accessElementInArray = function(array,index){
  return array[index];
  
}

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  return array.slice(1);

}


var removeElementFromBeginningOfArray = function(array){
  var newArray = array.slice(1);
  return newArray;
  
}

var destructivelyRemoveElementFromEndOfArray = function(array){
  array = array.pop();
  return array;
}
var removeElementFromEndOfArray = function(array){
  var newArray = array.pop();
  return newArray;
}





