var winningOptions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

var playBoard = document.querySelectorAll('.cell');
var resetBtn = document.querySelector('#reset-button');
var startBtn = document.querySelector('#start-button');
var isPlayer2Playing = false;
var counter1 = 0;
var counter2 = 0;
const player1Value = 'X';
const player2Value = 'O';

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', clearBoard);

//Game starts by clicking the "Start" button and invoking the startGame() function.
function startGame() {
    document.querySelector('.mainBoard').style.backgroundImage = 'linear-gradient(62deg, #23211f 0%, #ea0909 100%)';
    var firstPlayerName = document.querySelector('#player1').value;
    var secondPlayerName = document.querySelector('#player2').value;

//player input field cannot be empty to start the game
    if (firstPlayerName && secondPlayerName !== "") {
        document.querySelector('#first-player-name').textContent = firstPlayerName;
        document.querySelector('#second-player-name').textContent = secondPlayerName;

        displayPlayerName(firstPlayerName);

        for (let i = 0; i < playBoard.length; i++) {
            playBoard[i].addEventListener('click', function(event) {
                    // var currentPlayerValue = isPlayer2Playing ? player2Value : player1Value;
                    var currentPlayerValue;
                    var currentPlayerLogo;

                    if(isPlayer2Playing) {
                        currentPlayerValue = player2Value;
                    }
                    else {
                        currentPlayerValue = player1Value;
                    }
                    // var currentPlayerLogo = (currentPlayerValue === player1Value ? 'B' : 'S' )
                    if (currentPlayerValue === player1Value) {
                        currentPlayerLogo = 'B';
                    }
                    else {
                        currentPlayerLogo = 'S';    
                    }
                    event.target.textContent = currentPlayerLogo;
                    event.target.setAttribute('data-cell-index', currentPlayerValue);
                    // isPlayer2Playing = !isPlayer2Playing;

                    displayPlayerName(isPlayer2Playing ? firstPlayerName : secondPlayerName);
                setTimeout(() => {
                        if (checkWin(currentPlayerValue)) {
                            // alert(currentPlayerValue + " wins");
                            if (currentPlayerValue === player1Value) {
                                document.querySelector('.winner-name').textContent = firstPlayerName + ": Team Batman Win's" ;
                            }
                            else {
                                document.querySelector('.winner-name').textContent = secondPlayerName + ": Team SuperMan Win's";
                            }
                            document.querySelector('#current-player-name').textContent = "You nailed it";
                            for (var eachCell of playBoard) {
                                eachCell.textContent = "";
                                eachCell.setAttribute('data-cell-index', "");
                            }
                            // winnerDisplayBoard(currentPlayerValue);
                            scoreTracker(currentPlayerValue);
                            // clearBoard();
                        } else {
                            if (checkDraw()){
                                // alert('Draw!')
                                document.querySelector('.winner-name').textContent = "It's a Tie! Challenge again";
                                for (var eachCell of playBoard) {
                                    eachCell.textContent = "";
                                    eachCell.setAttribute('data-cell-index', "");
                                }
                                // tieMessage();
                                // clearBoard();
                            }
                        } 
                    }, 1500)
                    isPlayer2Playing = !isPlayer2Playing;
            })
        }
    }
}

function displayPlayerName(playerName) {
    var currentPlayerName = document.querySelector('#current-player-name');
    currentPlayerName.textContent = playerName + "'s turn";
}

function checkWin(currentPlayerValue) {
    if (playBoard[0].getAttribute('data-cell-index') === currentPlayerValue &&
    playBoard[1].getAttribute('data-cell-index') === currentPlayerValue && playBoard[2].getAttribute('data-cell-index') === currentPlayerValue) { 
        return true;
    }
    else if (playBoard[3].getAttribute('data-cell-index') === currentPlayerValue &&
    playBoard[4].getAttribute('data-cell-index') === currentPlayerValue && playBoard[5].getAttribute('data-cell-index') === currentPlayerValue) {
        return true;
    }
    else if (playBoard[6].getAttribute('data-cell-index') === currentPlayerValue &&
    playBoard[7].getAttribute('data-cell-index') === currentPlayerValue && playBoard[8].getAttribute('data-cell-index') === currentPlayerValue) {
        return true;
    }
    else if (playBoard[0].getAttribute('data-cell-index') === currentPlayerValue &&
    playBoard[3].getAttribute('data-cell-index') === currentPlayerValue && playBoard[6].getAttribute('data-cell-index') === currentPlayerValue) {
        return true;
    }
    else if (playBoard[1].getAttribute('data-cell-index') === currentPlayerValue &&
    playBoard[4].getAttribute('data-cell-index') === currentPlayerValue && playBoard[7].getAttribute('data-cell-index') === currentPlayerValue) {
        return true;
    }
    else if (playBoard[2].getAttribute('data-cell-index') === currentPlayerValue &&
    playBoard[5].getAttribute('data-cell-index') === currentPlayerValue && playBoard[8].getAttribute('data-cell-index') === currentPlayerValue) {
        return true;
        
    }
    else if (playBoard[0].getAttribute('data-cell-index') === currentPlayerValue &&
    playBoard[4].getAttribute('data-cell-index') === currentPlayerValue && playBoard[8].getAttribute('data-cell-index') === currentPlayerValue) {
        return true;
    }
    else if (playBoard[2].getAttribute('data-cell-index') === currentPlayerValue &&
    playBoard[4].getAttribute('data-cell-index') === currentPlayerValue && playBoard[6].getAttribute('data-cell-index') === currentPlayerValue) {
        return true;
    }
}
    

function checkDraw() {
    for (var i = 0; i < playBoard.length; i++) {
        if (playBoard[i].getAttribute('data-cell-index') === "") {
            return false;
        }
    }
    return true;
}

function clearBoard() {
    for (var eachCell of playBoard) {
        eachCell.textContent = "";
        eachCell.setAttribute('data-cell-index', "");
    }
    document.querySelector('#current-player-name').textContent = "Are you Ready?";
    document.querySelector('.winner-name').textContent = "Make Your Superhero Proud!";
    document.querySelector('#player1').value = "";
    document.querySelector('#player2').value = "";
    document.querySelector('#first-player-name').textContent = "";
    document.querySelector('#second-player-name').textContent = "";
    document.querySelector(".bat-man-score").textContent = "Score";
    document.querySelector(".superman-score").textContent = "Score";
    document.querySelector('.mainBoard').style.backgroundImage = "";
}

function scoreTracker(currentPlayerValue) {
    var scoreCount = ((currentPlayerValue === player1Value) ?  counter1++ : counter2++);
    document.querySelector(".bat-man-score").textContent = `Won ${counter1} times!`; 
    document.querySelector(".superman-score").textContent = `Won ${counter2} times!`;   
}



// function winnerDisplayBoard(currentPlayerValue) {
//     if (currentPlayerValue === player1Value) {
//         document.querySelector('.winner-name').textContent = firstPlayerName + ": Team Batman Win's" ;
//     }
//     else {
//         document.querySelector('.winner-name').textContent = secondPlayerName + ": Team SuperMan Win's";
//     }
//     document.querySelector('#current-player-name').textContent = "You nailed it";
    
//     for (var eachCell of playBoard) {
//         eachCell.textContent = "";
//         eachCell.setAttribute('data-cell-index', "");
//     }
// }

// function tieMessage() {
//         document.querySelector('.winner-name').textContent = "It's a Tie! Challenge again";
//         for (var eachCell of playBoard) {
//             eachCell.textContent = "";
//             eachCell.setAttribute('data-cell-index', "");
//         }

// }



