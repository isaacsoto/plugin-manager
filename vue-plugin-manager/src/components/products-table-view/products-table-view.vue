<template>
    <v-card>
      <v-card-title>
        Plugins
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="products"
        :search="search">
      </v-data-table>
    </v-card>
</template>

<script>
import {fetchProducts} from './products'

export default {
  name: 'ProductsTableView',

  data() {
    return {
      search: '',
      headers: [
        {
          align: 'start',
          key: 'name',
          sortable: true,
          title: 'Plugin',
        },
        { key: 'description', title: 'Description' },
      ],
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
