<template>
 <child-component2 @send-message="sendMessage" ref="child_component2" />
</template>

<script>
import ChildComponent2 from './ChildComponent2';
export default {
 components: {ChildComponent2},
 mounted() {
   this.$refs.child_component2.callFromParent();
 }
}
</script>