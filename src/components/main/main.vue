<template>
  <ProductTemplate v-for="product in products" :product="product" :key="product.id" />
</template>

<script>
import axios from "axios";
import ProductTemplate from "./product-template";

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

<style></style>
