<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <button type="button" @click="모달창=true">모달보기</button>

  <modal-layout v-if="모달창==true">
    <template #header>
      <h1>여기는 모달 페이지 입니다</h1>
    </template>  
     <template #default>
         <p>여기는 모달 페이지본문입니다</p> 
         <p>여기는 모달 페이지본문입니다</p> 
      </template>
     <template #footer>
          <button type="button" @click="모달창=false">닫기</button>
      </template>
  </modal-layout>  

  <div></div>
</template>
<script>
import ModalLayout from './SlotModalLayout.vue'
export default {
  components : {
    ModalLayout
  },
  data() {
    return {
      모달창:false,
    }
  } 
}
</script>
