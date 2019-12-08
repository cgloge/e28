import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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