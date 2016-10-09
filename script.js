// document.addEventListener('DOMContentLoaded', function() {
//   console.log('this is after the dom loaded');
// })

//jquery
$( document ).ready(function() {
    console.log( "this is working. YES!!" );

//mad creds to Scott

//why?
//blank grid to store coordinates per puzzle pc
//that will be created by below nested for loop

var grid = [];

//creating x & y coordinates on the grid for each puzzle pc
//create div for ea. pc. w/ class 'puzzle'
// & use counter for id's per pc. e.g. puzzle1, puzzle2
// make 60px/pc for 10x10 600px puzzle
//attach divs to container

//container = flexbox

//need to reorganize puzzles to be in order
//attach coordinates to each pc?

var createBoard = function() {
  var counter = 0;
  var pieces = [];
  var randomPieces = [];

  for (var i = 0; i < 5; i++) {
    grid[i] = []
    //new $('<div class"row">')
    // var newRow = $('<div class="row"></div>');
    for (var j = 0; j < 5; j++) {
      var block = $('<div class="puzzle"></div>');
      block.attr('id', 'piece' + counter)
      .css({'background-position': (i * -120) +'px ' + (j * -120) +'px'});
      pieces.push(block);
      counter++;
    }
  }

  // for (var i = 0; i < pieces.length; i++) {

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
  // }

  // console.log(pieces);
}
createBoard();




//this works - but why???
// $(function () {
//   var $contain = $('.container');
//   var $pieces = $('.puzzle');
//     while ($pieces.length) {
//         $contain.append($pieces.splice(Math.floor(Math.random() * $pieces.length), 1)[0]);
//     }
// });







// switch 1st click and 2nd click puzzle pcs
//pc will stay in place if correct spot

//swap position of 2 puzzles within the array... how?
//if pc1 clicked and if pc2 clicked, switch coordinates




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




});







