// Track the total points
let points = 0;

// Starting grid size
rows = 6;
cols = 9;

// Create countdown clock
let seconds = document.getElementById("countdown").textContent;
let countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) {
        clearInterval(countdown);
        times_up();
    }
}, 1000);

// Alert the user that the game is over with their current level
function game_over(msg){
    alert(msg + "\nYou made it to level " + points + "\nClick 'OK' to replay...");
    // Reload the page when the "Replay" button is clicked
    location.reload();
    let game_over = true;
    clearInterval(countdown)
}

// End the game due to incorrect click
function misclick(){
    game_over("Game over! That wasn't the hidden character!");
}

// End the game due to time
function times_up(){
    game_over("Game over! You ran out of time!");
}

// Successful find
function success(){
    alert("You found the hidden character! Click to continue...");
    points++;
    document.getElementById("score").textContent = points;
    seconds = 10;

    // Remove old grid
    document.querySelector("table").innerHTML = "";

    // Make grid taller;
    rows ++;

    // Create new grid
    generateGrid(table, rows, cols);

}

// Dynamically create a grid of buttons Xs with 1 random character randomly placed in the grid
function generateGrid(table, rows, columns) {
    //Make the default character X
    let constant_char = "X";

    //Randomly generate a character from A-W
    let hidden_char = String.fromCharCode(65+Math.floor(Math.random() * 22));

    //Randomly pick a row for our hidden character;
    let rand_row = (Math.floor(Math.random() * rows))

    //Randomly pick a column for our hidden character;
    let rand_col = (Math.floor(Math.random() * columns))

    let i = 0;
    while (i < rows){
    let row = table.insertRow();
    let j = 0;
    while (j < columns){
            let cell = row.insertCell();

            let btn = document.createElement("BUTTON");   
            if (i == rand_row && j == rand_col){
                btn.innerHTML = hidden_char;
                btn.id = "hidden_char";
                cell.appendChild(btn);
                document.getElementById("hidden_char").addEventListener("click", success);

            }
            else{
                btn.innerHTML = constant_char;
                btn.id = "btn_" + i + j;
                cell.appendChild(btn);
                document.getElementById(btn.id).addEventListener("click", misclick);
            }
            j++;

            
        }
        i++;
    }
}

let table = document.querySelector("table");
generateGrid(table, rows, cols);