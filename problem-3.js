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

let arr = [23,34, 44, 5555.55,33,NaN,"Rakib"];
console.log(deleteInvalid(arr));