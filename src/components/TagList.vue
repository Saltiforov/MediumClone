<template>
    <ul class="tag-list">
      <li class="tag-default tag-pill tag-outline ng-binding ng-scope" v-for="tag in tags" :key="tag">
        {{ tag }}
      </li>
    </ul>
</template>

<script>
import {actionTypes} from  '@/store/modules/popularTags'
import {mapState} from 'vuex'
export default {
name: "McvTagList",
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
