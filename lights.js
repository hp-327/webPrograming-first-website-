const height = 5
const width = 5
let isRunning = false

function createGrid () {
  const squares = document.querySelectorAll('.lightsout-square')
  for (let i = 0; i < squares.length; i++) {
    const row = Math.floor(i / height)
    const col = i % height
    squares[i].style.gridRowStart = row + 1
    squares[i].style.gridColumnStart = col + 1
  }
}

function findSquare (row, col) {
  return document.querySelector(".lightsout-square" +
                                `[style*="grid-row-start: ${row}"]` +
                                `[style*="grid-column-start: ${col}"]`)
}

function getAdjacentSquares (row, col) {
  return [
    findSquare(row, col),
    findSquare(row-1, col),
    findSquare(row+1, col),
    findSquare(row, col-1),
    findSquare(row, col+1)
  ].filter((sqr) => sqr !== null)
}

function toggleSquare (row, col) {
  findSquare(row, col).classList.toggle('js-lightsout-square-on')
}

createGrid()


 function setup () {
    document.getElementById("lightsout-newgame-btn").addEventListener("click", function(){startGame()})
    document.getElementById("11").addEventListener("click", function(){buttonClick(1,1)})
    document.getElementById("12").addEventListener("click", function(){buttonClick(1,2)})
    document.getElementById("13").addEventListener("click", function(){buttonClick(1,3)})
    document.getElementById("14").addEventListener("click", function(){buttonClick(1,4)})
    document.getElementById("15").addEventListener("click", function(){buttonClick(1,5)})
    document.getElementById("21").addEventListener("click", function(){buttonClick(2,1)})
    document.getElementById("22").addEventListener("click", function(){buttonClick(2,2)})
    document.getElementById("23").addEventListener("click", function(){buttonClick(2,3)})
    document.getElementById("24").addEventListener("click", function(){buttonClick(2,4)})
    document.getElementById("25").addEventListener("click", function(){buttonClick(2,5)})
    document.getElementById("31").addEventListener("click", function(){buttonClick(3,1)})
    document.getElementById("32").addEventListener("click", function(){buttonClick(3,2)})
    document.getElementById("33").addEventListener("click", function(){buttonClick(3,3)})
    document.getElementById("34").addEventListener("click", function(){buttonClick(3,4)})
    document.getElementById("35").addEventListener("click", function(){buttonClick(3,5)})
    document.getElementById("41").addEventListener("click", function(){buttonClick(4,1)})
    document.getElementById("42").addEventListener("click", function(){buttonClick(4,2)})
    document.getElementById("43").addEventListener("click", function(){buttonClick(4,3)})
    document.getElementById("44").addEventListener("click", function(){buttonClick(4,4)})
    document.getElementById("45").addEventListener("click", function(){buttonClick(4,5)})
    document.getElementById("51").addEventListener("click", function(){buttonClick(5,1)})
    document.getElementById("52").addEventListener("click", function(){buttonClick(5,2)})
    document.getElementById("53").addEventListener("click", function(){buttonClick(5,3)})
    document.getElementById("54").addEventListener("click", function(){buttonClick(5,4)})
    document.getElementById("55").addEventListener("click", function(){buttonClick(5,5)})
}

function startGame()
   {
    isRunning = true;
    randomizeSquares()
   }

function randomizeSquares()
   {
    for( var i = 1; i< 6; i++ )
      {
        for( var j = 1; j < 6; j++ )
          {
            if ( getRandomInt(2) == 1 )
              {
                toggleSquareAndAdjacentSquares(i, j)
              }
          }
      }
   }

function checkWin()
    {
      var hasWon = true;
      for( var i = 1; i< 6; i++ )
        {
          for( var j = 1; j < 6; j++ )
            {
             if(findSquare(i,j).classList.contains("js-lightsout-square-on"))
                {
                  hasWon = false;
                }
            }
        }
        if (hasWon === true)
        {
              alert("You Are Victorious!");
        }
    }

function buttonClick(row,col)
    {
      if( isRunning === true )
         {
         toggleSquareAndAdjacentSquares(row,col)
         checkWin()
         }
    }

function toggleSquareAndAdjacentSquares(row,col)
   {
    toggleSquare(row, col)
    if( (row-1) !== 0 )
       {
        toggleSquare(row-1, col)
       }
    if( (row+1) !== 6 )
       {
        toggleSquare(row+1, col)
       }
    if( (col-1) !== 0 )
       {
        toggleSquare(row, col-1)
       }
    if( (col+1) !== 6 )
        {
        toggleSquare(row, col+1)
        }
   }

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

setup()
