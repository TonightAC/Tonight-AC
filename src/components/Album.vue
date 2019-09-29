<template>
  <el-main class="el-main">
    <section style="border-bottom: none;
    margin: 0;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;">
      <div class="stable"></div>
    </section>
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
  .stable {
    background: url(https://s.w.org/images/home/collage-min.jpg?4) top;
    background-image: url(https://s.w.org/images/home/collage-min.jpg?4);
    background-position-x: center;
    background-position-y: top;
    background-size: cover;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    -webkit-background-size: cover;
    background-size: cover;
    -webkit-box-shadow: inset 0 0 8px rgba(0,0,0,.4);
    box-shadow: inset 0 0 8px rgba(0,0,0,.4);
    height: 300px;
    width: 100%;
  }
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
