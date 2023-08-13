// ProductsTableViewScript.js
import { fetchProducts } from './products';
import ProductsTableExpandedRow from '@/components/products-table-view/products-table-expanded-row/products-table-expanded-row.vue';

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
          title: 'Plugin',
        },
        { key: 'description', title: 'Description' },
        { key: 'images', title: 'Image' },
        { key: 'installers', title: 'Installers' },
        
      ],
      products: [],
      dialog: false,
      selectedItem: null,
    };
  },

  methods: {
    openDialog(item) {
      this.selectedItem = item;
      this.dialog = true;
    },

    filterByName(value, query, item) {
      const keyword = query.trim().toUpperCase();
      return item.name?.toUpperCase().includes(keyword);
    }
  },

  async mounted() {
    try {
      const response = await fetchProducts();
      // Assuming the API response is in the format you provided
      this.products = response.result;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },

  components: {
    ProductsTableExpandedRow,
  },

};
