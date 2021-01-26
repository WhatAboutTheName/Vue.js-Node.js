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
import cartStore from "@/store/cart-store";
import ProductTemplate from "./product-template";

export default {
  components: {
    ProductTemplate,
  },
  data() {
    return {
      allProductSum: 0
    }
  },
  computed: {
    allPrice() {
      cartStore.getters.getProducts.forEach(el => {
        this.allProductSum += el.price * el.count;
      })
      return this.allProductSum;
    },
    products() {
      return cartStore.getters.getProducts;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}
</style>
