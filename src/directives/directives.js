export default (Vue) => {
  Vue.directive('focus', {
    inserted(el) {
      el.focus();
    }
  })
}