<template>
  <div>
    <Header />
    <nuxt/>
  </div>
</template>

<style>
html
{
  font-family: 'Lora', serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: 'Lora', serif;
}
</style>
<script>
  import Header from "~/components/Header";
  export default {
    components: { Header }
  }
</script>
