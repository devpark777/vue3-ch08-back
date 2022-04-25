<template>
    <div>
        <h1>Hello</h1>
        
        <P159Child propC="TestC"/>
        <hr>
        <P159Child :propD="120"/>
        <hr>
        <P159Child propC="TestC" :propE="objectA"/>
        <hr>
        <P159Child propC="TestC" propF="danger2" :propG="propGF" />
    </div>
</template>

<script>
import P159Child from '../components/P159Child.vue';

export default {
    components : {
        P159Child
    },
    data() {
        return {
            title : "동적 부모 타이틀",
            objectA : {
                name1: "홍길동",
                age : 25
            }
        }
    },
    method : {
        propGF() {
            return 5;
        }
    }
}
</script>