$document.ready(function changeTurn(){
  if(nextTurn == 'X'){
    nextTurn = 'O';
  } else {
    nextTurn = 'X';
  }

});


var nextTurn ='X'

if (this.id =="c1")
{
  if document.getElementById("c1").innerHTML == ""){
    document.getElementById("c1").innerHTML == nextTurn;
      changeTurn();
  }

}

function changeTurn(){
  if(nextTurn == 'X'){
    nextTurn = 'O';
  } else {
    nextTurn = 'X';
  }

}

