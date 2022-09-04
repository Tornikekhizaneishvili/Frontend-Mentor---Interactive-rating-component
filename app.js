let wichButtonClicked = null
let submitButton = document.getElementById("btn")
let ratingNumber = document.getElementById("rating")









function reply_click(x) {
  
  wichButtonClicked = x
  console.log(wichButtonClicked)

}

function changeCards() {
  let firstCard = document.getElementById("first-card")
  firstCard.setAttribute("style" , "display: none;")
  let secondCard = document.getElementById("second-card")
  secondCard.setAttribute("style" , "display: flex;")
}





submitButton.onclick=function(){
  if (wichButtonClicked == null){
    alert("Please choose rating!")
  }else{
    changeCards()
    ratingNumber.textContent = wichButtonClicked
  }
  
  

}


