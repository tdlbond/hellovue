<template>
  <div id="aaa">
    <h4 v-text="showMessage"></h4>
    <slot>vue组件插槽</slot>
  </div>  
</template>
<script>
export default {
  name: 'comTest',
  props: {
    message: String
  },
  data() {
    return {

    }
  },
  computed: {
    showMessage() {
      return this.message;
    }
  },
  methods: {

  },
  watch: {
    showMessage(newVal, oldVal) {
      if (newVal === 'tell') {
        this.$emit('childChange');
      }
    }
  }
}
</script>
<style lang="scss">
  #aaa {
    h4 {
      height: 18px;
    }
  }
</style>


