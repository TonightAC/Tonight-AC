<template>
  <div>
    <i style="z-index: 2; position: absolute; top: 25px; right: 25px; font-size: 30px; background-color: black; color: white" @click="backMain" class="back el-icon-close"></i>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <h1 style="color: black">天真热，动物们聚在一起聊天。</h1>
      </div>
      <div class="section">
        <h1 style="color: black">松鼠说：“我的尾巴是世界上最热的东西，闷得我睡不找觉。”</h1>
      </div>
      <div class="section">
        <h1 style="color: black">熊说：“不，我的毛才热呢，热得我都喘不过气来。”</h1>
      </div>
      <div class="section">
        <h1 style="color: black">狗说：“不，地上的石头才热呢，把我的脚都烫伤了。”</h1>
      </div>
      <div class="section">
        <h1 style="color: black">小麻雀在树上尖叫起来：“不，屋顶的烟囱才热呢，常常冒着烟，差点把我的羽毛给烫焦了。”</h1>
      </div>
      <div class="section">
        <h1 style="color: black">狼从树丛中探出头来：“不，大火才热呢，会烧掉许多东西。”</h1>
      </div>
      <div class="section">
        <h1 style="color: black">“呱呱呱”，河里的青蛙说：“嘿，你们说得都对，可是，你们又都说错了，世界上最热的东西就在你们的头顶上。”</h1>
      </div>
      <div class="section">
        <h1 style="color: black">说完，青蛙“扑通”一声跳进了河里。</h1>
      </div>
      <div class="section">
        <h1 style="color: black">动物们抬起头，感觉红通通、热乎乎的，眼睛也睁不开。</h1>
      </div>
      <div class="section">
          <h1 style="color: black">哦，原来青蛙说的是太阳啊。</h1>
      </div>
    </full-page>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: 'Yard',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    backMain () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
  .section {
    background-color: #fdcb6e;
  }
  .back:hover {
  transform: scale(1.2)
}

@keyframes float {
  50% {
    transform: translate(0, 20px)
  }
}

ellipse {
  transform-origin: center center
}

@keyframes shrink {
  0% {
    width: 90%;
    margin: 0 5%;
  }
  50% {
    width: 60%;
    margin: 0 18%;
  }
  100% {
    width: 90%;
    margin: 0 5%;
  }
}

@keyframes rotate {
  0%, 75% {
    transform: rotate(-720deg)
  }
  75%, 100% {
    transform: rotate(0deg)
  }
}
</style>
