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
        <div class='price'>${{ recipe.price }}</div>

        <button @click='addToCart(recipe.id)'>Add to cart</button>

        <transition name='fade'>
            <div class='alert' v-if='addAlert'>Your cart has been updated!</div>
        </transition>

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
            addAlert: false
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
        addToCart: function(recipeId) {
            let cart = new app.Cart();
            cart.add(recipeId);

            app.store.cartCount = cart.count();

            this.addAlert = true;

            setTimeout(() => (this.addAlert = false), 2000);
        }
    }
};
</script>

<style scoped>
</style>