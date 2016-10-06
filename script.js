// create blank array grid
// grid should hold 3 separate arrays with 3 into separated by comma
// create a for loop to pinpoint size or block for coordinate

document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');
}

//why?
//blank grid to store coordinates per puzzle pc
//that will be created by below nested for loop
// should be grid[[0,1 0,1, 0,2][1,0 1,1 1,2][2,0 2,1 2,2]]
grid = [];

//what is this?
//creating x & y coordinates on the grid for each puzzle pc
//e.g. 0,0  0,1  0,2  1,0  1,1  1,2
for (var i = 0; i < 3; i++) {
  grid[i] = [];
  for (var j = 0; j <3; j++) {
    grid[i][j] = {
      x: i * 50,
      y: j * 50
    }
  }
}

//need to make grid break up image
//randomize puzzles
//move pieces by clicking the image (will move to blank spot)
//can only move a block adjacent to the blank space

//how to move block into the blank space

//let user know when they win
