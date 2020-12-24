<template>
  <ul class="error-messages">
    <li v-for="errorMessage in errorMessages" :key="errorMessage.id">{{errorMessage}}</li>
  </ul>
</template>

<script>
export default {
name: "McvValidationErrors",
  props:{
    validationErrors: {
      type:Object,
      required:true
    }
  },
  computed: { // используем его для вычесления свойств которые лежат внутри приложения!!!
  errorMessages(){
    return Object.keys(this.validationErrors).map(name => {
      const messages = this.validationErrors[name].join(', ')
      return `${name} ${messages}`
    })
  }
  }
}
</script>

<style scoped>

</style>
