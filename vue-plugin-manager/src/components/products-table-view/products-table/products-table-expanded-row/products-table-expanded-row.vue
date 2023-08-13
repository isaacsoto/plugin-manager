<template>
    <tr class="big-row">
      <td :colspan="columns.length">
        <img :src="`${item.raw?.images['240w']}`">
        <v-card variant="tonal" class="table-item-card">
          <v-card-title>{{ item.raw?.name }}</v-card-title>
          <v-card-text>{{ item.raw?.description }}</v-card-text>
        </v-card>
        <v-card variant="tonal" class="table-item-card">
          <v-card-item>{{ item.raw?.installers?.win64?.version }}</v-card-item>
          <v-card-item>{{ item.raw?.installers?.macOs?.version }}</v-card-item>
        </v-card>
      </td>
    </tr>
  </template>
  
  <script>
  export default {
    props: {
      columns: Array,
      item: Object,
    },
  };
  </script>
  
  <style scoped lang="scss">
    @import './products-table-expanded-row.scss';
  </style>
  