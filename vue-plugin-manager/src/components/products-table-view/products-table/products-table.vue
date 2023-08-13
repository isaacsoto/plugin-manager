<template>
  <v-data-table
    :expanded="expanded"
    :headers="headers"
    :items="items"
    :search="search"
    :custom-filter="customFilter"
    show-expand
    height="598px"
    fixed-header
    fixed-footer
    item-value="name"
    class="elevation-1"
  >
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
        {{ item.columns.installers?.win64?.version }}
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
import ProductsTableExpandedRow from '@/components/products-table-view/products-table/products-table-expanded-row/products-table-expanded-row.vue';
export default {
  props: {
    expanded: Array,
    headers: Array,
    items: Array,
    search: String,
    customFilter: Function,
    itemsPerPage: Number,
  },
  methods: {
    openDialog(item) {
      this.$emit('open-dialog', item);
    },
    handleExpandedChange(newExpanded) {
      this.$emit('expanded-change', newExpanded);
    },
  },
  watch: {
    expanded(newVal) {
      this.handleExpandedChange(newVal);
    },
  },
  components: {
    ProductsTableExpandedRow,
  },
};
</script>

<style scoped lang="scss">
  @import './products-table.scss';
</style>