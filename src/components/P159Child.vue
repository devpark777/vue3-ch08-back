<template>
    <h2>A:{{propA}}</h2>
    <h2>B:{{propB}}</h2>
    <h2>C:{{propC}}</h2>
    <h2>D:{{propD}}</h2>
    <h2>E:{{propE}}</h2>
    <h2>F:{{propF}}</h2>
    <h2>F:{{propG}}</h2>
</template>

<script>
export default {
    props : {
       propA: Number,
       propB: [String, Number],
       propC: {
           type : String,
           required : true
       },
       propD: {
           type : Number,
           default : 100,
           validator: value => {
               console.log(value)
              return value >= 100
           }
       },
       propE : {
           type : Object,
           default : function() {
               return { message : 'hello'}
           }
       },
       propF : {
           validator : function(value) {
                return ['success','warning','danger'].indexOf(value) !== -1
             //  return value > 10
           }
       },
       propG: {
           type : Function,
           default: function() {
               return 'Default function'
           }
       }
    }
}
</script>