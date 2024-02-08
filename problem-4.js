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
console.log(password({
  name : "rakib",
  birthYear:5657,
  sitename: "google",
}))
