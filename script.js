// document.addEventListener('DOMContentLoaded', function() {
//   console.log('this is after the dom loaded');
// })

//jquery
$( document ).ready(function() {
    console.log( "this is working. YES!!" );
});

//why?
//blank grid to store coordinates per puzzle pc
//that will be created by below nested for loop
// should be grid[[1,2,3,4,5,6,7,8,9,10]
//[1,2,3,4,5,6,8,9,10][1,2,3,4,5,6,7,8,9,10]]

var grid = [];

//creating x & y coordinates on the grid for each puzzle pc
// make 60px/pc for 10x10 600px puzzle

for (var i = 0; i < 10; i++) {
  grid[i] = []
  //new $('<div class"row">')
  var newRow = $('<div class="row"></div>');
  for (var j = 0; j <  10; j++) {
    var block = $('<div class="puzzle">')
    var counter = 0;
    block.attr('id', 'piece'+counter)
    .css({'background-position' : i*60 + 'px ' + j*60 + 'px'})
    newRow.append(block)
  }
  board.append(newRow)
}



// $('.container').append(.innerHTML?)('<div>pc1</div>');
//for 3 x 3 ---- this works
for (var i = 0; i < 3; i++) {
  grid[i] = [];
  for (var j = 0; j <3; j++) {
    grid[i][j] = {
      x: i*200,
      y: j*200,
    }
  }
}




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





//need to make grid break up image
//randomize puzzles
//var scramble = [];





//puzzle pcs are inside flexbox

//let user know when they win












