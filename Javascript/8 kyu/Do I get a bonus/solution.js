function bonusTime(salary, bonus) {
    // your code here
      
      if(bonus){
        return `\u00A3${salary*10}`
      }else{
        return `\u00A3${salary}`
      }
    }