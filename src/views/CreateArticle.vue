<template>
  <div>
    <mcv-article-form
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
    />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import McvArticleForm from "@/components/ArticleForm";
import {actionTypes} from "@/store/modules/createArticle";

export default {
name: "McvCreateArticle",
  components: {McvArticleForm},
  data() {
  return {
    initialValues: {
      title: '',
      description: '',
      body: '',
      tagList: []
    },
  }
  },
  methods: {
    onSubmit(articleInput){
      this.$store.dispatch(actionTypes.createArticle, {articleInput})
          .then(article => {
        this.$router.push({name: 'article', params:{slug: article.slug}})
      })

    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.createArticle.isSubmitting,
      validationErrors: state => state.createArticle.validationErrors
    })
  }
}
</script>

<style scoped>

</style>
