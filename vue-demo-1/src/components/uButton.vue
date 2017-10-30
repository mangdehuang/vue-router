<template>
  <el-button>{{msg}}</el-button>
</template>
<script>
  export default {
    name:'uButton',
    data(){
        return {}
    },
    props:{
      msg:{
        default:'按钮'
      }
    },
  }
</script>
<style scoped>
</style>
