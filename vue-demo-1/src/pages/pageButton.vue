<template>
  <div>
    <uButton msg="确定"></uButton>
    <uButton msg="确定1"></uButton>
    <uButton msg="取消"></uButton>
  </div>
</template>
<script>
  import uButton from '../components/uButton'
  export default{
     name:'pageButton',
     data(){
          return{
          }
     },
    components:{
      uButton
    }
  }
</script>
<style scoped>
</style>
