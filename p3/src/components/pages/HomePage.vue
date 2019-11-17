<template>
    <div>
        <p>Siete Recipes: Declious grain free, paleo, dairy-free, vegan and vegetarian recipes</p>

        <show-featured :category='featuredCategory'></show-featured>
    </div>
</template>

<script>
import ShowFeatured from './../ShowFeatured.vue';

export default {
    name: 'HomePage',
    components: { ShowFeatured },
    data: function() {
        return {
            featuredCategory: 'snacks'
        };
    }
};
</script>
