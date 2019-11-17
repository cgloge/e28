<template>
    <div id='featured'>
        <h2>Featured Recipes</h2>
        <ul class='cleanList'>
            <li v-for='recipe in featuredRecipes' :key='recipe.id'>{{ recipe.name }}</li>
        </ul>
    </div>
</template>

<script>
// ToDo: Refactor this component so it gets recipes from the API rather than recipes.js
import { recipes } from './../recipes.js';

export default {
    name: 'ShowFeatured',
    props: ['category'],
    computed: {
        featuredRecipes: function() {
            function isMatch(recipe) {
                return recipe.categories.includes(this);
            }
            return this.recipes.filter(isMatch, this.category);
        }
    },
    data: function() {
        return {
            recipes: recipes
        };
    }
};
</script>

<style scoped>
</style>