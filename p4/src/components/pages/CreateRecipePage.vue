<template>
    <div id='create-recipe'>
        <h1>Add a Recipe</h1>
        <form @submit.prevent='handleSubmit'>
            <div class='form-group'>
                <label for='name'>URL (4 or more characters)</label>
                <input
                    type='text'
                    :class='{ "form-input-error": $v.recipe.id.$error }'
                    id='id'
                    data-test='recipe-id-input'
                    v-model='$v.recipe.id.$model'
                />

                <div v-if='$v.recipe.id.$error'>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.recipe.id.required'
                    >recipe URL is required.</div>
                    <div
                        class='form-feedback-error'
                        v-else-if='!$v.recipe.id.minLength'
                    >recipe URL must be at least 4 characters long.</div>

                    <div
                        class='form-feedback-error'
                        v-else-if='!$v.recipe.id.doesNotExist'
                    >This URL is not available.</div>
                </div>

            </div>

            <div class='form-group'>
                <label for='name'>Name</label>
                <input
                    type='text'
                    :class='{ "form-input-error": $v.recipe.name.$error }'
                    data-test='recipe-name-input'
                    id='name'
                    v-model='$v.recipe.name.$model'
                />
                <div v-if='$v.recipe.name.$error'>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.recipe.name.required'
                    >recipe name is required.</div>
                </div>
            </div>

            <div class='form-group'>
                <label for='description'>Description</label>
                <textarea
                    data-test='recipe-description-textarea'
                    id='description'
                    v-model='recipe.description'
                ></textarea>
            </div>

            <div class='form-group'>
                <label for='servings'>Servings</label>
                <input
                    type='text'
                    data-test='recipe-servings-input'
                    id='servings'
                    v-model='recipe.servings'
                />
            </div>

            <div class='form-group'>
                <label for='time'>Cook Time (mins) </label>
                <input
                    type='text'
                    data-test='recipe-time-input'
                    id='time'
                    v-model='recipe.time'
                />
            </div>

            <div class='form-group'>
                <label for='categories'>Categories (Comma separated)</label>

                <input
                    type='text'
                    id='categories'
                    data-test='recipe-categories-input'
                    v-model='recipe.categories'
                />
            </div>

            <div class='form-group'>
                <label for='ingredients'>Ingredients (Comma separated)</label>

                <input
                    type='text'
                    id='ingredients'
                    data-test='recipe-ingredients-input'
                    v-model='recipe.ingredients'
                />
            </div>

   

            <button data-test='add-recipe-button' type='submit'>Add recipe</button>

            <div class='form-feedback-error' v-if='formHasErrors'>Please correct the above errors</div>
        </form>
    </div>
</template>

<script>
//import * as app from './../../app.js';
import { required, minLength } from 'vuelidate/lib/validators';
let recipe = {};
// If in dev mode, we'll pre-fill the recipe to make demo/testing easier
if (process.env.NODE_ENV == 'development') {
    recipe = {
        id: 'FuegoMeatloaf',
        name: 'Chipotle Fuego Turkey Meatloaf',
        description:
            'This Chipotle Fuego Turkey Meatloaf recipe is our homage to the belly-warming, winter classic that we love, but with a couple of new ingredient-twists! Baked with our Grain Free Fuego Tortilla Chips and our Chipotle Hot Sauce, this loaf is perfect for those who love a healthy dose of heat, and would rather spend all winter by the fireside. Serve with your grandma’s revered mashed potatoes, or momma’s green beans, and scarf down!',
        servings: 8,
        time: 70,
        categories: ["gluten free", "grain free", "soy free", "dairy free"],
        directions: ["Cut bacon into small pieces and render. Once crispy, separate from bacon fat.",
            "In a bowl, combine turkey, bacon, egg, and all seasonings.",
            "In a food processor, ground Fuego chips until fine. Add to turkey mixture.",
            "Form ground turkey mixture into a meatloaf and place in a pan lined with parchment.",
            "Combine Ketchup and chipotle hot sauce and pour over loaf.",
            "Bake at 375F for 45 mins.",
            "Slice, sprinkle chopped herbs over meatloaf and serve.",
            "Enjoy!"],
        ingredients: [" 2 lbs Ground Turkey", "1 T Garlic Powder", "1 t Cayeene Pepper"]
    };
} else {
    recipe = {
        id: '',
        name: '',
        description: '',
        servings: '',
        time: '',
        categories: [],
        ingredients: [{}]
    };
}
export default {
    name: 'createRecipePage',
    data: function() {
        return {
            recipe: recipe,
            formHasErrors: false
        };
    },
    validations: {
        recipe: {
            id: {
                required,
                minLength: minLength(4),
                doesNotExist(value) {
                    return !this.$store.getters.getRecipeById(value);
                }
            },
            name: {
                required
            }
        }
    },
    watch: {
        '$v.$anyError': function() {
            this.formHasErrors = this.$v.$anyError;
        }
    },
    methods: {
        handleSubmit: function() {
            if (!this.formHasErrors) {
                // Dummy submission form

            }
        }
    }
};
</script>

<style scoped>
#description {
    height: 150px;
}
</style>