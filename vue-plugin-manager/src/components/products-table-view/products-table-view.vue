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
  <v-data-table
    v-model:expanded="expanded"
    :headers="headers"
    :items="products"
    :search="search"
    :custom-filter="filterByName"
    :items-per-page="products.length"
    show-expand
    item-value="name"
    class="elevation-1">
    <template v-slot:[`item.name`]="{ item }">
      <a href="#" @click.prevent="openDialog(item)">
        {{ item.columns.name }}
      </a>
    </template>
    <template v-slot:[`item.description`]="{ item }">
      <span class="font-weight-thin text-caption">
        {{ item.columns.description }}
      </span>
    </template>
    <template v-slot:[`item.images`]="{ item }">
      <span>
        {{ item.columns.name }}
      </span>
    </template>
    <template v-slot:[`item.installers`]="{ item }">
      <span>
        {{ item.columns.installers?.win64?.version }}
      </span>
    </template>
    <template v-slot:expanded-row="{ columns, item }">
      <ProductsTableExpandedRow :columns="columns" :item="item" />
    </template>

  </v-data-table>
  <v-dialog v-model="dialog" width="350px">
    <template v-if="selectedItem">
      <v-img :src="selectedItem.columns.images['240w']"></v-img>
      <v-card>
        <v-card-title>{{ selectedItem.columns.name }}</v-card-title>
        <v-card-text>{{ selectedItem.columns.description }}</v-card-text>
        <!-- ... otros detalles ... -->
      </v-card>
    </template>
  </v-dialog>
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
