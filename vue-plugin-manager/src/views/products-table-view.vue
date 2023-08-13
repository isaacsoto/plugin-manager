<template>
  <v-toolbar 
    dense
    floating>
    <v-text-field
      hide-details
      v-model="search"
      label="Search"
      prepend-icon="mdi-magnify"
      single-line
    ></v-text-field>
  </v-toolbar>
  <ProductsTable
    :expanded="expanded"
    :headers="headers"
    :items="products"
    :search="search"
    :custom-filter="filterByName"
    :items-per-page="products.length"
    @open-dialog="openDialog"
    @expanded-change="updateExpanded"
  />
  <ProductImageDialog v-model:dialog="dialog"
    :selected-item="selectedItem" />
</template>

<script>
import ProductsTableViewScript from './products-table-view';

export default {
  ...ProductsTableViewScript,
}

</script>

<style scoped lang="scss">
  @import './products-table-view.scss';
</style>
