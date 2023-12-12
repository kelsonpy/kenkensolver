// solve KenKen puzzle, w/ unique solution 
var solvedPuzzle_1 = [
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1]
]

// Runs if user clicks "submit puzzle"
document.getElementById('submitPuzzle').addEventListener('click', function(){
    //if all cells have been verified using the check puzzle button, then return a prompt to the user indicating the puzzle has been completed
    if (checkPuzzle == true){
        if (isCorrect) {
            var returnToMain = confirm("Congratulations, you completed the puzzle! Would you like to play again?");
        
            if (returnToMain) {
                window.location.href = 'index.html';
            }
        } else {
            alert("Incorrect, please try again");
        }
    }
    else{
    }

    //stores the user's input in an array to compare with solvedPuzzle_1
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

// compares the user input with the valid input
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






//provides access to each cell
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');
var input5 = document.getElementById('input5');
var input6 = document.getElementById('input6');
var input7 = document.getElementById('input7');
var input8 = document.getElementById('input8');
var input9 = document.getElementById('input9');





document.getElementById('check').addEventListener('click', checkPuzzle);

//calls the functions that check the validity of each cell. A visual cue is provided if the cell is correct--the cell turns lightgreen
function checkPuzzle() {
    var result1 = checkBox1();
    var result2 = checkBox2();
    var result3 = checkBox3();

    var result4 = checkBox4();
    var result5 = checkBox5();
    var result6 = checkBox6();

    var result7 = checkBox7();
    var result8 = checkBox8();
    var result9 = checkBox9();

    if (result1 && result2 && result3 && result4 && result5 && result6 && result7 && result8 && result9) {
        alert("All cells are correct!");
        return true;
    }
}


//nasty code duplication proceeds: each checkBox function checks if the input matches the cells true value.
function checkBox1(){
    var inputValue = parseInt(input1.value, 10); 

  if (inputValue === 1) {
    input1.style.backgroundColor = "lightgreen"; 
    return 1;
    } 
  else return 0;
}  

    function checkBox2(){
 var inputValue = parseInt(input2.value, 10); 

  
  if (inputValue === 2) {
    input2.style.backgroundColor = "lightgreen"; 
    return 1;
    } 
  else return 0;
}   

function checkBox3(){
 var inputValue = parseInt(input3.value, 10); 

  
  if (inputValue === 3) {
    input3.style.backgroundColor = "lightgreen";
    return 1; 
    } 
  else return 0;
}

function checkBox4(){
 var inputValue = parseInt(input4.value, 10);

  
  if (inputValue === 3) {
    input4.style.backgroundColor = "lightgreen"; 
    return 1;
    } 
  else return 0;
}

function checkBox5(){
 var inputValue = parseInt(input5.value, 10); 

 
  if (inputValue === 1) {
    input5.style.backgroundColor = "lightgreen";
    return 1;
  } 
  else return 0;
}

function checkBox6(){
 var inputValue = parseInt(input6.value, 10); 

 
  if (inputValue === 2) {
    input6.style.backgroundColor = "lightgreen"; 
    return 1;
  } 
  else return 0;
}

function checkBox7(){
 var inputValue = parseInt(input7.value, 10); 

  
  if (inputValue === 2) {
    input7.style.backgroundColor = "lightgreen"; 
    return 1;
    } 
  else return 0;
}

function checkBox8(){
 var inputValue = parseInt(input8.value, 10); 

  
  if (inputValue === 3) {
    input8.style.backgroundColor = "lightgreen"; 
    return 1;
    } 
  else return 0;
}

function checkBox9(){
 var inputValue = parseInt(input9.value, 10); 

  
  if (inputValue === 1) {
    input9.style.backgroundColor = "lightgreen"; 
    return 1;
    } 
  else return 0;
}






