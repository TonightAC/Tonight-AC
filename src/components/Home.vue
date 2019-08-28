<template>
  <el-main class="el-main">
    <el-avatar :src="avatarUrl" class="el-avatar"></el-avatar>
    <div class="zoom">
      <p>我叫冉子硕</p>
      <p>aka大吉大利，今晚AC</p>
      <p>Welcome, or welcome back!</p>
      <p>It's hard to say who I am</p>
      <p>A weirdo I suppose ：）</p>
    </div>
    <div style="margin-top: 60px">
      <span style="font-size: 14px; color: white">给我的主页打分：</span>
      <el-rate  text-color="#FFFFFF" @change="rate" style="margin-top: 10px; margin-bottom: 10px" v-model="value" show-text :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
      <span v-if="rated" style="color: white;font-size: 14px" >已有{{ ratedPeople }}人打分，平均分：{{ratedAverage}}</span>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      value: 0,
      rated: false,
      ratedPeople: 0,
      ratedAverage: 0.0,
      avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      defaultActive: 'home'
    }
  },
  created () {
    // document.getElementsByClassName('zoom').style.translate3d(0, 0, 0)
    this.axios.get('/rate/getRate').then(res => {
      if (res.data !== 'error') {
        this.ratedPeople = parseInt(res.data.ratedPeople)
        this.ratedAverage = parseFloat(res.data.ratedAverage).toFixed(1)
        this.value = parseInt(res.data.rate)
        this.rated = true
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    rate () {
      this.axios.get('/rate/setRate?rate=' + this.value).then(res => {
        this.ratedPeople = parseInt(res.data.ratedPeople)
        this.ratedAverage = parseFloat(res.data.ratedAverage).toFixed(1)
        this.rated = true
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  p {
    color: white;
  }
  .el-avatar {
    margin-top: 60px;
    height: 50px;
    width: 50px;
    animation: rotate 5s ease-in-out 5s infinite alternate;
    /*transition: all 1s;*/
  }
  @keyframes rotate {
    0%, 75% {
      transform: rotate(-720deg);
    }
    75%, 100% {
      transform: rotate(0deg);
    }
  }
  /*.el-avatar:hover {*/
  /*   transform: rotate(-720deg);*/
  /* }*/
  .zoom {
    /*margin-top: 100px;*/
    animation: goup 1s ease 0.2s 1 forwards;
    transform: translate3d(0, 20px, 0);
    color: rgba(0, 0, 0, 0);
    /*transition: all 1s;*/
  }
  @keyframes goup {
    to {
      transform: translate3d(0, 0, 0);
      color: rgba(0, 0, 0, 255);
    }
  }
  /*.zoom:hover {*/
  /*  transform: translate3d(0, 0, 0);*/
  /*}*/
  .el-main {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    background-image: url('../assets/background.png');
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    /*line-height: 60px;*/
  }
</style>
