<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>
<script>
  export default {
    name:'uList',
    data(){
          return{
            value:'12',
              options:[
                {
                    value:'11',
                    label:'op1'
                },
                {
                    value:'12',
                    label:'op2'
                }
              ]
          }
    }
  }
</script>
<style scoped>
</style>
