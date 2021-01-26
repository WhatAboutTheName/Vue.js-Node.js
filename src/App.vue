<template>
  <div class="full_content">
    <div class="header_container">
      <Header />
    </div>

    <div class="content_container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/header/header";

export default {
  name: "app",
  components: {
    Header,
  },
};
</script>

<style scoped>
.header_container {
  min-width: 100vw;
  display: flow-root;
  background: #a437cc;
}

.content_container {
  margin-top: 3%;
}
</style>
