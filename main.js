var winningOptions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

var playBoard = document.querySelectorAll('.cell');
var resetBtn = document.querySelector('#reset-button');
var startBtn = document.querySelector('#start-button');

resetBtn.addEventListener('click', clearBoard);
startBtn.addEventListener('click', startGame);

function startGame() {

    document.querySelector('.mainBoard').style.backgroundImage = 'linear-gradient(62deg, #23211f 0%, #ea0909 100%)';
    var firstPlayer = document.querySelector('#player1').value;
    var secondPlayer = document.querySelector('#player2').value;
    if (firstPlayer && secondPlayer !== "") {
        document.querySelector('#first-player-name').textContent = firstPlayer;
        document.querySelector('#second-player-name').textContent = secondPlayer;

        displayPlayerName(firstPlayer);

        const player1Value = 'X';
        const player2Value = 'O';
        var isPlayer2Playing = false;

        for (let i = 0; i < playBoard.length; i++) {
            playBoard[i].addEventListener('click', function(event) {
                if (event.target.textContent === "") {
                    var currentPlayerValue = isPlayer2Playing ? player2Value : player1Value;
                    var currentPlayerLogo = (currentPlayerValue === player1Value ?  'B' : 'S' )
                
                    event.target.textContent = currentPlayerLogo;

                    event.target.setAttribute('data-cell-index', currentPlayerValue);
                    isPlayer2Playing = !isPlayer2Playing;

                    displayPlayerName(isPlayer2Playing ? secondPlayer : firstPlayer);

                    setTimeout(() => {
                        if (checkWin(currentPlayerValue)) {
                            // alert(currentPlayerValue + " wins");
                            // document.querySelector('.winner-name').textContent = currentPlayerValue;
                            document.querySelector('.winner-name').textContent =(isPlayer2Playing ? (secondPlayer + ": Team SuperMan Win's") :(firstPlayer + ": Team Batman Win's"));
                            clearBoard();
                        } else {
                            if (checkDraw()){
                                alert('Draw!');
                                clearBoard();
                            }
                        }
                    }, 500);
                }
            })
        }
    }
}

function displayPlayerName(playerName) {
    var currentPlayerName = document.querySelector('#current-player-name');
    currentPlayerName.textContent = playerName + "'s turn";
}

function checkWin(currentPlayerValue) {
	return winningOptions.some(combination => {
		return combination.every(index => {
            return playBoard[index].getAttribute('data-cell-index') == currentPlayerValue;
		})
	})
}

function checkDraw() {
    return (Array.from(playBoard).every(cell => cell.getAttribute('data-cell-index') != ""));
}

function clearBoard() {
    for (var eachCell of playBoard) {
        eachCell.textContent = "";
        eachCell.setAttribute('data-cell-index', "");
    }
    document.querySelector('#current-player-name').textContent = "";
    document.querySelector('.winner-name').textContent = "Let the game choose the Real Superhero";
    document.querySelector('#current-player-name').textContent = "Get,Set & Gooo!!";
}

// function checkDraw() {
//     for(var i = 0; i < playBoard.length; i++) {
//     (playBoard[i].getAttribute('data-cell-index') != "");
//     }
// }









