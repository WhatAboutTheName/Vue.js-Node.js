<template>
  <form @submit.prevent="signUp" class="sign_up_form">
    <div class="container">
      <input name="name" type="text" placeholder="Name" v-model="name" />
    </div>
    <div class="container">
      <input name="email" type="email" placeholder="Email" v-model="email" />
    </div>
    <div class="container">
      <input name="password" type="password" placeholder="Password" v-model="password" />
    </div>
    <div class="container">
      <input
        name="phoneNumber"
        type="phoneNumber"
        placeholder="Phone number"
        v-model="phoneNumber"
      />
    </div>
    <button type="submit">Accept</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const phoneNumber = ref("");
    const router = useRouter();

    const signUp = async () => {
      try {
        await axios.post("/auth/sign-up", {
          name: name.value,
          email: email.value,
          password: password.value,
          phoneNumber: phoneNumber.value,
        });
        router.push({ path: "/log-in" });
      } catch (err) {
        console.error(err);
      }
    };

    return {
      name,
      email,
      password,
      phoneNumber,
      signUp,
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
