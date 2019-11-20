<template>
    <div id='favorite-page'>
        <h1>Your Favorites</h1>

        <div v-if='items.length == 0'>No items</div>

        <ul v-else-if='recipes.length > 0' class='cleanList'>
            <li v-for='item in items' :key='item.id'>
                <button @click='removeFromFavorite(item.id)'>Remove</button>
                {{ item.quantity }} x {{ getRecipeDetails(item.id)['name'] }}
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
            favorite: null,
            recipes: []
        };
    },
    methods: {
        getRecipeDetails(recipeId) {
            return this.recipes.find(({ id }) => id === recipeId);
        },
        removeFromFavorite: function(recipeId) {
            this.favorite.remove(recipeId);

            app.store.favoriteCount = this.favorite.count();
        }
    },
    mounted() {
        this.favorite = new app.Favorite();

        this.items = this.favorite.getItems();

        // Future wishlist: change this to pull from true DB
        this.recipes = app.axios
            .get(app.config.api + 'recipes')
            .then(response => (this.recipes = response.data));
    }
};
</script>
