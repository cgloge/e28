let app = new Vue({
    el: '#app',
    data: {
        // Starting game state
        points: 0,
        seconds: 10,
        message: '',
        // Starting grid size
        totalRows: 6,
        constantChar: 'X',
        // Hidden character
        hiddenChar: String.fromCharCode(65+Math.floor(Math.random() * 22)),
        // Iterables for table generation
        i: 0,
        j: 0,
        // Grid data
        rows: [],
        gameOver: false,
    },
    methods: {
        // Countdown clock that gives user 10 seconds to find the hidden character
        countdown: function () {
			timer = setInterval(() => {
                this.seconds--;
                if (this.seconds <= 0) {
                    clearInterval(timer);
                }
			}, 1000);
        },
        // Dynamically create a grid of buttons Xs with 1 random character randomly placed in the grid
        generateGrid: function (totalRows) {
            let i = 0;
            let totalCols = 9;
            let randRow = (Math.floor(Math.random() * totalRows));
            let randCol = (Math.floor(Math.random() * totalCols));
            let rowChars = [];
            let hiddenChar = String.fromCharCode(65+Math.floor(Math.random() * 22));
            while (i < totalRows){
                rowChars = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"];
                if (i == randRow){
                    rowChars[randCol] = hiddenChar;
                }
                this.rows.push({ c0: rowChars[0], c1: rowChars[1], c2: rowChars[2], c3: rowChars[3], c4: rowChars[4], c5: rowChars[5], c6: rowChars[6], c7: rowChars[7], c8: rowChars[8], c9: rowChars[9] });
                i++;
            }
        },
        scoreClick: function (e) {
            this.rows = [];
            // If the button value isn't an X, regen grid and add points
            if (e.target.id != "X") {
                this.points++; 
                this.totalRows++;
                this.generateGrid(this.totalRows);
                this.seconds = 10;
            }
            else{
                clearInterval(timer);
                this.seconds = "That wasn't the hidden character. Game Over!";
                this.gameOver = true;
            }
        },
    },
    computed: {
        // Pick a random row in the grid to place the hidden character in
        randRow: function () {
            return Math.floor(Math.random() * this.rows);
        },
         // Pick a random column in the grid to place the hidden character in
        randCol: function () {
            return Math.floor(Math.random() * this.cols);
        },
        columns: function columns() {
            if (this.rows.length == 0) {
              return [];
            }
            return Object.keys(this.rows[0])
        },
    },
    watch: {
    },
    mounted: function () {
        this.countdown();
        this.generateGrid(this.totalRows);
    }
});