// Please make sure to uncomment other Javascript operational code to check for their validity.



// Division operation

const division = (num1, num2) => {

    if (!num1 || !num2) {
      return "Please pass all arguments and make sure they are all greater than 0"
    }
    
    if (num1 % num2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(division(4, 1))
  
  
  
  
  // Multiplication operation
  
  // const multiplication = (num1, num2) => {
  //   if (!num1 || !num2) {
  //     return "Please pass all arguments and make sure they are all greater than 0"
  //   }
    
  //   if (num1 * num2 == 8) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  
  // console.log(multiplication(4, 1))
  
  
  
  
  // Addition operation
  
  // const addition = (num1, num2) => {
  //   if (!num1 || !num2) {
  //     return "Please pass all arguments"
  //   }
    
  //   if (num1 + num2 == 10) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  
  // console.log(addition(6, 4))
  
  
  
  
  // Subtraction operation
  
  // const subTraction = (num1, num2) => {
  //   if (!num1 || !num2) {
  //     return "Please pass all arguments"
  //   }
    
  //   if (num1 - num2 == 8) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  
  // console.log(subTraction(16, 7))