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
    },
    getOrder: state => {
      return state.order;
    }
  },
  mutations: {
    zero(state) {
      state.products = [];
      state.order = [];
    }
  }
})

export default cartStore;
