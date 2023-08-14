<template>
  <v-dialog v-model="internalDialog" width="400px">
    <template v-if="selectedItem">
      <v-btn icon class="dialog-close-button" @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-img :src="selectedItem.raw?.images['480w']"></v-img>
      <v-card>
        <v-card-title class="dialog-card-title">{{ selectedItem.raw?.name }}</v-card-title>
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
  methods: {
    closeDialog() {
      this.internalDialog = false;
    },
  },
};
</script>
  
  
<style scoped>
@import './product-image-dialog.scss';
</style>