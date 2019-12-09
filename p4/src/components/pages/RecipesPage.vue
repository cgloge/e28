<template>
    <div id='recipes'>
        <h1>Easy, delicious, and extra share-able recipes!</h1>
        <show-recipe v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></show-recipe>
        <!-- Dynamic table -->
    </div>
</template>

<script>
import ShowRecipe from './../ShowRecipe.vue';

export default {
    name: 'RecipesPage',
    components: { ShowRecipe },
    data: function() {
        return {
        };
    },
    computed: {
        recipes: function() {
            return this.$store.state.recipes;
        }
    }
};
</script>

<style scoped>
</style>