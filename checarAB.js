function ABCcheck(str) {
  
    for (var i = 0 ; i < str.length-4; i++){
      if (str[i].match(/[abAB]/)){
        if (str[i+4].match(/[abAB]/)){
          return true;
        }
      }
      
    }
    return false;
}
    str = "Laura sobs";
    console.log(ABCcheck(str));

