<template>
  <div class="img-list">
    <div class="img-box">
      <p class="img-item">
        <a href="#/button" class="page-link">按钮</a>
      </p>
    </div>
    <div class="img-box">
      <p class="img-item">
        <a href="#/list" class="page-link">列表</a>
      </p>
    </div>
    <div class="img-box">
      <p class="img-item">
        <a href="#/nav" class="page-link">导航</a>
      </p>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
  .img-list{
    width: 300px;
    height: 200px;
  }
  .img-box{
    background-color: aqua;
    width: 30%;
    height: 100%;
    display: inline-block;
  }
  .page-link{
    margin: 0 auto;
    text-align: center;
  }
  .img-item{
    margin: 0 auto;
    position: relative;
    top:45%;
  }
</style>
