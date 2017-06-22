$(document).ready(function() {

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
        if (remove_classes[3]== classArray[3]){
            classArray = undefined;}
        else if(remove_classes[3]!== classArray[3]){
          $(e.target).removeClass(remove_classes[2]+ " " + remove_classes[3]);
          $(e.target).addClass(classArray[2] + " " + classArray[3]);
          $("#" + pieceID).removeClass(classArray[2] + " " + classArray[3]);
          audioElement.play();
          classArray = undefined;
          console.log(remove_classes);}
        //  if(remove_classes[3] === "black"){
        //   $(".empty2").addClass(remove_classes[2] + " " + remove_classes[3]);}
        //  if (remove_classes[3] ==="white"){
        //   $(".empty").addClass(remove_classes[2] + " " + remove_classes[3]);
        // }
      }

    else {
      $(e.target).addClass("selected");
      classArray = $(e.target).attr("class").split(" ");
      pieceID = $(e.target).attr("id");
    }}

  else {
    $(".whitesquare, .blacksquare").removeClass("selected");
    classArray = undefined;
  }
  $(".whitesquare, .blacksquare").removeClass("selected");
  $(e.target).toggleClass("selected");
});

    var chessgame = new Game();
    chessgame.createPieces();
    //console.log(chessgame.pieces);

    chessgame.pieces.forEach(function(piece){
    $("#" + piece.position).addClass(piece.name);
    $("#" + piece.position).addClass(piece.color);
    });

});
