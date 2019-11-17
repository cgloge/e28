<template>
    <div id='cart-page'>
        <h1>Your Cart</h1>

        <div v-if='items.length == 0'>No items</div>

        <ul v-else-if='recipes.length > 0' class='cleanList'>
            <li v-for='item in items' :key='item.id'>
                <button @click='removeFromCart(item.id)'>Remove</button>
                {{ item.quantity }} x {{ getRecipeDetails(item.id)['name'] }}
            </li>
        </ul>
    </div>
</template>

<script>
import * as app from './../../app.js';

export default {
    name: 'CartPage',
    data: function() {
        return {
            items: [],
            cart: null,
            recipes: []
        };
    },
    methods: {
        getRecipeDetails(recipeId) {
            return this.recipes.find(({ id }) => id === recipeId);
        },
        removeFromCart: function(recipeId) {
            this.cart.remove(recipeId);

            app.store.cartCount = this.cart.count();
        }
    },
    mounted() {
        this.cart = new app.Cart();

        this.items = this.cart.getItems();

        // It would be more ideal if we could ping our server-api for *just*
        // the recipes that are in our cart. However, we don't have that option
        // with our Mock API, so we’re fetching all the recipe data.
        this.recipes = app.axios
            .get(app.config.api + 'recipes')
            .then(response => (this.recipes = response.data));
    }
};
</script>
