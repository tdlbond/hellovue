<template>
  <div class="overview">
    <div class="overview-info overview-info-avatar">
      <img :src="srcData" alt="">
    </div>
    <p class="overview-info-title" @click="innerGreet">hello jumps</p>
    <div class="overview-info">
      <el-button @click="saySomething">saySomething</el-button>
      <el-button @click="mapaction">mapaction</el-button>
    </div>
    <div class="overview-info" style="margin-top: 20px;">
      <el-button @click="toLogin">Login</el-button>
    </div>
  </div>
</template>
<script>
import mixins from 'assets/mixins';
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  name: 'overview',
  mixins: [mixins],
  data() {
    return {
      srcData: 'assets/haha.jpg'
    }
  },
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    saySomething() {
      this.claCount(2);
    },
    toLogin() {
      this.$router.push({ name: 'login' });
    },
    mapaction() {
      this.addCount(10);
    },
    ...mapMutations({
      claCount: 'CLA_COUNT'
    }),
    ...mapActions([
      'addCount'
    ]),
    innerGreet() {
      this.sayHello();
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


