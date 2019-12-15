<template>
    <div id='app'>
        <img id='logo' alt='Siete logo' src='./assets/images/siete-logo.png' />

        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link exact :to='{ name: link }'>
                        {{ link }}
                        <span v-if='link == "favorite recipes"'>({{ favoriteCount }})</span>
                        <span v-if='link == "shopping list"'>({{ ingredientCount }})</span>
                    </router-link>
                </li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
import * as app from './app.js';

export default {
    name: 'app',
    components: {},
    data: function() {
        return {
            links: ['recipes', 'favorite recipes', 'shopping list', 'create recipe'],
            sharedState: app.store
        };
    },
    computed: {
        favoriteCount: function() {
            return this.$store.state.favoriteCount;
        },
        
        ingredientCount: function() {
            return this.$store.state.ingredientCount;
        },

        jsonLoaded: function() {
            return this.$store.state.jsonLoaded;
        }
    },
    mounted() {
        this.favorite = new app.Favorite();
        this.ingredient = new app.Ingredient();

         // Invoke the 'setIngredientCount' and 'setFavoriteCount' mutations, passing the ingredient / favorite count as the payload
        this.$store.commit('setFavoriteCount', this.favorite.count());
        this.$store.commit('setIngredientCount', this.ingredient.count());
        this.$store.commit('setJsonLoaded', this.jsonLoaded);

        // Dispatch the recipes from the recipes API to local storage
        this.$store.dispatch('setRecipes');
    }
};
</script>

<style lang='scss'>
@import './assets/css/recipes.scss';
</style>
