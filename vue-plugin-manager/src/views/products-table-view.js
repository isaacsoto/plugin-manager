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
      const isMatch = item && item.name?.toUpperCase().includes(keyword);

      if (!item || !isMatch) {
        this.tableMessage = 'No results found.';
      } else {
        this.tableMessage = '';
      }

      return isMatch;
    },

    updateExpanded(newExpanded) {
      this.expanded = newExpanded;
    },
  },

  async mounted() {
    try {
      const response = await fetchProducts();
      if (response.result.length === 0) {
        this.tableMessage = 'No data available.';
      } else {
        this.products = response.result;
        this.tableMessage = ''; // Clear the message if data is available
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      this.tableMessage = 'An error occurred while fetching data.';
    }
  },

  components: {
    ProductsTable,
    ProductImageDialog,
  },

};
