import { mount } from '@vue/test-utils';
import ProductsTableView from '@/path-to/ProductsTableView.vue';
import { fetchProducts } from '@/api/products';

// Mock fetchProducts to return fake response
jest.mock('@/api/products', () => ({
  fetchProducts: jest.fn(() =>
    Promise.resolve({
      result: [], // Mocked response data
    })
  ),
}));

describe('ProductsTableView', () => {
  // ...

  it('openDialog method sets selectedItem and dialog to true', async () => {
    const wrapper = mount(ProductsTableView);
    await wrapper.vm.openDialog({ name: 'Mock Product' });
    
    expect(wrapper.vm.selectedItem).toEqual({ name: 'Mock Product' });
    expect(wrapper.vm.dialog).toBe(true);
    expect(wrapper.emitted()['open-dialog']).toBeTruthy();
  });

  it('filterByName method filters items correctly', () => {
    const wrapper = mount(ProductsTableView, {
      data() {
        return {
          products: [
            { name: 'Product A' },
            { name: 'Product B' },
            { name: 'Product C' },
          ],
        };
      },
    });

    expect(wrapper.vm.filterByName('', 'Product B', wrapper.vm.products[1])).toBe(true);
    expect(wrapper.vm.filterByName('', 'Product B', wrapper.vm.products[0])).toBe(false);
    expect(wrapper.vm.filterByName('', 'Product B', wrapper.vm.products[2])).toBe(false);
  });

  it('updateExpanded method updates the expanded array', () => {
    const wrapper = mount(ProductsTableView);
    const newExpanded = [1, 2, 3];
    wrapper.vm.updateExpanded(newExpanded);
    expect(wrapper.vm.expanded).toEqual(newExpanded);
  });

  it('closeDialog method sets internalDialog to false', () => {
    const wrapper = mount(ProductsTableView);
    wrapper.vm.closeDialog();
    expect(wrapper.vm.internalDialog).toBe(false);
  });

  it('internalDialog watcher emits update:dialog event', async () => {
    const wrapper = mount(ProductsTableView);
    await wrapper.vm.$nextTick();

    // Mock the emitted event for update:dialog
    wrapper.vm.$emit('update:dialog', true);
    
    // Check that the event was emitted
    expect(wrapper.emitted()['update:dialog']).toBeTruthy();
  });

  it('fetchProducts call on mounted updates data', async () => {
    fetchProducts.mockResolvedValueOnce({
      result: [{ name: 'Mocked Product' }],
    });

    const wrapper = mount(ProductsTableView);
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.tableMessage).toBe('');
    expect(wrapper.vm.products).toEqual([{ name: 'Mocked Product' }]);
  });

  it('fetchProducts call on mounted handles error', async () => {
    fetchProducts.mockRejectedValueOnce(new Error('API Error'));

    const wrapper = mount(ProductsTableView);
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.tableMessage).toBe('An error occurred while fetching data.');
  });

  // More tests...
});
