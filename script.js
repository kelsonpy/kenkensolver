// Function to initialize the puzzle grid

// Array of completed Ken Ken puzzles
// Define two sets of puzzles
const puzzles1 = [
    [[1, 2, 3, 4, 5], [2, 3, 4, 5, 1], [3, 4, 5, 1, 2], [4, 5, 1, 2, 3], [5, 1, 2, 3, 4]],
    // Add more puzzles as needed
];



const puzzles2 = [
    [[4, 3, 1], [5, 1, 2], [1, 4, 3]],
    // Add more puzzles as needed
];






const PuzzlesArray = [puzzles1,puzzles2]
let puzzles = puzzles1; // Start with the first set of puzzles
let currentPuzzle = 0;





// Function to move to the next puzzle
function nextPuzzle() {
    const messageContainer = document.getElementById('message-container');
    messageContainer.style.display = 'none';

    const puzzleContainer = document.getElementById('puzzle-container');
    puzzleContainer.innerHTML = ''; // Clear the current puzzle grid

    // Toggle between puzzles1 and puzzles2
    puzzles = (puzzles === puzzles1) ? puzzles2 : puzzles1;

    // Initialize the new puzzle
    initPuzzle();
}








let pointer=0;
function neextPuzzle(pointer,PuzzlesArray){
    if(pointer<= PuzzlesArray-1){
        pointer++;
        const messageContainer = document.getElementById('message-container');
    messageContainer.style.display = 'none';
     const puzzleContainer = document.getElementById('puzzle-container');
    puzzleContainer.innerHTML = '';
    
    initPuzzle();

    }
}












function checkSolution() {
    const inputs = document.querySelectorAll('#puzzle-container input');
    let isCorrect = true;

    inputs.forEach(input => {
        const inputValue = input.value.trim();
        const solutionValue = input.dataset.solution.toString();

        if (inputValue !== solutionValue) {
            isCorrect = false;
        }
    });

    const messageContainer = document.getElementById('message-container');
    const messageElement = document.getElementById('message');

    if (isCorrect) {
        messageElement.innerText = 'Congratulations! Puzzle solved!';
        messageContainer.style.display = 'block';
    } else {
        messageElement.innerText = 'Try again. Incorrect solution.';
        messageContainer.style.display = 'block';
    }
}


// Initialize the first puzzle on page load
document.addEventListener('DOMContentLoaded', initPuzzle);



function initPuzzle() {
    const puzzleContainer = document.getElementById('puzzle-container');
    const currentPuzzleArray = puzzles[currentPuzzle];

    for (let i = 0; i < currentPuzzleArray.length; i++) {
        for (let j = 0; j < currentPuzzleArray[i].length; j++) {
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('maxlength', '1');

            // Randomly decide whether to hide the value
            if (Math.random() > 0.20) {
                input.value = currentPuzzleArray[i][j].toString();
                input.setAttribute('readonly', 'readonly');
                input.classList.add('revealed');
            } else {
                input.dataset.solution = currentPuzzleArray[i][j];
            }

            puzzleContainer.appendChild(input);
        }
    }
}
