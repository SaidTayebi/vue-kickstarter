<template>
  <div class='signup'>
    <el-form ref='form' :model='form' label-width='120px'>
      <el-form-item label='Firstname'>
        <el-input v-model='form.firstName'></el-input>
      </el-form-item>
      <el-form-item label='Lastname'>
        <el-input v-model='form.lastName'></el-input>
      </el-form-item>
      <el-form-item label='Email'>
        <el-input v-model='form.email'></el-input>
      </el-form-item>
      <el-form-item label='Password'>
        <el-input type='password' v-model='form.password'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' @click='onSubmit'>Sign up</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapActions(['signUp']),
      onSubmit() {
        this.signUp(this.form);
      }
    }
  }

</script>

<style lang='scss' scoped>
  .signup {
    display: flex;
    justify-content: center;

    form {
      width: 400px;
    }
  }
</style>
