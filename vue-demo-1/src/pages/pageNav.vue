<template>
  <div>
    <uNav v-for="(item,index) in navlist" :label="item.label" :key="index" :index="index">
    </uNav>
  </div>

</template>
<script>
  import uNav from '../components/uNav'
  export default{
      name:'pageNav',
      data(){
          return {
            navlist:[
              {
                label:"首页",
                value: 0,
              },
              {
                  label:'列表',
                  value:1,
              },
              {
                  label:'关于',
                  value:2
              }
            ]
          }

      },
      components:{
        uNav
      }
  }
</script>
<style scoped>
</style>
