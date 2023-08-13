<template>
    <tr class="big-row">
      <td :colspan="columns.length">
        <img :src="`${item.columns.images['240w']}`">
        <v-card variant="tonal" class="table-item-card">
          <v-card-title>{{ item.columns.name }}</v-card-title>
          <v-card-text>{{ item.columns.description }}</v-card-text>
        </v-card>
        <v-card variant="tonal" class="table-item-card">
          <v-card-item>{{ item.columns.installers?.win64?.version }}</v-card-item>
          <v-card-item>{{ item.columns.installers?.macOs?.version }}</v-card-item>
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
  