<template>
  <el-main class="el-main">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 6" :key="item">
        <el-image :src="url" style="height: 100%" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
  </el-main>
</template>

<script>
export default {
  name: 'Album',
  data () {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 0;
    height: 100%;
  }
</style>
