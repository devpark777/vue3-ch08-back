<template>
 <h1>자식:CC4</h1>
<div></div>
</template>
<script>
export default {
 data() {
   return {
     msg: '자식 컴포넌트로부터 보내는 메시지'
   };
 },
 mounted() {
   this.$emit('send-messageA', this.msg)
 }
}
</script>