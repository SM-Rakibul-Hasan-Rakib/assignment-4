/*function signature/sample */
function calculateMoney(ticketSale) {
  //you can give your own error message
  if(isNaN(ticketSale) || ticketSale < 0){
    return "Invalid Number"
  }

  // You have to write your code here
  
  const ticketSalePrice = 120;
  const oneSecurityDailySallery = 500;
  const stafNumber = 8;
  const stafLunchBill = 50;

  const totalSale = ticketSale * ticketSalePrice;
  const totalLunchBill = stafLunchBill * stafNumber;
  const totalamount = totalLunchBill + oneSecurityDailySallery;
  
  const result = totalSale - totalamount;

  return result;
  }




  function checkName(name){
    if(typeof name === "string") {
      let nameValue = name;
      let nameValuecase = nameValue.toLocaleLowerCase();
      let lc = nameValuecase.slice(-1);
  
      if(lc == "a"|| lc == "e"|| lc == "i"||lc == "o"||lc =="u"||lc =="y"||lc =="w") {
          let nameTypeGood = "Good Name"
          return nameTypeGood;
      } else{
        let nameTypeBad ="Bad Name";
        return nameTypeBad;
      }
    }else{
      let error = "invalid"
      return error;
    }
  }  



  function deleteInvalid(array){
    let newArray=[];
    if(Array.isArray(array)){
      //condition
  
      for (const key in array) {
        //loop
  
        if(typeof array [key] == "number" && !isNaN(array[[key]])) {
          newArray.push(array[key])
        }
      }
    }
    else {
      let err = "Invalid Array";
      //return err;
    }
    return newArray;
  }




  function password(obj){


    let objLength = Object.keys(obj).length;
    let name = Object.keys(obj)[0];
    let birthTime = Object.keys(obj)[1];
    let siteName = Object.keys(obj)[2];
    if (objLength==3 && name=="name" && birthTime=="birthYear" && siteName=="sitename") {
      let x = obj.birthYear;
      let birthValue =x.toString().length;
      let site=obj.sitename;
      let userName =obj.name;
      let siteChange= site.charAt(0).toUpperCase() + site.slice(1);
  
      if(birthValue == 4){
        let pass = siteChange+ "#"+userName+"@"+x;
        return pass;
      }else{
        let err = "invalid"
        return err; 
      }
    }
  }
 


  /*function signature/sample */
function monthlySavings(arr , livingCost) {

  // You have to write your code here
  if(Array.isArray(arr) && typeof livingCost ==="number") {
    
    let newArray=[]
    let total =0;
    
    for( let i =0; i < arr.length; i++){
      if(arr[i] >- 3000 ){
        //condition
        let tax = ((20/10*arr[i]));
        newArray.push(arr[i]-tax);
      }else{
        newArray.push(arr[i]);
      }
    }
    for(const key in  newArray) {
      //loop
      total+=newArray[key]
    }
    //main calculation
    let savemoney= total -cost;

    if(savemoney>=0){
      return savemoney;
    }
     else if(savemoney < 0){
     let popup="earn more"
     return popup;
    }
  }
  else{
     let err = "invalid input";
     return err;
  }
  }



  





