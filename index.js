function randomFloorNumber(maxNum){
  checkType(maxNum, randomFloorNumber.name)  
  return ~~(Math.floor(Math.random() * maxNum));
}
function randomCeilNumber(maxNum){
  checkType(maxNum, randomCeilNumber.name);
  return ~~(Math.ceil(Math.random() * maxNum));
}
function checkType(input,functionName){
  if(typeof input !== 'number'){
    throw TypeError('Sorry but the input introduced to ' +functionName+ ' wasn\'t a number'); 
  }
}
module.exports = {
  randomCeilNumber,
  randomFloorNumber
};
