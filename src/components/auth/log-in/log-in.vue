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
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import userStore from "@/store/user-store";

export default {
  userStore,
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const logIn = async () => {
      try {
        const res = await axios.post("/auth/log-in", {
          email: email.value,
          password: password.value,
        });
        const user = res.data.user;
        const state = userStore.state;
        state.name = user.name;
        state.isLogin = true;
        state.isAdmin = user.isAdmin;
        state.email = user.email;
        state.phoneNumber = user.phoneNumber;
        router.push({ path: "/" });
      } catch (err) {
        console.error(err);
      }
    };

    return {
      email,
      password,
      logIn,
    };
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
