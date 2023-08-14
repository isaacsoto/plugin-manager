const SOFTUBE_BASE_URL = "https://www.softube.com/products";
export default {
  props: {
    columns: Array,
    item: Object,
  },
  methods: {
    openExternalURL() {
      window.open(SOFTUBE_BASE_URL + this.item.raw?.url, '_blank');
    },
  },
};