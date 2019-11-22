<template>
    <div id='recipe-page' v-if='recipe'>
        <h1>{{ recipe.name }}</h1>
        <img
            v-if='recipe.id'
            class='recipe-thumb'
            :alt='"Recipe image of  " + recipe.name'
            :src='"./../../assets/images/recipes/" + recipe.id + ".jpg"'
        />
        <p class='description'>{{ recipe.description }}</p>
        <div class='servings'>Servings: {{ recipe.servings }}</div>
        <div class='cook-time'>Cook time: {{ recipe.time + ' mins' }}</div>

        <button @click='addToFavorites(recipe.id)'>Favorite Recipe </button>

        <transition name='fade'>
            <div class='alert' v-if='addAlert'>Added!</div>
        </transition>

        <b>Ingredients:</b>
        <ul class='cleanList'>
            <li v-for='item in recipe.ingredients' :key='item.ingredient'>
                <button @click='addToIngredients(item.ingredient, item.qty)' class ='ingredient'>
                {{ item.qty + ' ' + item.unit + ' ' + item.ingredient }}
                <img src='./../../assets/images/shopping-list.png'>
                </button>
                
            </li>
        </ul>

        <router-link :to='"/recipes"'>&larr; Return to all recipes</router-link>
    </div>
</template>

<script>
import * as app from './../../app.js';

export default {
    name: 'RecipePage',
    props: ['id'],
    data: function() {
        return {
            recipe: null,
            addAlert: false,
        };
    },
    mounted() {
        app.axios
            .get(app.config.api + '/recipes/' + this.id)
            .then(response => {
                this.recipe = response.data;
            });
    },
    methods: {
        addToFavorites: function(recipeId) {
            let favorite = new app.Favorite();
            favorite.add(recipeId);

            app.store.favoriteCount = favorite.count();

            this.addAlert = true;

            setTimeout(() => (this.addAlert = false), 2000);
        },
        addToIngredients: function(ingredientName, ingredientQty) {
            let ingredient = new app.Ingredient();
            ingredient.add(ingredientName, ingredientQty);

            app.store.ingredientCount = ingredient.count();

            this.addAlert = true;

            setTimeout(() => (this.addAlert = false), 2000);
        },
        addToShoppingList: function(ingredientName) {
            let ingredient = new app.Ingredient();
            ingredient.add(ingredientName);

            app.store.ingredientCount = ingredient.count();

            setTimeout(() => (this.addAlert = false), 2000);
        }
    }
};
</script>

<style scoped>
</style>