<template>
  <v-dialog v-model="internalDialog" width="350px">
    <template v-if="selectedItem">
      <v-img :src="selectedItem.columns.images['480w']"></v-img>
      <v-card>
        <v-card-title>{{ selectedItem.columns.name }}</v-card-title>
        <v-card-text>{{ selectedItem.columns.description }}</v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
  
<script>
export default {
  props: {
    dialog: Boolean,
    selectedItem: Object,
  },
  data() {
    return {
      internalDialog: this.dialog,
    };
  },
  watch: {
    dialog(newValue) {
      this.internalDialog = newValue;
    },
    internalDialog(newValue) {
      this.$emit('update:dialog', newValue);
    },
  },
};
</script>
  
  
<style scoped>
@import './product-image-dialog.scss';
</style>