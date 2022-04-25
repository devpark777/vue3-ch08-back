<template>
<div>
 <button type="button" @click="checkChild">(보모)자식 컴포넌트 데이터 조회</button>
 <hr>
 <child-component ref="child_component" />
 <hr>
 <!-- {{msg}} -->
 {{msg2}}
 </div>
</template>

<script>
import ChildComponent from './ChildComponent5';

export default {
 components: {ChildComponent},
 data() {
   return {
     msg2 :  'abcdefg',
   }
 },
 computed: {
   msg(){
     return this.$refs.child_component.msg;
   }
 },
 methods: {
   checkChild() {
     alert(this.msg);
   }
 }
}
</script>