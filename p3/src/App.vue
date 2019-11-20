<template>
    <div id='app'>
        <img id='logo' alt='Siete logo' src='./assets/images/siete-logo.png' />

        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link exact :to='{ name: link }'>
                        {{ link }}
                        <span v-if='link == "favorite"'>({{ sharedState.favoriteCount }})</span>
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
            links: ['recipes', 'favorite recipes'],
            sharedState: app.store
        };
    },
    mounted() {
        this.favorite = new app.Favorite();
        app.store.favoriteCount = this.favorite.count();
    }
};
</script>

<style lang='scss'>
@import './assets/css/recipes.scss';
</style>
