function Game (){
  this.pieces = [];
  this.createPieces = function(){
    this.pieces.push(new Piece("tower", "white", "H1"));
    this.pieces.push(new Piece("tower", "white", "H8"));
    this.pieces.push(new Piece("bishop", "white", "H3"));
    this.pieces.push(new Piece("bishop", "white", "H6"));
    this.pieces.push(new Piece("horse", "white", "H2"));
    this.pieces.push(new Piece("horse", "white", "H7"));
    this.pieces.push(new Piece("king", "white", "H4"));
    this.pieces.push(new Piece("queen", "white", "H5"));
    this.pieces.push(new Piece("pawn", "white", "G1"));
    this.pieces.push(new Piece("pawn", "white", "G2"));
    this.pieces.push(new Piece("pawn", "white", "G3"));
    this.pieces.push(new Piece("pawn", "white", "G4"));
    this.pieces.push(new Piece("pawn", "white", "G5"));
    this.pieces.push(new Piece("pawn", "white", "G6"));
    this.pieces.push(new Piece("pawn", "white", "G7"));
    this.pieces.push(new Piece("pawn", "white", "G8"));

    this.pieces.push(new Piece("tower", "black", "A1"));
    this.pieces.push(new Piece("tower", "black", "A8"));
    this.pieces.push(new Piece("bishop", "black", "A3"));
    this.pieces.push(new Piece("bishop", "black", "A6"));
    this.pieces.push(new Piece("horse", "black", "A2"));
    this.pieces.push(new Piece("horse", "black", "A7"));
    this.pieces.push(new Piece("king", "black", "A5"));
    this.pieces.push(new Piece("queen", "black", "A4"));
    this.pieces.push(new Piece("pawn", "black", "B1"));
    this.pieces.push(new Piece("pawn", "black", "B2"));
    this.pieces.push(new Piece("pawn", "black", "B3"));
    this.pieces.push(new Piece("pawn", "black", "B4"));
    this.pieces.push(new Piece("pawn", "black", "B5"));
    this.pieces.push(new Piece("pawn", "black", "B6"));
    this.pieces.push(new Piece("pawn", "black", "B7"));
    this.pieces.push(new Piece("pawn", "black", "B8"));

  };
}
