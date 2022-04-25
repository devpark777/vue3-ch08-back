<template>
 <child-component @send-message="sendMessage" ref="child_component" />
 <ChildComponent  ref="child_component2" />
 <div></div>
</template>

<script>
import ChildComponent from './ChildComponent';

export default {
 components: {ChildComponent},
 mounted() {
   this.$refs.child_component.$refs.btn.click();
   this.$refs.child_component2.$refs.btn.click();
 }
}
</script>