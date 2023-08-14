<template>
  <tr class="row">
    <td :colspan="columns.length">
      <div class="expanded-row">
        <v-img :src="`${item.raw?.images['480w']}`" class="expanded-image"></v-img>
        <v-card variant="tonal" class="table-item-card">
          <div class="expanded-info">
            <v-card-item class="feature-highlight no-padding-bottom">{{ item.raw?.featureHighlight?.toUpperCase() }}</v-card-item>
            <v-card-title class="normal-white-space no-padding-top no-padding-bottom">{{ item.raw?.name }}</v-card-title>
            <v-card-subtitle class="description normal-white-space">{{ item.raw?.description }}</v-card-subtitle>
            <v-card-item class="version no-padding-top no-padding-bottom" v-if="item.raw?.installers?.win64?.version">
              Version: {{ item.raw?.installers?.win64?.version }}
            </v-card-item>
            <v-card-actions class="no-padding-top">
              <v-btn  variant="tonal" color="#00c795" @click="openExternalURL">WEBSITE</v-btn>
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
