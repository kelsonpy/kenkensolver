var solvedPuzzle_1 = [
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1]
]

var solvePuzzlesContainer = [solvedPuzzle_1]

var targeScore_1 = [

]

var activePuzzle = [0]

//
document.getElementById('submitPuzzle').addEventListener('click', function(){
    var puzzleSize = 3;
    var userSolution = [];

    for (var row = 0; row < puzzleSize; row++) {
        userSolution[row] = []; 
        for (var col = 0; col < puzzleSize; col++) {
            var cellIndex = row * puzzleSize + col + 1;
            var inputValue = document.querySelector(`.parent div:nth-child(${cellIndex}) input`).value;
            userSolution[row].push(parseInt(inputValue, 10) || 0); // Parses the input value as a number, defaults to 0 if empty
        }
    }

    console.log(userSolution);
});

function checkSolution(user, defaultPuzzle){

    for (var col = 0; col < userSolution)
}