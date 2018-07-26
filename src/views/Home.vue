<template>
  <div class="home">
    <div>
      <!-- <router-link to="info">Info</router-link> |
      <router-link to="overview">Overview</router-link> -->
      <span @click="toGo('info')">Info</span> |
      <span @click="toGo('overview')">Overview</span>
    </div>
    <img src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    toGo(toRouter) {
      if (toRouter === 'info') {
        this.$router.push({ name: 'info' });
      } else {
        this.$router.push({ name: 'overview', params: { id: 123 } });
      }
    }
  }
};
</script>
