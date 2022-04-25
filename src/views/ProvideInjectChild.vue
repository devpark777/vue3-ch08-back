<template>
<div>부모로 부터 받은 것:{{itemLength}}</div>
</template>
<script>
export default {
  inject: ['itemLength'],
  mounted() {
    console.log(this.itemLength);
  }
}
</script>