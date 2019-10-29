<template>
  <div class="countdown">
        <div class = "secondsLeft" v-bind:class='{ gameOver : seconds == 0}'>{{ seconds }}</div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            seconds: 10
        };
    },
    methods: {
        countdown: function() {  
            const self = this;          
            this.timer = setInterval(function() {
                self.seconds--;
                if (self.seconds <= 0) {
                    //Fire event and clear the interval
                    self.$emit('countdown-complete');
                    clearInterval(self.timer); 
                }
            }, 1000);
        },
    },
    watch: {
    },
    mounted: function () {
        this.countdown();
    },
    template: "#countdown"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#countdown{
    font-size: 40px;
    font-weight: bold;
    color: grey;
}

</style>
