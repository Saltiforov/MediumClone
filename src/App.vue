<!--<script src="../../../mediumclone_vue-06-register-layout/src/router/index.js"></script>-->
<template>
  <div>
    <mcv-topbar/>
    <router-view></router-view>

  </div>
</template>

<script>


import McvRegister from "@/views/Register";
import McvLogin from "@/views/Login";
import McvTopbar from "@/components/Topbar";
import {actionTypes} from "@/store/modules/auth";

export default {
  name: 'App',
  components: {
    McvTopbar,
    McvRegister,
    McvLogin
  },
  mounted() {
    console.log('heello app')
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
