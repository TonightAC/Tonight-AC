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
        <h1 style="color: black">“呱呱呱”，河里的青蛙说：“嘿，你们说得都对，可是，你们又都说错了，世界上最热的东西就在你们的头顶上。”说完，青蛙“扑通”一声跳进了河里。</h1>
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
::-moz-selection{background:#3A2012;color:#F3F3F5}
::selection{background:#3A2012;color:#F3F3F5}
.clearfix{display:inline-block}
.clearfix::after{content:"";visibility:hidden;display:inline-block;font-size:0;clear:both;height:0}
.tekst{color:#3A2012;font-family:Arial,sans-serif;text-transform:uppercase;font-size:14px;line-height:28px;font-weight:bold;display:block;letter-spacing:2px;max-width:100%;text-align:center;position:absolute;bottom:20px;left:30px;z-index:99}
a{color:#D67B32;text-decoration:none;cursor:pointer}
a:hover{text-decoration:underline}
.outer{display:table;margin:0 auto;height:100%}
.middle{display:table-cell;vertical-align:middle}
.main{padding:4px}
@media (max-width:560px){.main{-webkit-transform:scale(0.75);transform:scale(0.75)}}
@media (max-width:420px){.main{-webkit-transform:scale(0.5);transform:scale(0.5);min-width:200px}body,html{overflow-x:auto}}
.squirrel{position:relative;width:166px;height:214px;margin-top:260px;margin-left:160px}
.squirrel .skin{position:absolute;top:0;left:0;width:166px;height:214px;background:#F99C3C;border-radius:0 110px 0 0}
.squirrel .ear{position:absolute;top:-50px;width:25px;height:50px;background:#F99C3C}
.squirrel .ear.left{left:-25px;border-radius:25px 0 0 25px}
.squirrel .ear.right{left:80px;border-radius:0 25px 25px 0}
.squirrel .eye{position:absolute;top:50px;width:50px;height:50px;background:#FEFEFE;border-radius:50px}
.squirrel .eye.left{left:25px}
.squirrel .eye.right{right:25px}
.squirrel .eye span{position:absolute;top:50%;left:50%;width:26px;height:26px;margin-top:-13px;margin-left:-13px;background:#3A2012;border-radius:26px}
.squirrel .belly{position:absolute;bottom:0;left:50%;width:100px;height:50px;margin-left:-50px;background:#FABA71;border-radius:50px 50px 0 0}
.squirrel .nose{position:absolute;top:103px;left:50%;width:12px;height:6px;margin-left:-6px;background:#3A2012;border-radius:0 0 12px 12px}
.squirrel .mouth{position:absolute;top:116px;left:50%;width:50px;height:25px;margin-left:-25px;background:#3A2012;border-radius:0 0 25px 25px}
.squirrel .mouth .tooth{position:absolute;top:0;left:50%;width:26px;height:13px;margin-left:-13px;background:#FEFEFE;border-radius:0 0 13px 13px}
.squirrel .leg{position:absolute;bottom:0;width:25px;height:12px;background:#3A2012;border-radius:25px 25px 0 0}
.squirrel .leg.left{left:25px}
.squirrel .leg.right{right:25px}
.squirrel .tail{position:absolute;bottom:0;left:-111px;width:166px;height:310px}
.squirrel .tail .square{position:absolute;top:0;left:0;width:166px;height:310px;background:#D67B32;border-radius:0 0 0 110px}
.squirrel .tail .square .sh{position:absolute;top:0;right:0;width:66px;height:310px;background:#D67B32;-moz-box-shadow:inset -60px 0 60px -60px rgba(0,0,0,0.2);-webkit-box-shadow:inset -60px 0 60px -60px rgba(0,0,0,0.2);box-shadow:inset -60px 0 60px -60px rgba(0,0,0,0.2)}
.squirrel .tail .circle{position:absolute;top:-150px;left:-138px;width:304px;height:304px;background:#D67B32;border-radius:152px;-webkit-transform:rotate(15deg);transform:rotate(15deg);-moz-box-shadow:inset 0 0 60px rgba(0,0,0,0.2);-webkit-box-shadow:inset 0 0 60px rgba(0,0,0,0.2);box-shadow:inset 0 0 60px rgba(0,0,0,0.2)}
.squirrel .tail .circle::before{content:"";position:absolute;bottom:0;right:0;width:152px;height:152px;background:#AD6326;border-radius:0 0 152px 0}
.squirrel .nut{position:absolute;bottom:5px;right:-55px;width:25px;height:30px;background:#D47B33;border-radius:25px 0 0 25px}
.squirrel .nut .hood{position:absolute;bottom:-5px;right:-20px;width:20px;height:40px;background:#3A2012;border-radius:0 25px 25px 0}
.squirrel .nut .hood::before{content:"";position:absolute;top:50%;right:-14px;width:15px;height:8px;margin-top:-3px;background:#3A2012;border-radius:0 0 15px 15px}
.squirrel .eye span{-webkit-animation:animation 10s infinite ease-in-out;animation:animation 10s infinite ease-in-out;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out}
.squirrel:hover .eye span{position:absolute;top:65%;left:65%}
@-webkit-keyframes animation{0%, 4%, 6%, 49%, 51%, 53%, 100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}5%, 50%, 52%{-webkit-transform:rotateX(90deg);transform:rotateX(90deg)}}
@keyframes animation{0%, 4%, 6%, 49%, 51%, 53%, 100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}5%, 50%, 52%{-webkit-transform:rotateX(90deg);transform:rotateX(90deg)}}

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
