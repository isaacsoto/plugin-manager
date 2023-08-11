<template>
    <v-card>
      <v-card-title>
        Plugins
        <v-spacer></v-spacer>
        
      </v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table
        :headers="headers"
        :items="products"
        :search="search">
        <template v-slot:item="{ item }">
          <tr class="blue-row">
            <td class="blue-row">{{ item.columns.name }}</td>
            <td class="blue-row">{{ item.columns.description }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
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
