import { fetchProducts } from '@/api/products';
import ProductsTable from '@/components/products-table-view/products-table/products-table.vue';
import ProductImageDialog from '@/components/products-table-view/product-image-dialog/product-image-dialog.vue';

export default {
  name: 'ProductsTableView',

  data() {
    return {
      search: '',
      expanded: [],
      headers: [
        {
          align: 'start',
          key: 'name',
          sortable: true,
          title: 'Product',
        },
        { key: 'description', title: 'Description', sortable: false },
        { key: 'installers', title: 'Version',  align: 'end' },
        
      ],
      products: [],
      dialog: false,
      selectedItem: null,
      tableMessage: 'Loading data...',
    };
  },

  methods: {
    openDialog(item) {
      this.selectedItem = item;
      this.dialog = true;
    },

    filterByName(value, query, item) {
      const keyword = query.trim().toUpperCase();
      const isMatch = item?.name?.toUpperCase().includes(keyword);
      this.tableMessage = isMatch ? '' : 'No results found.';
      return isMatch;
    },

    updateExpanded(newExpanded) {
      this.expanded = newExpanded;
    },
  },

  mounted() {
    fetchProducts()
      .then(response => {
        this.tableMessage = response.result.length === 0 ? 'No data available.' : '';
        this.products = response.result.length === 0 ? [] : response.result;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        this.tableMessage = 'An error occurred while fetching data.';
      });
  },

  components: {
    ProductsTable,
    ProductImageDialog,
  },

};
