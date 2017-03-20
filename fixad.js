//Olika frågor
var questionArray = [
  ["Det borde inte vara arbetsförmedlingens uppgift att hitta jobb åt arbetssökande?", "Ja", "Nej", "Avstår"], 
  ["Solariesolning för personer under 18 år bör förbjudas?", "Ja", "Nej", "Avstår"]
];


//Hur partierna förhåller sig (1 = ja, -1 = nej)
//S, M, SD, MP, C, V, L, KD
var keyArray = [
  [-1,1,1,-1,1,-1,1,1],
  [1,-1,0,1,-1,1,-1,1]
];

//Skriv ut frågor
for (var i = 0; i < questionArray.length; i++){
  document.write("<form><span class='question'>" + questionArray[i][0] + "</span><br>");
  for (var x = 1; x < 4; x++){
    document.write("<input type='radio' class='answer' name='answer' value='" + questionArray[i][x] + "'>" + questionArray[i][x] + "");
    
  }
  document.write("</form><br>");
}


//Lyssna efter klick
var inputs = document.getElementsByTagName('input');
for(var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('click', check);
}



var userAnswers = [];

//Se vad personen svarat
function check(){
  userAnswers = [];
  var c = 0;
  for(var i = 0; i < inputs.length; i++){
    if(inputs[i].checked) {
      userAnswers.push(i%3);
      c++;
    }
  }
  if(c==questionArray.length) rate();
}


var userParty = [0,0,0,0,0,0,0,0];
//Summera svaren
function rate(){
  userParty = [0,0,0,0,0,0,0,0];
  console.log(userAnswers);
  for(var i = 0; i < userAnswers.length; i++){
    if(userAnswers[i]=='0') {
      for(var j = 0; j < 8; j++){ //8 is the number of parties
        userParty[j] = userParty[j] + keyArray[i][j];
      }      
    }
    else if(userAnswers[i] == '1') {
      for(var j = 0; j < 8; j++) { //8 = nr of parties
        userParty[j] = userParty[j] - keyArray[i][j];
      }
    }
  }  
  console.log(userParty);
  answer();
}


function answer(){
  var q=0;
  var multParty = [];
  multParty.push(q);
  var i;
  for(i = 1; i < 8; i++){
    if(userParty[i]>userParty[q]) {
      multParty = [];
      q = i;
      multParty.push(q);
    }
    else if(userParty[i] == userParty[q]) {
      multParty.push(i);
    }
  }
  
  for(i = 0; i < multParty.length; i++) {
    if(multParty[i] == 0) {
      console.log("S");
    }
    else if(multParty[i] == 1) {
      console.log("M");
    }
    else if(multParty[i] == 2) {
      console.log("SD");
    }
    else if(multParty[i] == 3) {
      console.log("MP")
    }
    else if(multParty[i] == 4) {
      console.log("C");
    }
    else if(multParty[i] == 5) {
      console.log("V");
    }
    else if(multParty[i] == 6) {
      console.log("L");
    }
    else if(multParty[i] == 7) {
      console.log("KD");
    }
    
  }

  console.log("klar");

  
}
