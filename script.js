
// document.addEventListener('DOMContentLoaded', function() {
//   console.log('this is after the dom loaded');
// })

//jquery
$( document ).ready(function() {
    console.log( "this is working. YES!!" );





var grid = [];

//creating x & y coordinates on the grid for each puzzle pc
//create div for ea. pc. w/ class 'puzzle'
// & use counter for id's per pc. e.g. puzzle1, puzzle2
// make 120px/pc for 5x5 600px puzzle
//attach divs to container

//container = flexbox

var createBoard = function() {
  var counter = 0;
  var pieces = [];
  var randomPieces = [];

  for (var i = 0; i < 5; i++) {
    grid[i] = []
    for (var j = 0; j < 5; j++) {
      var block = $('<div class="puzzle"></div>');
      block.attr('id', 'piece' + counter)
      .css({'background-position': (i * -120) +'px ' + (j * -120) +'px'});
      // block.text(counter);
      pieces.push(block);
      counter++;
      $('.container').append(block);
    }
  }

  for (var i = 0; i < pieces.length; i++) {

  while (pieces.length) {
    var randomIndex = Math.floor(Math.random()*pieces.length);
    var piece = pieces.splice(randomIndex, 1);
    randomPieces.push(piece[0]);
    // console.log(pieces.length)
  }
    // append to container
  for (var i = 0; i < randomPieces.length; i++) {
    $('.container').append(randomPieces[i]);
  }
    // console.log(randomPieces);
  }

  // console.log(pieces);
}
createBoard();





// switch 1st click and 2nd click puzzle pcs
//pc will stay in place if correct spot

//swap position of 2 puzzles within the array... how?
//if pc1 clicked and if pc2 clicked, switch coordinates of pc1 &pc2




//var shuffle=
// switch(shuffle){
//   case
// }



// var puzPc = $('.puzzle');

// //attach each div to coordinate
// var assignCoord = function() {
//   for (i = 0; i < grid.length; i++) {
//     for(j = 0; j < grid.length[i]; j++) {
//       $('.puzzle').css({
//         'background-position' : grid[i][j].x grid[i][j].y
//       })
//     }
// }

//let user know when they win




// index0 = 0;
// puzzle0 = $('.puzzle').eq(0);
// index2 = 2;
// puzzle2 = $('.puzzle').eq(2);

// puzzle0.insertAfter($('.puzzle').eq(index2));
// puzzle2.insertBefore($('.puzzle').eq(index0));


});







