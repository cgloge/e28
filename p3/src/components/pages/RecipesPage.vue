<template>
    <div id='recipes'>
        <h1>Easy, delicious, and extra share-able recipes!</h1>
        <show-recipe v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></show-recipe>
        <!-- Dynamic table -->
    </div>
</template>

<script>
import ShowRecipe from './../ShowRecipe.vue';

import * as app from './../../app.js';

export default {
    name: 'RecipesPage',
    components: { ShowRecipe },
    data: function() {
        return {
            recipes: null,
        };
    },
    mounted() {
        app.axios.get(app.config.api + 'recipes').then(response => {
            this.recipes = response.data;
        });
    }
};
</script>

<style scoped>
</style>