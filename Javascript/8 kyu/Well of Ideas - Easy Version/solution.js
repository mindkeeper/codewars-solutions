function well(x){
  let result = {}
  x.forEach((e) => {
    result[e] = (result[e] || 0) + 1
  })
  
  if(result['good']<=2){
    return "Publish!"
  }else if(result['good']>2){
    return "I smell a series!"
  }else{
    return "Fail!"
  }

}