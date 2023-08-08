<template>
  <v-app>
    <v-main>
      <ProductsTableView/>
    </v-main>
  </v-app>
</template>

<script>
import ProductsTableView from './components/products-table-view/products-table-view.vue'

export default {
  name: 'App',

  components: {
    ProductsTableView,
  },
}
</script>
