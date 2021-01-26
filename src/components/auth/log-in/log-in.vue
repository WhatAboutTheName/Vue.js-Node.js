<template>
  <form @submit.prevent="logIn" class="sign_up_form">
    <div class="container">
      <input name="email" type="email" placeholder="Email" v-model="email" />
    </div>
    <div class="container">
      <input name="password" type="password" placeholder="Password" v-model="password" />
    </div>
    <button variant="primary">Accept</button>
  </form>
</template>

<script>
import axios from "axios";
import userStore from "@/store/user-store";

export default {
  userStore,
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async logIn() {
      try {
        const res = await axios.post("/auth/log-in", {
          email: this.email,
          password: this.password,
        });
        const user = res.data.user;
        const state = userStore.state;
        state.name = user.name;
        state.isLogin = true;
        state.isAdmin = user.isAdmin;
        state.email = user.email;
        state.phoneNumber = user.phoneNumber;
        this.$router.push({ path: '/' });
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.sign_up_form {
  color: #a437cc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.block {
  min-width: 3%;
}

.container {
  margin-bottom: 1%;
}

input {
  min-width: 20rem;
}
</style>
