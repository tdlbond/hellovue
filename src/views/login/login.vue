<template>
  <div class="content">
    <div class="forms">
      <el-form ref="loginForm" :model="formData" label-width="80px">
        <el-form-item label="名称：">
          <el-input :model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input :model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="count：">
          <p>{{ count }}</p>
        </el-form-item>
        <el-form-item>
          <el-button @click="ok('loginForm')">确定</el-button>
          <el-button @click="cancel()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import mixins from 'assets/mixins';
import { mapState } from 'vuex';
export default {
  name: 'login',
  mixins: [mixins],
  data() {
    return {
      formData: {
        name: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    ok(formName) {
      this.$router.push('/');
    },
    cancel() {
      console.log(this.$store.state.count);
    }
  },
  created() {
    
  }
}
</script>
<style lang="scss">
  .content {
    width: 100%;
    .forms {
      margin: 0 auto;
      margin-top: 100px;
      width: 500px;
    }
  }
</style>

