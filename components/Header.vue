<template>
  <nav class="top-bar">
    <nuxt-link to="/">
      <img
        src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2018/02/logo_retina_248.png"
        class="nav-image"
      />
    </nuxt-link>

    <ul class="top-bar-items">
      <li class="top-bar-list-item">Home</li>
      <li class="top-bar-list-item">Latest</li>
      <li class="top-bar-list-item">About Me</li>
      <li class="top-bar-list-item">Contact Me</li>
    </ul>
  </nav>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .top-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: auto;
    min-height: 50px;
    z-index: 100;
    border-bottom: 1px solid #eee;
    background-color: white;
  }

  .nav-image {
    height: 30px;
  }
  .top-bar-items {
    display: inherit;
  }

  .top-bar-list-item {
    padding-left: 100px;
  }

</style>
