
rbtnPersonalityLH.onchange=function(){
   console.log(`The value property of the control is ${rbtnPersonalityLH.value}`)

// get the text of the option chosen by the user
   let userChoice = $("input[name=rbtnPersonalityLH]:checked").prop("value")
   console.log(`You picked ${userChoice}`)
}


btnGoTo2LH.onclick=function(){
  ChangeForm(favExercises)
}
