<template>
    <div id='shopping-page'>
        <h1>Your Shopping List</h1>

        <ul v-if='items.length != 0' class='cleanList'>
            <li v-for='item in items' :key='item.id'>
                {{item.id }}
                <button @click='removeFromIngredients(item.id)'>Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
import * as app from './../../app.js';

export default {
    name: 'ShoppingListPage',
    data: function() {
        return {
            items: [],
            favorite: null,
            ingredients: []
        };
    },
    methods: {
        getIngredientDetails(ingredientName) {
            return this.ingredient.find(({ id }) => id === ingredientName);
        },
        removeFromIngredients: function(ingredientName) {
            this.ingredient.remove(ingredientName);

            app.store.ingredientCount = this.ingredient.count();
        }
    },
    mounted() {
        this.ingredient = new app.Ingredient();

        this.items = this.ingredient.getItems();
    }
};
</script>
