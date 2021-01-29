<template>
  <div v-for="product in products" :key="product.id">
    <p>User: {{ product.userId }}</p>
    <div v-for="prod in product.products" :key="prod.id">
      <p>Quantity: {{ prod.orderItems.quantity }}</p>
      <p>Title: {{ prod.title }}</p>
    </div>
    <hr />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import userStore from "@/store/user-store";

export default {
  setup() {
    const products = ref([]);

    onMounted(async () => {
      try {
        const res = await axios.get(`/user/get-order/:?email=${userStore.state.email}`);
        products.value = res.data.orders;
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
