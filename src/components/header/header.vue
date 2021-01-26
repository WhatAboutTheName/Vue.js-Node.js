<template>
  <div class="header">
    <ul class="link">
      <li>
        <router-link to="/">Products</router-link>
      </li>
      <li v-if="isAuth">
        <router-link to="/create-product">Create product</router-link>
      </li>
      <li v-if="isAuth">
        <router-link to="/cart">Cart</router-link>
      </li>
      <li v-if="isAuth">
        <router-link to="/order">Order</router-link>
      </li>
      <li v-if="!isAuth">
        <router-link to="/log-in">Log-in</router-link>
      </li>
      <li v-if="!isAuth">
        <router-link to="/sign-up">Sign-up</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import userStore from '@/store/user-store';

export default {
  userStore,
  computed: {
    isAuth() {
      return userStore.getters.isAuth;
    }
  }
}
</script>

<style scoped>
.link {
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

li {
  list-style-type: none;
}

a {
  color: #ffffff;
  text-decoration: none;
}

.router-link-active {
  color: #de5bff;
}
</style>
