<template>
  <v-data-table
    :expanded="expanded"
    :headers="headers"
    :items="items"
    :search="search"
    :custom-filter="customFilter"
    show-expand
    height="618px"
    width="100%"
    fixed-header
    fixed-footer
    item-value="name"
    class="elevation-1"
  >
    <template #no-data>
        <div class="text-center">{{ tableMessage }}</div>
    </template>
    <template v-slot:[`item.name`]="{ item }">
      <a href="#" @click.prevent="openDialog(item)" class="text-decoration-none">
        {{ item.columns.name }}
      </a>
    </template>
    <template v-slot:[`item.description`]="{ item }">
      <span class="small-text table-text-color">
        {{ item.columns.description }}
      </span>
    </template>
    <template v-slot:[`item.installers`]="{ item }">
      <span class="table-text-color">
        {{ item.columns.installers?.win64?.version || '-' }}
      </span>
    </template>
    <template v-slot:expanded-row="{ columns, item }">
      <ProductsTableExpandedRow :columns="columns" :item="item" />
    </template>
    <template v-slot:header="{ header }">
      <th class="sticky-table-headers">{{ header.text }}</th>
    </template>

  </v-data-table>
</template>

<script>
import ProductsTableScript from './products-table';

export default {
  ...ProductsTableScript,
}
</script>

<style scoped lang="scss">
  @import './products-table.scss';
</style>