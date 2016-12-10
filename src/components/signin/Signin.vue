<template>
  <div class='signin'>
    <el-form ref='form' :model='form' label-width='120px'>
      <el-form-item label='Email'>
        <el-input v-model='form.email'></el-input>
      </el-form-item>
      <el-form-item label='Password'>
        <el-input type='password' v-model='form.password'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' @click='onSubmit'>Sign in</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        form: {
          email: 'test@test.com',
          password: 'test'
        }
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    methods: {
      ...mapActions(['signIn']),
      onSubmit() {
        this.signIn(this.form);
      }
    },
    watch: {
      'currentUser.success': {
        handler(success) {
          if (success) {
            this.$router.push('/')
          }
        },
        deep: true
      }
    }
  }

</script>

<style lang='scss' scoped>
  .signin {
    display: flex;
    justify-content: center;

    form {
      width: 400px;
    }
  }
</style>
