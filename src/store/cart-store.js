import { createStore } from 'vuex';

const cartStore = createStore({
  state() {
    return {
      products: [],
      order: []
    }
  },
  getters: {
    getProducts: state => {
      return state.products;
    }
  }
})

export default cartStore;
