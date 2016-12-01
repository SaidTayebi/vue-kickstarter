<template>
  <div class='hello'>
    <h1>{{message}}</h1>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      message: 'Welcome to Your Vue.js Kickstarter'
    }
  }
}
</script>

<style lang='scss' scoped>
  .hello {
    h1 {
      font-weight: normal;
    }
  }
</style>
