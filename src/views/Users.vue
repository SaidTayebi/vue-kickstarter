<template>
  <div v-if='!users.loading' class='users-list'>
    {{users.data.length}}
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters(['users'])
    },
    methods: mapActions(['getUsers']),
    created() {
      this.getUsers()
    }
  }
</script>

<style lang='scss' scoped>
</style>
