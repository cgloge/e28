import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import * as app from './../app.js';
Vue.use(Vuex)

// Initialize the VuexPresist library instance to persist date
const vuexPersist = new VuexPersist({
    key: 'app',
    storage: window.localStorage
  })

export default new Vuex.Store({
    // Enable the VuexPersist library (this allows state to be maintained on refresh / re-opening the browser)
    plugins: [vuexPersist.plugin],
    state: {
        ingredientCount: 0,
        favoriteCount: 0,
        jsonLoaded: false
    },
    // Mutations are used to change state
    // Mutations can not be directly called; you commit them, e.g. store.commit('setProducts')
    // Mutations receive the state as the first argument
    // Mutations can receive a second argument, the payload
    // Mutations must be synchronous
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        
        setFavoriteCount(state, payload) {
            state.favoriteCount = payload;
        },
        updateFavoriteCount(state, payload) {
            state.favoriteCount += payload;
        },

        setIngredientCount(state, payload) {
            state.ingredientCount = payload;
        },
        updateIngredientCount(state, payload) {
            state.ingredientCount += payload;
        },
        setJsonLoaded(state, payload) {
            state.jsonLoaded = payload;
        }
    },
    // Actions will not mutate state; instead they will commit mutations to mutate the state
    // Actions can contain arbitrary asynchronous operations
    // Actions receive a context object which exposes the same set of methods/properties on the store instance
    //     e.g. context.commit, context.state, context.getters
    // Actions are triggered with the store.dispatch method
    //     See App.vue for where this is dispatched ala this.$store.dispatch('setRecipes');
    actions: {
        setRecipes(context) {
            app.axios.get(app.config.api + 'recipes').then(response => {
                context.commit('setRecipes', response.data);
                context.commit('setJsonLoaded', true)
            });
        }
    },
    getters: {
        getRecipeById(state) {
            return function (id) {
                return state.recipes.find(recipe => recipe.id == id)
            }
        }
    }
})