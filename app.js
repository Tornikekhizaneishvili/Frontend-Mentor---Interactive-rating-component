let wichButtonClicked=0
let submitButton = document.getElementById("btn")










function reply_click(clicked_id) {
  
  wichButtonClicked = clicked_id
  console.log(clicked_id);

  
}

function changeCards() {
  var firstCard = document.getElementById("first-card");
  firstCard.setAttribute("style" , "display: none;");
  var secondCard = document.getElementById("second-card");
  secondCard.setAttribute("style" , "display: flex;");
}





submitButton.onclick=function(){
  changeCards()

}


