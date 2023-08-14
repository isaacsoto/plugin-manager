<template>
  <tr>
    <td :colspan="columns.length">
      <div class="expanded-row">
        <v-img :src="`${item.raw?.images['480w']}`" class="expanded-image"></v-img>
        <v-card variant="outlined" class="table-item-card">
          <div class="expanded-info">
            <v-card-text class="feature-highlight">{{ item.raw?.featureHighlight.toUpperCase() }}</v-card-text>
            <v-card-title>{{ item.raw?.name }}</v-card-title>
            <v-card-subtitle class="description">{{ item.raw?.description }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text color="primary" @click="openExternalURL">WEBSITE</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    columns: Array,
    item: Object,
  },
  methods: {
    openExternalURL() {
      window.open('https://www.softube.com' + this.item.raw?.url, '_blank');
    },
  },
};
</script>

<style scoped lang="scss">
  @import './products-table-expanded-row.scss';
</style>
