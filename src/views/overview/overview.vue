<template>
  <div class="overview">
    <div class="overview-info overview-info-avatar">
      <img :src="srcData" alt="">
    </div>
    <p class="overview-info-title">hello jumps</p>
    <div class="overview-info">
      <el-button @click="saySomething">saySomething</el-button>
    </div>
    <div class="overview-info" style="margin-top: 20px;">
      <el-button @click="toLogin">Login</el-button>
    </div>
  </div>
</template>
<script>
import mixins from 'assets/mixins';
export default {
  name: 'overview',
  mixins: [mixins],
  data() {
    return {
      srcData: 'assets/haha.jpg'
    }
  },
  methods: {
    saySomething() {
      this.sayHello();
    },
    toLogin() {
      this.$router.push('login');
    }
  }
}
</script>
<style lang="scss">
  .overview {
    width: 100%;
    .overview-info-avatar {
      img {
        width: 200px;
        height: 200px;
        margin: 0 auto
      }
    }
    .overview-info-title {
      text-align: center;
    }
  }
</style>


