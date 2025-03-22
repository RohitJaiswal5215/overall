function factorial(n){
 
    if(typeof n !== 'number' || n<0){
      console.log("Invalid input")
      return null
  }
  
    if(n == 0){
     return 1
  }
  
  return  n * factorial (n-1)
  
  }
  console.log(factorial(5))
  console.log(factorial(-1))
  console.log(factorial(0))