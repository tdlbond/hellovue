<template>
  <div class="content">
    <div class="forms">
      <el-form ref="loginForm" :model="formData" label-width="80px">
        <el-form-item label="名称：">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="描述：">
          <el-input type="textarea" id="description" v-model="formData.desc"></el-input>
          <div id="createBtnBlock" style="display: flex;justify-content: space-between;margin-top: 10px;">
            <el-button @click="createBuffer" :disabled="!formData.desc">创建及下载二进制文件</el-button>
          </div>
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
        password: '',
        desc: ''
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
      
    },
    createBuffer() {
      if (this.formData.desc) {
        let descVal = document.getElementById('description').value;
        if (!window.URL) {
          alert('浏览器不支持URL API的使用');
        }
        let descBlob = new Blob([descVal], { type: 'text/plain' });
        let descA = document.createElement('a');
        descA.download = 'description';
        descA.href = URL.createObjectURL(descBlob);
        document.getElementById('createBtnBlock').appendChild(descA); 
        descA.click();
        URL.revokeObjectURL(descA.href);
        document.getElementById('createBtnBlock').removeChild(descA);
      }
    }
  },
  created() {
    console.log('hahaha');
    console.log('hehehe');
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

