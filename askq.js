var questionArray = [
  ["Bör XXX förbjudas", "Ja", "Nej", "Avstår"] 
];

for (var i = 0; i < questionArray.length; i++){
  document.write("<form><span class='question'>" + questionArray[i][0] + "</span><br>");
  for (var x = 1; x < 4; x++){
    document.write("<input type='radio' class='answer' name='answer' value='" + questionArray[i][x] + "'>" + questionArray[i][x] + "");
  }
  document.write("</form><br>");
}
