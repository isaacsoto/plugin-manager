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
        { key: 'images', title: 'Image' },
        { key: 'installers', title: 'Installers' },
        
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
};
