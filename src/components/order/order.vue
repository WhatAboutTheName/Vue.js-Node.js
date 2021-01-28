<template>
  <div v-for="product in products" :key="product.id">
    <p>
      User: {{ product.userId }}
    </p>
    <div v-for="prod in product.products" :key="prod.id">
      <p>
        Quantity: {{ prod.orderItems.quantity }}
      </p>
      <p>
        Title: {{ prod.title }}
      </p>
    </div>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
import userStore from "@/store/user-store";

export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    axios
      .get(`/user/get-order/:?email=${userStore.state.email}`)
      .then((res) => {
        this.products = res.data.orders;
        console.log(this.products)
      })
      .catch((err) => console.error(err));
  }
};
</script>
