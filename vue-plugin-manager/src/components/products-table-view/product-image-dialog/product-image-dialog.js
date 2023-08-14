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