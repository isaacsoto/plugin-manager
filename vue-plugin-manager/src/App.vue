<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      <!--<ul>
        <li v-for="product in products" :key="product.id">{{ product.id }}</li>
      </ul>-->
      <v-list lines="one">
        <v-list-item
          v-for="product in products"
          :key="product.id"
          :title="product.name"
          :subtitle="product.description"
          :prepend-avatar="product.images['240w']"
        ></v-list-item>
      </v-list>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {fetchProducts} from './products'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data() {
    return {
      products: [],
    };
  },

  async mounted() {
    try {
      const response = await fetchProducts();
      // Assuming the API response is in the format you provided
      this.products = response.result;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
}
</script>
