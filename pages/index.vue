<template>
  <main>
    <div class="content">
      <Article
        v-for="(article, index) in articles"
        :key="article.key"
        :article="article"
        :index="index+1"
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
    async asyncData(context) {
      const response = await context.app.$axios.get("/folder/5b54c88a9515380013402617")
      return {
        articles: response.data.documents
      }
    }
  }
</script>

<style>
  .content {
    padding-top: 100px;
    display: flex;
    flex-direction: column-reverse;
  }
</style>
