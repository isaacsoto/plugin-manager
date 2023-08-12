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
    :headers="headers"
    :items="products"
    :search="search"
    :items-per-page="products.length">
    <template v-slot:headers="{ columns }">
      <tr class="invisible">
        <template v-for="column in columns" :key="column.key">
          <td>
            <span>{{ column.title }}</span>
          </td>
        </template>
      </tr>
    </template>
    <template v-slot:item="{ item }">
      <tr class="big-row">
        <div class="table-item">
          <img v-bind:src="`${item.columns.images['240w']}`">
          <v-card variant="tonal" class="table-item-card">
            <v-card-title>{{ item.columns.name }}</v-card-title>
            <v-card-text>{{ item.columns.description }}</v-card-text>
          </v-card>
          <v-card variant="tonal" class="table-item-card">
            <v-card-item>{{ item.columns.installers?.win64?.version }}</v-card-item>
            <!--<v-card-item>{{ item.columns.installers }}</v-card-item>-->
          </v-card>
        </div>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import ProductsTableViewScript from './products-table-view';

export default {
  ...ProductsTableViewScript,
}

</script>

<style lang="scss">
  @import './products-table-view.scss';
</style>
