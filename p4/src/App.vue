<template>
    <div id='app'>
        <img id='logo' alt='Siete logo' src='./assets/images/siete-logo.png' />

        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link exact :to='{ name: link }'>
                        {{ link }}
                        <span v-if='link == "favorite recipes"'>({{ sharedState.favoriteCount }})</span>
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
            links: ['recipes', 'favorite recipes', 'shopping list'],
            sharedState: app.store
        };
    },
    computed: {
        ingredientCount: function() {
            return this.$store.state.ingredientCount;
        }
    },
    mounted() {
        this.favorite = new app.Favorite();
        this.ingredient = new app.Ingredient();
        app.store.favoriteCount = this.favorite.count();
        
        //app.store.ingredientCount = this.ingredient.count();

        // Invoke the `setIngredientCount` mutation, passing the ingredient count as the payload
        this.$store.commit('setIngredientCount', this.ingredient.count());
    }
};
</script>

<style lang='scss'>
@import './assets/css/recipes.scss';
</style>
