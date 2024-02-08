function monthlySavings(arr, livingCost) {
       if (Array.isArray(arr) && typeof livingCost === "number") {
  
           let newArray=[]        
           let total=0;
  
           for (let i = 0; i < arr.length; i++) {
               if (arr[i] >= 3000) {  
                   //condition
                   let tax=((20/100*arr[i]));
                   newArray.push(arr[i]-tax);               
               }else{
                   //condition
                  newArray.push(arr[i]);
               }
           }
         
          for (const key in newArray) {
           //loop
          total+=newArray[key]       
           }
           //main calculetion
           let savemoney=total-cost;
         
           if (savemoney>=0) {
               return savemoney;
           } else if(savemoney < 0){
               let popUp="earn more"
               return popUp;
           }          
         
          }
       else {
           //condition
  
           let err = "invalid input";
           return err;
          
       }
   }

let array = [900, 2700, 3400]
let cost = 10000;
console.log(monthlySavings(cost, array));


























// // 

// function password(obj) {
//   let objLength = Object.keys(obj).length
//   let name =Object.keys(obj)[0];
//   let birthTime =Object.keys(obj)[1];
//   let siteName =Object.keys(obj)[2];   
//   if (objLength==3 && name=="name"&& birthTime=="birthYear"&&siteName=="sitename") {
//       let x=obj.birthYear;
//       let birthValue =x.toString().length;
//       let site=obj.sitename;
//       let userName =obj.name;
//       let siteChange= site.charAt(0).toUpperCase() + site.slice(1);
//       // console.log(siteChange)
//               if ( birthValue == 4) {

//                   let pass =siteChange +"#"+ userName +"@"+x;
//                   return pass


//                }
//                else {
//                   let err ="invalid"
//                   return err;
//                }

//   }
// }
// console.log(password({
//   name:"rakib",
//   birthYear:5657,
//   sitename:"google"
// }))




