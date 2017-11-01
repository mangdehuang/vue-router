<template>
  <div class="uNav" @click="clickNav">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark" :class="{active:item.active}">{{item.label}}</div></el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
      name:'uNav',
      data(){
          return{
          }
      },
      props:{
          label:{
              default:'nav'
          },
          item:{

          },
          index:{}
      },
      methods:{
        clickNav(){
            this.item.active = true;
            this.item.index = this.index;
            this.$emit('navClick',this.item);
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
