function checkAnswer() {
  const answer = document.getElementById("answer-input").value;
  if (answer.toLowerCase() == "tokyo") {document.getElementById("result").innerHTML = "Correct!";} 
  else {document.getElementById("result").innerHTML = "Incorrect.";}
}

function checkAnswer2() {
  const answer = document.getElementById("answer-input-2").value;
  if (answer.toLowerCase() == "yes") {document.getElementById("result-2").innerHTML = "Well done! &#128077;";}
  else {document.getElementById("result-2").innerHTML = "Remember to hydrate yourself! &#128166;";}
}