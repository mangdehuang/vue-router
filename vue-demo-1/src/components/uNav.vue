<template>
  <div class="uNav" @click="clickNav">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark" :class="{active:isActive}">{{label}}</div></el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
      name:'uNav',
      data(){
          return{
              isActive:false
          }
      },
      props:{
          label:{
              default:'nav'
          }
      },
      methods:{
        clickNav(){
            this.isActive = true;
        }
      }
  }
</script>
<style scoped>
  .uNav{
    width: 100px;
    height: 30px;
    display: inline-block;
  }
   .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple-dark{
    background: blanchedalmond;
  }
  .active{
    color: orangered;
  }
</style>
