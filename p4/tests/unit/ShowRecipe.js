// Import our assertion library
// https://www.chaijs.com/guide/styles/#expect
import { expect } from 'chai'

// Vue Test Utils tests Vue components by mounting them in isolation, 
// mocking the necessary inputs (props, injections and user events) and 
// asserting the outputs (render result, emitted custom events).
// Here we're using `shallowMount` which will allow us to mount our component 
// without rendering its child components.
// https://vue-test-utils.vuejs.org/api/#shallowmount
// https://vue-test-utils.vuejs.org/api/components/#routerlinkstub
import { shallowMount, RouterLinkStub } from '@vue/test-utils'

// Import the component you want to test
import ShowRecipe from '@/components/ShowRecipe.vue'

// describe() is how we group tests in Mocha
// It takes two arguments:
// 1) name of the test group
// 2) callback function
describe('ShowProduct.vue', () => {

    // it() is used for an individual test case.
    // should be written as if you were saying it out loud: “It should equal zero”, “It should log the user in”, etc. 
    // takes two arguments:
    // 1) a string explaining what the test should do, 
    // 2) a callback function which contains our actual test
    it('shows a recipe', () => {

        // Define a recipe we can test
        let recipe = {
            id: 'FuegoMeatloaf',
            name: 'Chipotle Fuego Turkey Meatloaf',
            description:
                'This Chipotle Fuego Turkey Meatloaf recipe is our homage to the belly-warming, winter classic that we love, but with a couple of new ingredient-twists! Baked with our Grain Free Fuego Tortilla Chips and our Chipotle Hot Sauce, this loaf is perfect for those who love a healthy dose of heat, and would rather spend all winter by the fireside. Serve with your grandma’s revered mashed potatoes, or momma’s green beans, and scarf down!',
            servings: 8,
            time: 70,
            categories: ['gluten free', 'grain free', 'soy free', 'dairy free'],
            directions: ["Cut bacon into small pieces and render. Once crispy, separate from bacon fat.",
                        "In a bowl, combine turkey, bacon, egg, and all seasonings.",
                        "In a food processor, ground Fuego chips until fine. Add to turkey mixture.",
                        "Form ground turkey mixture into a meatloaf and place in a pan lined with parchment.",
                        "Combine Ketchup and chipotle hot sauce and pour over loaf.",
                        "Bake at 375F for 45 mins.",
                        "Slice, sprinkle chopped herbs over meatloaf and serve.",
                        "Enjoy!"],
            ingredients: [
                {
                    "qty": 2,
                    "unit": "lb",
                    "ingredient": "Ground Turkey"
                },
                {
                    "qty": 1,
                    "unit": "T",
                    "ingredient": "Garlic Powder"
                },
                {
                    "qty": 1,
                    "unit": "t",
                    "ingredient": "Cayenne Pepper"
                },
                {
                    "qty": 1,
                    "unit": "T",
                    "ingredient": "Onion"
                },
                {
                    "qty": 0.5,
                    "unit": "Pkg",
                    "ingredient": "Bacon"
                },
                {
                    "qty": 1,
                    "unit": "",
                    "ingredient": "Egg"
                },
                {
                    "qty": 0.25,
                    "unit": "",
                    "ingredient": "4 oz Bag Siete Grain Free Fuego Chips"
                },
                {
                    "qty": 1,
                    "unit": "T",
                    "ingredient": "Salt"
                },
                {
                    "qty": 1,
                    "unit": "t",
                    "ingredient": "Pepper"
                },
                {
                    "qty": 1,
                    "unit": "C",
                    "ingredient": "Organic Ketchup"
                },
                {
                    "qty": 0.25,
                    "unit": "C",
                    "ingredient": "Siete Chipotle Hot Sauce"
                },
                {
                    "qty": 1,
                    "unit": "T",
                    "ingredient": "Parsley"
                },
                {
                    "qty": 1,
                    "unit": "T",
                    "ingredient": "Chives"
                },
                {
                    "qty": 1,
                    "unit": "T",
                    "ingredient": "Chervil"
                }

            ]
        }

        // Mount our component
        // Mounted components are returned inside a Wrapper, which exposes 
        // many convenience methods for manipulating, traversing and 
        // querying the underlying Vue component instance.
        // https://vue-test-utils.vuejs.org/api/wrapper/#properties
        const wrapper = shallowMount(ShowRecipe, {
            propsData: { recipe },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        // Assert our results
        expect(wrapper.text()).to.include(recipe.name)
        let foundRecipeLink = wrapper.find('[data-test="recipe-link"]').exists();
        expect(foundRecipeLink).to.equal(true);
    })
})