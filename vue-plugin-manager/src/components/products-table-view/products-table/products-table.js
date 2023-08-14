import ProductsTableExpandedRow from '@/components/products-table-view/products-table/products-table-expanded-row/products-table-expanded-row.vue';
export default {
  props: {
    expanded: Array,
    headers: Array,
    items: Array,
    search: String,
    customFilter: Function,
    itemsPerPage: Number,
    tableMessage: String,
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