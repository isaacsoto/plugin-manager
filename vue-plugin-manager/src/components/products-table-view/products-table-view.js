// ProductsTableViewScript.js
import { fetchProducts } from './products';

export default {
  name: 'ProductsTableView',

  data() {
    return {
      search: '',
      headers: [
        {
          align: 'start',
          key: 'name',
          sortable: true,
          title: 'Plugin',
        },
        { key: 'description', title: 'Description' },
      ],
      products: [],
    };
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
  
  methods: {
    // eslint-disable-next-line
    rowClass(item) {
        const rowClass = 'blue-row'
        return rowClass;
    }
  }
};
