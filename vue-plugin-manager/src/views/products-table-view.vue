<template>
  <v-sheet class="fixed-sticky-searchbar searchbar-container" >
    <v-toolbar
      class="searchbar"
      color="grey-darken-4"
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
  </v-sheet>
  <v-sheet class="table-container">
    <ProductsTable
      :expanded="expanded"
      :headers="headers"
      :items="products"
      :search="search"
      :custom-filter="filterByName"
      :tableMessage='tableMessage'
      @open-dialog="openDialog"
      @expanded-change="updateExpanded"
    />
  </v-sheet>
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
  @import './products-table-view';
</style>
