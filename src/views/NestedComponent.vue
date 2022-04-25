<template>
    <div>
        <h1>Hello</h1>
        <hr>
        <PageTitle />
        <hr>
        <PageTitle2 title="부모 컴포넌트에서 자식으로 전달한 제목"/>
        <hr>
        <PageTitle2 :title="title"/>
        <hr>
        <page-title2 :title="title" :likes="123"/>
        <hr>
        <page-title2 :likes="3333"/>
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
import PageTitle2 from '../components/PageTitle2.vue';

export default {
    components : {
        PageTitle, PageTitle2
    },
    data() {
        return {
            title : "동적 부모 타이틀"
        }
    }
}
</script>