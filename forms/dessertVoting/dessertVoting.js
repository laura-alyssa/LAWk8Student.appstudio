var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDessertsLH.clear()
    for (i = 0; i < dessertList.length; i++) 
        drpDessertsLH.addItem(dessertList[i])
}


drpDessertsLH.onclick=function(s){
// this 'if' kicks user out if they  just clicked on control 
// but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
  else { // the user picked something
      drpDessertsLH.value = s
      lblPromptLH.value = `You picked ${drpDessertsLH.selection} - that is a great choice!`
        /* add code here to get item user chose and output 
        it in a label, using a literal.
        */
    }
}

btnGoToLH.onclick=function(){
      ChangeForm(describeYou)
}
