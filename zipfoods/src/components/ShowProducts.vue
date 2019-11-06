<template>
  <div id="products">
    <h2>Products</h2>
    <show-product v-for="product in products" :key="product.id" :product="product"></show-product>
  </div>
</template>

<script>
import { products } from './../products.js';
import ShowProduct from './ShowProduct.vue'

export default {
  name: 'ShowProducts',
  components: {
    ShowProduct
  },
  data: function() {
    return {
        products: products
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>