// Add your functions and code here
var kittens = [];
function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
}

function appendKitten(name){
  var newKittens = kittens.slice(0, kittens.length);
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name){
  var newKittens = kittens.slice(0, kittens.lenght);
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten(){
  
}

function removeFirstKitten(){
  
}

