import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

// Initialize the VuexPresist library instance to persist date
const vuexPersist = new VuexPersist({
    key: 'siete-recipe-app',
    storage: window.localStorage
  })

Vue.use(Vuex)

export default new Vuex.Store({
    // Enable the VuexPersist library (this allows state to be maintained on refresh / re-opening the browser)
    plugins: [vuexPersist.plugin],
    state: {
        ingredientCount: 0,
        favoriteCount: 0
    },
    // Mutations are used to change state
    // Mutations can not be directly called; you commit them, e.g. store.commit('setProducts')
    // Mutations receive the state as the first argument
    // Mutations can receive a second argument, the payload
    // Mutations must be synchronous
    mutations: {
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
        }
    }
})