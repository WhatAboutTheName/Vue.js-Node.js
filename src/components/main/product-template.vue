<template>
  <div class="card_product_content">
    <img class="product_img" :src="prevImg" :alt="product.title" />
    <div class="product_container">
      <p>Title: {{ product.title }}</p>
      <p>Price: {{ product.price }}</p>
      <p>
        <span class="description">Description:</span>
        {{ product.description }}
      </p>
    </div>
    <div class="product_event" v-if="isAuth">
      <button @click="inCart(product)">In cart</button>
    </div>
  </div>
</template>

<script>
import cartStore from "@/store/cart-store";
import userStore from "@/store/user-store";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      prevImg: "",
    };
  },
  computed: {
    isAuth() {
      return userStore.getters.isAuth;
    }
  },
  mounted() {
    let binary = "";
    let bytes = [].slice.call(new Uint8Array(this.product.img.data));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    this.prevImg = binary;
  },
  methods: {
    inCart(prod) {
      const store = cartStore.state;
      let product = {
        id: prod.id,
        title: prod.title,
        price: prod.price,
        description: prod.description,
        img: this.prevImg,
        count: 0,
      };
      if (!store.order.length) {
        store.order.push({ id: prod.id, count: 0 });
        store.products.push(product);
      }
      let newProduct = true;
      store.products.forEach((el) => {
        newProduct = true;
        if (el.id === product.id) {
          el.count += 1;
          newProduct = false;
        }
      });
      store.order.forEach((ord) => {
        if (ord.id === product.id) {
          ord.count += 1;
        }
      });
      if (newProduct) {
        store.order.push({ id: prod.id, count: 1 });
        store.products.push(product);
      }
    },
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
