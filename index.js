
function countToTen(){
    for( let i = 0; i <= 10; i++){
      console.log(i)
}
}
// countToTen()


function countFromOne(num){
  for( let i = 1; i <= num; i++){
      console.log(i)
  }
}
// countFromOne(13)

function countEveryOdd(num){
  for( let i = 1; i <= num; i+=2){
      console.log(i)
  }
}
// countEveryOdd(13)


function isNegative(num){
  if (num < 0){
  return true
  }else{
    return false
  }
}
// console.log(isNegative(9))

function betweenFiveAndTwenty(num){
    if (5 <= num && num <= 20){
        return true;
    }else{
        return false;
    }
}
// console.log(betweenFiveAndTwenty(10))

function isAllLowerCase(string){
   const lowercase = string.toLowerCase()
   if(lowercase === string){
       return true
   }else{
       return false
   }
}

// console.log(isAllLowerCase("eleveEEn"))