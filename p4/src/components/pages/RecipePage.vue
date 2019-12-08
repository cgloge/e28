<template>
    <div id='recipe-page' v-if='recipe'>
        <div class='recipe-thumb'>
            <img
                v-if='recipe.id'
                :alt='"Recipe image of  " + recipe.name'
                :src='"./../../assets/images/recipes/" + recipe.id + ".jpg"'
            />
        </div>
        <div class='recipe-overview'>
            <h1>
                {{ recipe.name }}
                <button class="favorite" @click='addToFavorites(recipe.id)'>
                     <img src='./../../assets/images/favorite.png'>
                </button>
            </h1>
            <div class='alert-box'>
                <transition name='fade'>
                    <div class='alert' v-if='addAlert'>Added!</div>
                </transition>
            </div>
            <p class='description'>{{ recipe.description }}</p>
            <div class='servings'>
                {{ recipe.servings }}
            </div>
            <div class='cook-time'>
                {{ recipe.time}}
                <br />
                <span>mins</span>
            </div>

        </div>
        <div id='recipe-details'>
            <div id='directions'>
                <h1>Directions:</h1>
                <ol >
                    <li v-for='item in recipe.directions' :key='item.directions'>
                        <span>{{ item }}</span>
                    </li>
                </ol>
            </div>
            <div id='ingredient-list'>
                <h1>Ingredients:</h1>
                <div v-for='item in recipe.ingredients' :key='item.ingredient'>
                    <button @click='addToShoppingList(item.ingredient, 1)' class ='ingredient'>
                    {{ item.qty + ' ' + item.unit + ' ' + item.ingredient }}
                    <img src='./../../assets/images/shopping-list.png'>
                    </button>  
                </div>
            </div>
        </div>
        <div class="all-recipes">
            <router-link :to='"/recipes"'>&larr; Return to all recipes</router-link>
        </div>
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

            //app.store.favoriteCount = favorite.count();
            this.$store.commit('updateFavoriteCount', favorite.count());

            this.addAlert = true;

            setTimeout(() => (this.addAlert = false), 2000);
        },
        addToShoppingList: function(ingredientName, ingredientQty) {
            let ingredient = new app.Ingredient();
            ingredient.add(ingredientName, ingredientQty);

            //app.store.ingredientCount = ingredient.count();
            this.$store.commit('updateIngredientCount', ingredientQty);
        }
    }
};
</script>

<style scoped>
</style>