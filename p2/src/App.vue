<template>
  <div id="app">
    <h1>Find the hidden character</h1>
    <p>Click on the button with the unique character before the clock runs out.</p> 
    <Countdown v-on:countdown-complete='setGameOver()'>
    </Countdown>
    <p><b>Total Points:</b> {{ points }} </p>
    <!-- Dynamic table -->
        <table v-if="gameOver == false" id="grid">
            <tbody>
                <tr v-for="(row, i) in rows" :key="i"> 
                  <td v-for="(col, j) in columns" :key="j">
                    <!-- TODO: Add on-click event -->
                    <button v-on:click="scoreClick($event)" type="button" :id=row[col]>{{row[col]}}</button>
                </td> 
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import Countdown from './components/Countdown.vue'

export default {
  name: 'app',
  components: {
    Countdown
  },
  data: function() {
    return {
        // Starting game state
        points: 0,
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
    }
  },
  methods: {
    setGameOver(){
      this.gameOver = true;
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
        return this.rows
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
            // TODO Clear timer
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
        }
    },
    watch: {

    },
    mounted: function () {
        this.generateGrid(this.totalRows);
    }
}
</script>

<style>
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  font-size: 14pt;
  width: 40px;
  height: 40px;
  margin: 10px;
}
#grid{
    margin-left:auto; 
    margin-right:auto;
}
.secondsLeft{
    font-weight: bold;
    color: grey;
    font-size: 20pt;
}
.gameOver {
    color: red;
}
.playAgain {
    width: 60pt;
}
</style>
