<template>
  <div>
    <uNav v-for="(item,index) in navlist" :key="index" :index="index" :item="item" @navClick="navClick">
    </uNav>
    <div>
      <router-view name="navContent"></router-view>
    </div>
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
                active: true,
              },
              {
                  label:'列表',
                  value:1,
                active: false,
              },
              {
                  label:'关于',
                  value:2,
                active: false,
              }
            ]
          }

      },
      components:{
        uNav
      },
      methods:{
        navClick(item){
          let obj = {label:'test',value:1,active:true};
          for(let i in this.navlist){
              i == item.index ? this.navlist[i].active = true : this.navlist[i].active = false;
          }
        }
      }
  }
</script>
<style scoped>
</style>
