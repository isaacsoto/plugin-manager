<template>
  <v-container>
    <v-list lines="one">
      <v-list-item
        v-for="product in products"
        :key="product.id"
        :title="product.name"
        :subtitle="product.description"
        :prepend-avatar="product.images['240w']"
      ></v-list-item>
    </v-list>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Image
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.id"
        >
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>
            <img v-bind:src="`${product.images['240w']}`" style="width: 50px; height:50px">
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import {fetchProducts} from './products'

export default {
  name: 'ProductsTableView',

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
