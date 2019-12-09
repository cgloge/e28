<template>
    <div id='favorite-page'>
        <h1>Your Favorite Recipes</h1>

        <div v-if='items.length == 0'>No items</div>

        <ul v-else-if='recipes.length > 0' class='cleanList'>
            <li v-for='item in items' :key='item.id'>
                <button @click='removeFromFavorite(item.id)'>Remove</button>
                {{ getRecipeDetails(item.id)['name'] }}
            </li>
        </ul>
    </div>
</template>

<script>
import * as app from './../../app.js';

export default {
    name: 'FavoritePage',
    data: function() {
        return {
            items: [],
            favorite: null
        };
    },
    methods: {
        getRecipeDetails(recipeId) {
            return this.recipes.find(({ id }) => id === recipeId);
        },
        removeFromFavorite: function(recipeId) {
            this.favorite.remove(recipeId);

            this.$store.commit('updateFavoriteCount', -1);
        }
    },
    mounted() {
        this.favorite = new app.Favorite();
        this.items = this.favorite.getItems();
    },
    computed: {
        recipes: function() {
            return this.$store.state.recipes;
        }
    }
};
</script>
