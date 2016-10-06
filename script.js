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
// should be grid[[0,0 0,1, 0,2][1,0 1,1 1,2][2,0 2,1 2,2]]
var grid = [];

//what is this?
//creating x & y coordinates on the grid for each puzzle pc
// make each pc 200px b/c puzzle is 600px
for (var i = 0; i < 10; i++) {
  grid[i] = [];
  for (var j = 0; j <10; j++) {
    grid[i][j] = {
      x: i*200,
      y: j*200,
    }
  }
}

//create a <div> for every coordinate created up to 50x50px?
// $('.container').append(.innerHTML?)('<div>pc1</div>');

var puzPc = $('.puzzle');

//attach each div to coordinate
var assignCoord = function() {
  for (i = 0; i < grid.length; i++) {
    for(j = 0; j < grid.length[i]; j++) {
      $('.puzzle').css({
        'background-position' : grid[i][j].x grid[i][j].y
      })
    }
}


//need to make grid break up image
//randomize puzzles
//var scramble = [];





//puzzle pcs are inside flexbox

//let user know when they win












