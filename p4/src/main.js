import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import RecipesPage from './components/pages/RecipesPage.vue';
import RecipePage from './components/pages/RecipePage.vue';
import FavoritePage from './components/pages/FavoritePage.vue';
import ShoppingListPage from './components/pages/ShoppingListPage.vue';
import CreateRecipePage from './components/pages/CreateRecipePage.vue';
import Vuelidate from 'vuelidate'

Vue.use(VueRouter);
Vue.use(Vuelidate)
Vue.config.recipeionTip = false

const routes = [
    { path: '/', component: RecipesPage, name: '' },
    { path: '/recipes', component: RecipesPage, name: 'recipes' },
    { path: '/recipe/:id', component: RecipePage, name: 'recipe', props: true },
    { path: '/favorites', component: FavoritePage, name: 'favorite recipes' } ,
    { path: '/shopping-list', component: ShoppingListPage, name: 'shopping list' },
    { path: '/create-recipe', component: CreateRecipePage, name: 'create recipe' }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    store: store,
    router: router,
    render: h => h(App),
}).$mount('#app')
