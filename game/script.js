var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);


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

            var btn = document.createElement("BUTTON");   
            if (i == rand_row && j == rand_col){
                btn.innerHTML = hidden_char;
                btn.id = "hidden_char";
                cell.appendChild(btn);

            }
            else{
                btn.innerHTML = constant_char;
                btn.id = "btn_" + i + j;
                cell.appendChild(btn);
            }
            j++;

            
        }
        i++;
        }
}

let table = document.querySelector("table");
generateGrid(table, 6, 9);


