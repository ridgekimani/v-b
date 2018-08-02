<template>
  <article class="article-content">
    <div>
      <img :src="article.blogImage"/>
      <h3>{{ article.blogTitle }}</h3>
      <div>
        {{ article.blogBody }}
      </div>
    </div>
  </article>
</template>

<script>
  const article = {
    blogImage: '',
    blogTitle: '',
    blogBody: '',
    document: ''
  }
    export default {
      name: "single_article",
      data: function() {
        return { article }
      },
      async asyncData({ params, payload, app })  {
        if (!payload) {
          const data = {}
          const response = await app.$axios.get(`/document/${params.id}`)
          response.data.blocks.forEach(val => {
            data[val.name] = val.value
          })
          return {
            article: data
          }

        }
        if (payload.id === params.id) {
          const data = {}
          payload.blocks.forEach(val => {
            data[val.name] = val.value
          })
          return {
            article: data
          }
        }
        return {
          article: {}
        }
      }
    }
</script>

<style scoped>
  .article-content {
    padding-top: 100px;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 880px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 5rem;
  }

</style>
