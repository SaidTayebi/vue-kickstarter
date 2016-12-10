<template>
  <div class='app'>
      <el-menu mode='horizontal' :router='true'>
        <el-menu-item index='/'>Home</el-menu-item>
        <el-menu-item v-if='isAuthenticated' index='/users'>Users</el-menu-item>
        <el-menu-item v-if='!isAuthenticated' index='/signin'>Sign in </el-menu-item>
        <el-menu-item v-if='!isAuthenticated' index='signup'>Sign up </el-menu-item>
        <el-menu-item v-if='isAuthenticated' index='/' @click.native='logout'>Sign out</el-menu-item>
      </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-default/index.css'
  import {mapActions, mapGetters} from 'vuex'
  import Vue from 'vue'

  export default {
    name: 'app',
    data() {
      return {
        isAuthenticated: false
      }
    },
    computed: {
      ...mapGetters(['currentUser', 'users'])
    },
    methods: {
      ...mapActions(['getUsers']),
      logout() {
        window.localStorage.removeItem('token')
        this.isAuthenticated = false
      }
    },
    watch: {
      'currentUser.success': {
        handler(success) {
          if (success) {
            window.localStorage.setItem('token', this.currentUser.data.token)
            this.isAuthenticated = true
            Vue.http.interceptors.push((request, next) => {
              if (request.url !== 'api/authenticate/') {
                request.headers.set('x-access-token', window.localStorage.getItem('token'))
              }

              // continue to next interceptor
              next(response => {
                if (response && response.status === 403) {
                  window.localStorage.removeItem('token')
                  this.$router.push('/signin')
                }
              })
            })
          } else {
            // window.localStorage.removeItem('token')
            this.isAuthenticated = false
          }
        },
        deep: true
      }
    },
    created() {
      console.log('created')
    }
  }
</script>

<style lang='scss'>
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    h1 {
      font-weight: normal;
    }
  }
</style>
