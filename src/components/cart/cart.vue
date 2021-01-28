<template>
  <div class="container">
    <ProductTemplate v-for="product in products" :product="product" :key="product.id" />
    <div class="order_info">
      <div class="info">
        <p>All Price: ${{ allPrice }}</p>
      </div>
      <div class="order_event">
        <button @click="orderAccept">Accept</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { defineAsyncComponent } from "vue";
import cartStore from "@/store/cart-store";
import userStore from "@/store/user-store";
const ProductTemplate = defineAsyncComponent(() => import("./product-template"));

export default {
  components: {
    ProductTemplate,
  },
  data() {
    return {
      allProductSum: 0,
    };
  },
  computed: {
    allPrice() {
      cartStore.getters.getProducts.forEach((el) => {
        this.allProductSum += el.price * el.quantity;
      });
      return this.allProductSum;
    },
    products() {
      return cartStore.getters.getProducts;
    },
  },
  methods: {
    async orderAccept() {
      try {
        await axios.post("/user/post-order", {
          data: cartStore.getters.getOrder,
          email: userStore.state.email,
        });
        cartStore.commit('zero');
        this.allProductSum = 0;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin: 0 2%;
}
</style>
