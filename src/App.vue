<template>
  <div id="app">
    <!-- <headerc></headerc> -->
    <!-- <navigation></navigation> -->
    <router-view/>
  </div>
</template>

<script>

import headerc from '@/components/Header'
import navigation from '@/components/Navigation'

export default {
  name: 'App',
  components:{
    headerc,
    navigation
  },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
