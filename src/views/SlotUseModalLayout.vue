<template>
  <modal-layout v-if="play==true">
      <template v-slot:header>
        <h1>팝업 타이틀</h1>
      </template>
      <template v-slot:default>
           <p>팝업컨텐츠 1</p>            
           <p>팝업컨텐츠 2</p>            
      </template>
      <template #footer>
          <button type="button"  @click="modalClose">닫기</button>
      </template>
  </modal-layout>  
  <hr>
  <ModalLayout  v-if="play==true">
       <template #header>
        <h1>팝업 타이틀</h1>
      </template>
       <template v-slot:footer>
          <button type="button" @click="modalClose">닫기</button>
      </template>
  </ModalLayout>  
<hr>
  <page-title title="컴포넌트 사용 예제 페이지"></page-title>
  <hr>

  <PageTitle2>컴포넌트 사용 예제 페이지2</PageTitle2>
  <hr>
  <PageTitleP169>P169 컴포넌트 간단히 사용한 예제</PageTitleP169>

  
  <div></div>
</template>

<script>
import ModalLayout from './SlotModalLayout.vue'
import PageTitle from '../components/PageTitle.vue'
import PageTitle2 from '../components/PageTitle2.vue'
import PageTitleP169 from '../components/PageTitleP169.vue'
export default {
    components : {
        ModalLayout,
        PageTitle,
        PageTitle2,
        PageTitleP169

    },
    data() {
      return {
        play : true,
      }
    },
    methods: {
      modalClose() {
        this.play = false;
      }

    },

    
}
</script>