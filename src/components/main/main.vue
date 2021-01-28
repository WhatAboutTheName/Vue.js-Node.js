<template>
  <div class="container">
    <ProductTemplate v-for="product in products" :product="product" :key="product.id" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import axios from "axios";
const ProductTemplate = defineAsyncComponent(() => import("./product-template"));

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    ProductTemplate,
  },
  mounted() {
    axios
      .get("/user/get-product")
      .then((res) => {
        this.products = res.data.products;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
