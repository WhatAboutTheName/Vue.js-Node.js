<template>
  <form @submit.prevent="createProduct" class="form_container">
    <div v-if="!prevImg" class="image block">
      <span>No image</span>
    </div>
    <div v-else class="image block">
      <img :src="prevImg" alt="image" />
    </div>
    <div className="image">
      <input name="image" type="file" @change="filePicker" />
    </div>
    <input name="title" type="string" placeholder="Title" class="block" v-model="title" />
    <input name="price" type="number" placeholder="Price" class="block" v-model="price" />
    <textarea placeholder="description" class="description block" v-model="description" />
    <button type="submit">Accept</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const title = ref("");
    const price = ref("");
    const description = ref("");
    const prevImg = ref("");
    const postImg = ref("");
    const router = useRouter();

    const filePicker = (event) => {
      const reader = new FileReader();
      postImg.value = event.target.files[0];
      reader.onload = () => {
        prevImg.value = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    };

    const createProduct = async () => {
      try {
        const data = new FormData();
        data.append("title", title.value);
        data.append("price", price.value);
        data.append("description", description.value);
        data.append("image", postImg.value, title.value);
        await axios.post("/admin/addProduct", data);
        router.push({ path: "/" });
      } catch (err) {
        console.error(err);
      }
    };

    return {
      title,
      price,
      description,
      prevImg,
      postImg,
      filePicker,
      createProduct,
    };
  },
};
</script>

<style scoped>
.form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #a437cc;
}

input {
  min-width: 20rem;
}

.block {
  min-width: 25%;
  margin-bottom: 1%;
}

.description {
  min-height: 5rem;
}

img {
  max-width: 25%;
}
</style>
