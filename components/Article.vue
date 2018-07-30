<template>
  <article class="article-content">
      <div>
        <img :src="art.blogImage"/>
        <h3>{{ art.blogTitle }}</h3>
        <div>
          {{ art.blogBody }}
        </div>
      </div>
  </article>

</template>

<script>
    export default {
      name: "Article",
      data: function() {
        return {
          art: {
            blogTitle: '',
            blogImage: '',
            blogBody: ''
          }
        }
      },
      props: {
        article:{}
      },
      mounted() {
        const data = {}
        this.article.blocks.forEach((val) => {
          data[val.name] = val.value
          this.art = data
        })
      }
    }
</script>

<style scoped>
  .article-content {
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
