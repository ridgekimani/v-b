<template>
  <main>
    <header>
      <Header />
    </header>
    <div class="content">
      <Article
        v-for="article in articles"
        :key="article.key"
        :article="article"
      />
    </div>
  </main>

</template>

<script>
  import Header from "~/components/Header";
  import Article from "~/components/Article";


  export default {
    data: function () {
      return  {
        articles: [],
      }
    },
    components: {Article, Header},
    mounted: async function() {
      this.$axios.setToken(process.env.apiKey)
      this.$axios.setHeader("Tipe-Id", process.env.secretKey)

      const response = await this.$axios.get("/folder/5b54c88a9515380013402617")
      this.articles = response.data.documents
    }
  }
</script>

<style>
  .content {
    padding-top: 100px;
  }
</style>
