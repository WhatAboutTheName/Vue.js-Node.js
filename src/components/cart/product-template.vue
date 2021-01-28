<template>
  <div class="product_container">
    <div class="card_product_content">
      <img class="product_img" :src="product.img" :alt="product.title" />
      <div class="product_container">
        <p class="p_margin">Title: {{ product.title }}</p>
        <p class="p_price">All Price: ${{ product.price * product.quantity }}</p>
        <p class="p_margin">Quantity: {{ product.quantity }}</p>
        <p class="p_description">
          <span class="description">Description:</span>
          {{ product.description }}
        </p>
      </div>
      <div class="product_event">
        <button @click="Delete(product.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from "@/store/cart-store";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    Delete(id) {
      const dataProducts = cartStore.state.products.filter((el) => el.id !== id);
      const dataOrder = cartStore.state.order.filter((el) => el.id !== id);
      cartStore.state.products = dataProducts;
      cartStore.state.order = dataOrder;
    },
  },
};
</script>

<style scoped>
.card_product_content {
  max-width: 15rem;
}

.product_img {
  max-width: 50%;
}

.description {
  display: block;
}

.p_description {
  overflow: auto;
  max-height: 5rem;
  max-width: 10rem;
}

.p_margin {
  margin: 0;
}

.p_price {
  margin: 2% 0;
}
</style>
