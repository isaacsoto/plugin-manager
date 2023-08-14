<template>
  <v-app>
    <v-main>
      <ProductsTableView/>
    </v-main>
  </v-app>
</template>

<script>
import ProductsTableView from '@/views/products-table-view.vue'

export default {
  name: 'App',
  components: {
    ProductsTableView,
  },
}
</script>

<style lang="scss">
  ::-webkit-scrollbar {
    display: none;
  }
</style>
