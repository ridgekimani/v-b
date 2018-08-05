<template>
  <article class="article-content">
      <div>
        <div class="image"></div>
        <h3>{{ art.blogTitle }}</h3>
        <div>
          {{ art.blogBody }}
        </div>
        <nuxt-link
          :to="link"
          class="continue-reading"

        >
          Continue Reading
        </nuxt-link>
      </div>
  </article>

</template>

<script>
    export default {
      name: "Article",
      computed: {
        link: function () {
          return `/${this.art.document}`
        }
      },
      data: function() {
        return {
          art: {
            blogTitle: '',
            blogImage: '',
            blogBody: '',
            document: ''
          }
        }
      },
      props: {
        article:{},
        index: '',
      },
      created() {
        const data = {}
        this.article.blocks.forEach((val) => {
          data[val.name] = val.value
          data['document'] = val.document
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
  .continue-reading {
    background-color: white;
    color: black;
    border: 1px solid rgb(244, 126, 0);
    border-radius: 5rem;
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 8px;
    padding-left: 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-top: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  .continue-reading:hover {
    background-color: rgb(244, 126, 0);
    color: white;
  }
</style>
