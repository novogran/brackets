module.exports = function check(str, bracketsConfig) {
  let flag = false;
  console.log(bracketsConfig);
  for(let i= 0; i <= str.length+2; i++){
    for (let brackets of bracketsConfig){
      while(str.includes(brackets[0].toString()+brackets[1].toString())){
        str = str.replaceAll(brackets[0].toString()+brackets[1].toString(),'');
      }
    }
  }
  if(str.length == 0) flag = true;
  return flag;
}