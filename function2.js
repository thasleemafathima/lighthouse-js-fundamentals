
const finalPosition = function(moves){
  let ans = moves / 100;
  //return Math.floor(ans);
  return Math.ceil(ans);
}

console.log(finalPosition(1670));
