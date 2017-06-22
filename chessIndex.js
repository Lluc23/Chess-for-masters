$(document).ready(function() {
var blackCounter = 2;
var whiteCounter = 2;
var classArray;
var pieceID;
  //$("#A1").addClass("red");
var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', './audio/button-22.mp3');
  audioElement.addEventListener('ended', function() {
      this.play();
      this.pause();
    }, false);


$("body").on('click', '.container2',function(e){

  if ($(e.target).hasClass("whitesquare") || $(e.target).hasClass("blacksquare")){

    if(classArray && classArray.length > 3) {
      var remove_classes = $(e.target).attr("class").split(" ");
        if(remove_classes[3] === "black" && classArray[3] === "white"){
          if(blackCounter <= 9){
            $(".empty2:nth-child(" + blackCounter + ")").addClass(remove_classes[2] + " " + remove_classes[3]);
          } else if(blackCounter > 9){
            $(".empty3:nth-child(" + (blackCounter-8) + ")").addClass(remove_classes[2] + " " + remove_classes[3]);
          }
          blackCounter += 1;
        }
        if (remove_classes[3] === "white" && classArray[3] === "black"){
          if(whiteCounter <= 9){
            $(".empty:nth-child(" + whiteCounter + ")").addClass(remove_classes[2] + " " + remove_classes[3]);
          } else if(whiteCounter > 9){
            $(".empty0:nth-child(" + (whiteCounter - 8) + ")").addClass(remove_classes[2] + " " + remove_classes[3]);
          }
          whiteCounter += 1;
        }
        if (remove_classes[3]== classArray[3]){
            classArray = undefined;}
        else if(remove_classes[3]!== classArray[3]){
          $(e.target).removeClass(remove_classes[2]+ " " + remove_classes[3]);
          $(e.target).addClass(classArray[2] + " " + classArray[3]);
          $("#" + pieceID).removeClass(classArray[2] + " " + classArray[3]);
          audioElement.play();
          classArray = undefined;
          }
      }

    else {
      $(e.target).addClass("selected");
      classArray = $(e.target).attr("class").split(" ");
      pieceID = $(e.target).attr("id");
    }
    $(".whitesquare, .blacksquare").removeClass("selected");
    $(e.target).toggleClass("selected");
  }

  else {
    $(".whitesquare, .blacksquare").removeClass("selected");
    classArray = undefined;
  }
});

    var chessgame = new Game();
    chessgame.createPieces();
    //console.log(chessgame.pieces);

    chessgame.pieces.forEach(function(piece){
    $("#" + piece.position).addClass(piece.name);
    $("#" + piece.position).addClass(piece.color);
    });

});
