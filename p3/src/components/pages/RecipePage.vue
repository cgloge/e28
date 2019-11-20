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

        <button @click='addToFavorites(recipe.id)'>Favorite Recipe </button>

        <transition name='fade'>
            <div class='alert' v-if='addAlert'>Added to favorite!</div>
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
        addToFavorites: function(recipeId) {
            let favorite = new app.Favorite();
            favorite.add(recipeId);

            app.store.favoriteCount = favorite.count();

            this.addAlert = true;

            setTimeout(() => (this.addAlert = false), 2000);
        }
    }
};
</script>

<style scoped>
</style>