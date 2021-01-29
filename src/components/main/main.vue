<template>
  <div class="container">
    <ProductTemplate v-for="product in products" :product="product" :key="product.id" />
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted, ref } from "vue";
import axios from "axios";
const ProductTemplate = defineAsyncComponent(() => import("./product-template"));

export default {
  components: {
    ProductTemplate,
  },
  setup() {
    const products = ref([]);

    onMounted(async () => {
      try {
        const res = await axios.get("/user/get-product");
        products.value = res.data.products.map((el) => el);
      } catch (err) {
        console.error(err);
      }
    });

    return {
      products,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
