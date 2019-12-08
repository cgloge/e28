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
        recipes: [],
    },
    mutations: {
        setIngredientCount(state, payload) {
            state.ingredientCount = payload;
        },
        updateIngredientCount(state, payload) {
            state.ingredientCount += payload;
        }
    }
})