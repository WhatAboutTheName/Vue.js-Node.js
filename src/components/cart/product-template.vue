<template>
    <div class="product_container">
      <div class="card_product_content">
        <img class="product_img" :src="product.img" :alt="product.title" />
        <div class="product_container">
          <p>Title: {{ product.title }}</p>
          <p>All Price: ${{ product.price * product.count }}</p>
          <p>Count: {{ product.count }}</p>
          <p>
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
    }
  },
};
</script>

<style scoped>
.card_product_content {
  min-width: 24%;
  max-width: 24%;
  margin: 0 0.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.product_img {
  max-width: 50%;
}

.description {
  display: block;
}
</style>
