<template>
 <child-component @send-messageA="sendMessage" />
  부모:{{msg}}
</template>

<script>
import ChildComponent from './ChildComponent4';
export default {
 components: {ChildComponent},
 data() {
   return {
     msg : ''
   }
 },
 methods: {
   sendMessage(data) {
     this.msg = data
     console.log(data);
   }
 }
}
</script>