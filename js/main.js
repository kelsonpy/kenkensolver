var solvedPuzzle_1 = [
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1]
]


document.getElementById('submitPuzzle').addEventListener('click', function(){
    var puzzleSize = 3;
    var userSolution = [];

    for (var row = 0; row < puzzleSize; row++) {
        userSolution[row] = []; 
        for (var col = 0; col < puzzleSize; col++) {
            var cellIndex = row * puzzleSize + col + 1;
            var inputValue = document.querySelector(`.parent div:nth-child(${cellIndex}) input`).value;
            userSolution[row].push(parseInt(inputValue, 10) || 0); 
        }
    }

    console.log(userSolution);

    var isCorrect = checkSolution(userSolution, solvedPuzzle_1);
    
    if (isCorrect) {
        var returnToMain = confirm("Congratulations, you completed the puzzle! Would you like to play again?");
    
        if (returnToMain) {
            window.location.href = 'index.html';
        }
    } else {
        alert("Incorrect, please try again");
    }
});

function checkSolution(userSolution, defaultPuzzle) {
    if (userSolution.length !== defaultPuzzle.length) {
        return false;
    }
    for (var row = 0; row < userSolution.length; row++) {
        if (userSolution[row].length !== defaultPuzzle[row].length) {
            return false;
        }

        for (var col = 0; col < userSolution[row].length; col++) {
            if (userSolution[row][col] !== defaultPuzzle[row][col]) {
                return false; 
            }
        }
    }
    return true;
}
