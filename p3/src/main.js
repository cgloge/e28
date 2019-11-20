import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import RecipesPage from './components/pages/RecipesPage.vue';
import HomePage from './components/pages/HomePage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import RecipePage from './components/pages/RecipePage.vue';
import FavoritePage from './components/pages/FavoritePage.vue';

Vue.use(VueRouter);
Vue.config.recipeionTip = false

const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/recipes', component: RecipesPage, name: 'recipes' },
    { path: '/recipe/:id', component: RecipePage, name: 'recipe', props: true },
    { path: '/categories', component: CategoriesPage, name: 'categories' },
    { path: '/favorites', component: FavoritePage, name: 'favorites' }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')
