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

  let array = [900,2700,3400];
  let cost = 10000;
  console.log(monthlySavings(array,cost));
