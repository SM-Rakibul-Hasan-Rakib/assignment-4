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
