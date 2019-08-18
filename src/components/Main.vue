<template>
  <el-container style="position: absolute; top: 0; left: 0; width: 100%; min-height: 100%; height: auto;">
    <el-header class="el-header" :style="{ backgroundColor: headerColor }">
      <div class="mobile">
        <el-row>
          <el-col :span="6"><div style="margin-top: 10px">
            <el-dropdown trigger="click" class="mobile" style="margin-top: 15px; margin-left: 5px">
<!--              <el-image style="font-size: 16px; margin-top: -4px; margin-left: -8px; width: 22px; height: 22px;" src="../assets/bulbOn.png" fit="fill"/>-->
              <img style="font-size: 16px; margin-top: -4px; margin-left: -8px; width: 22px; height: 22px;" src="../assets/bulbOn.png"/>
<!--              <i class="el-icon-s-opportunity" style="font-size: 16px; margin-top: -2px" :style="{ color: bulbColor }"></i>-->
              <el-dropdown-menu slot="dropdown" style="margin-top: 21px">
                <el-dropdown-item icon="el-icon-house" @click.native="switchHome">主页</el-dropdown-item>
                <el-dropdown-item icon="el-icon-takeaway-box" @click.native="switchExperience" divided>个人经历</el-dropdown-item>
                <el-dropdown-item icon="el-icon-chat-line-square" @click.native="switchBoard" divided>留言板</el-dropdown-item>
                <el-dropdown-item icon="el-icon-sunrise" @click.native="switchAlbum" divided>相册</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div></el-col>
          <el-col :span="18">
            <div v-if="experienceShow" style="text-align: right; margin-top: 25px">
              <el-tooltip content="182-9791-7232" placement="bottom-end" effect="light">
                <i class="el-icon-phone-outline" style="margin-right: 25px"></i>
              </el-tooltip>
              <el-tooltip content="suresursus@outlook.com" placement="bottom-end" effect="light">
                <i class="el-icon-message" style="margin-right: 25px"></i>
              </el-tooltip>
              <el-tooltip content="安徽省合肥市合肥工业大学翡翠湖校区" placement="bottom-end" effect="light">
                <i class="el-icon-location-outline"></i>
              </el-tooltip>
            </div>
            <div v-else style="text-align: right; margin-top: 10px;">
            <el-badge :value="1" class="item" :hidden="badgeHidden">
              <el-switch v-model="nightMode" @change="nightSwitch" active-text="夜间模式"></el-switch>
              <el-divider  direction="vertical"></el-divider>
              <el-button style="width: 40px; padding-left: 0; padding-right: 0" type="primary" :icon="starIcon" @click="clickStar" :disabled="starDisabled"></el-button>
            </el-badge>
          </div></el-col>
        </el-row>
      </div>
      <div class="pc">
        <el-row>
          <el-col :span="18"><div>
            <el-menu :default-active="defaultActive" :style="{ backgroundColor: headerColor }" class="el-menu" mode="horizontal" @select="handleSelect">
              <el-menu-item index="home" @click="switchHome">主页</el-menu-item>
              <el-menu-item index="experience" @click="switchExperience">个人经历</el-menu-item>
              <el-menu-item index="board" @click="switchBoard">留言板</el-menu-item>
              <el-menu-item index="album" @click="switchAlbum">相册</el-menu-item>
            </el-menu>
          </div></el-col>
          <el-col :span="6"><div style="text-align: right; margin-top: 10px;">
              <el-switch v-model="nightMode" @change="nightSwitch" active-text="夜间模式">
              </el-switch>
              <el-divider  direction="vertical"></el-divider>
              <el-badge :value="1" class="item" :hidden="badgeHidden">
                <el-button style="width: 80px" type="primary" :icon="starIcon" @click="clickStar" :disabled="starDisabled">{{ star }}</el-button>
              </el-badge>
            </div></el-col>
        </el-row>
      </div>
    </el-header>
    <el-container :style="{backgroundImage : backgroundImage}">
      <home v-show="blockChoice === 'home'" style="margin-top: 60px; z-index: 1; position: relative"></home>
      <experience v-show="blockChoice === 'experience'" style="margin-top: 60px; z-index: 1; position: relative"></experience>
      <board v-show="blockChoice === 'board'" style="margin-top: 60px; z-index: 1; position: relative"></board>
      <album v-show="blockChoice === 'album'" style="margin-top: 60px; z-index: 1; position: relative"></album>
      <el-footer class="el-footer" v-if="footerShow" :style="{ backgroundColor: footerColor }">
        <div class="pc" style="position: absolute; left: 0; margin-left: 20px; margin-top: 10px">
          <span style="display: block">TONIGHT</span><span style="display: block; font-family: 'American Typewriter'; color: #F06292">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AC</span>
        </div>
        <div class="mobile" style="text-align: center; margin-top: 20px;">
          <el-link href="https://www.zhihu.com/people/zhi-shang-gan-ren/activities" type="primary" :underline="false" target="_blank">我的知乎</el-link>
          <el-divider direction="vertical"></el-divider>
          <el-link href="https://blog.csdn.net/lalala_HFUT" type="primary" :underline="false" target="_blank">我的博客</el-link>
          <el-divider direction="vertical"></el-divider>
          <el-tooltip class="item" effect="dark" content="github is on build" placement="top">
            <el-link href="https://github.com/suresursus" type="primary" :underline="false" target="_blank" disabled><del>我的github</del></el-link>
          </el-tooltip>
        </div>
        <div class="pc" style="display: flex; flex-direction: row; line-height: 0;">
          <div style="flex: 1"></div>
          <div style="flex: 1; margin-top: 25px; text-align: center">
            <el-link href="https://www.zhihu.com/people/zhi-shang-gan-ren/activities" type="primary" :underline="false" target="_blank">我的知乎</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link href="https://blog.csdn.net/lalala_HFUT" type="primary" :underline="false" target="_blank">我的博客</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-tooltip class="item" effect="dark" content="github is on build" placement="top">
              <el-link href="https://github.com/suresursus" type="primary" :underline="false" target="_blank" disabled><del>我的github</del></el-link>
            </el-tooltip>
          </div>
          <div style="flex: 1; text-align: right; margin-top: 25px">
            <el-tooltip content="182-9791-7232" placement="top-end" effect="light">
              <i class="el-icon-phone-outline" style="margin-right: 25px; color: black"></i>
            </el-tooltip>
            <el-tooltip content="suresursus@outlook.com" placement="top-end" effect="light">
              <i class="el-icon-message" style="margin-right: 25px; color: black"></i>
            </el-tooltip>
            <el-tooltip content="安徽省合肥市合肥工业大学翡翠湖校区" placement="top-end" effect="light">
              <i class="el-icon-location-outline" style="color: black"></i>
            </el-tooltip>
          </div>
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Home from '@/components/Home'
import Experience from '@/components/Experience'
import Board from '@/components/Board'
import Album from '@/components/Album'
import { Toast } from 'mint-ui'
export default {
  name: 'Main',
  data () {
    return {
      star: 0,
      starDisabled: false,
      badgeHidden: false,
      nightMode: false,
      footerShow: true,
      experienceShow: false,
      bulbPng: '../assets/bulbOn.png',
      // bulbColor: '#FFB300',
      headerColor: '#FFFFFF',
      footerColor: null,
      starIcon: 'el-icon-star-off',
      defaultActive: 'home',
      blockChoice: 'home',
      contain: '',
      backgroundImage: 'url(' + require('../assets/background.jpg') + ')'
    }
  },
  created () {
    this.axios.get('/star/getTotal').then(res => {
      this.star = parseInt(res.data.total)
      this.contain = res.data.contain
      if (this.contain === 'yes') {
        this.badgeHidden = true
        this.starIcon = 'el-icon-star-on'
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    nightSwitch () {
      if (this.nightMode === true) {
        // this.backgroundImage = 'url(' + require('../assets/Vaporwave-Right.jpg') + ')'
        // this.footerColor = '#5f6368'
        // this.headerColor = '#5f6368'
        this.bulbColor = '#000000'
        // this.nightMode = false change automatically
      } else {
        // this.backgroundImage = null
        // this.footerColor = '#FFFFFF'
        // this.headerColor = '#FFFFFF'
        this.bulbColor = '#FFB300'
        // this.nightMode = true change automatically
      }
    },
    clickStar () {
      this.starDisabled = true
      if (this.badgeHidden === true) {
        this.badgeHidden = false
        this.star--
        this.starIcon = 'el-icon-star-off'
        if (screen.width < 1080) {
          Toast({
            message: 'Okay~',
            position: 'bottom',
            duration: 2000
          })
        } else {
          this.$message({
            message: 'Okay~',
            type: 'warning'
          })
        }
        this.axios.get('/star/cancelStar').then(res => {
          this.starDisabled = false
        }).catch(error => {
          console.log(error)
          this.badgeHidden = true
          this.star++
          this.starIcon = 'el-icon-star-on'
          this.starDisabled = false
        })
      } else {
        this.badgeHidden = true
        this.star++
        this.starIcon = 'el-icon-star-on'
        this.axios.get('/star/setStar').then(res => {
          if (screen.width < 1080) {
            Toast({
              message: '多谢点赞_(:зゝ∠)_',
              position: 'bottom',
              duration: 2000
            })
          } else {
            this.$message({
              message: '多谢点赞_(:зゝ∠)_',
              type: 'success'
            })
          }
          this.starDisabled = false
        }).catch(error => {
          console.log(error)
          this.badgeHidden = false
          this.star--
          this.starIcon = 'el-icon-star-off'
          this.starDisabled = false
        })
      }
    },
    switchHome () {
      this.defaultActive = 'home'
      this.blockChoice = 'home'
      this.footerShow = true
      this.experienceShow = false
    },
    switchExperience () {
      this.defaultActive = 'experience'
      this.blockChoice = 'experience'
      this.footerShow = false
      this.experienceShow = true
    },
    switchBoard () {
      this.defaultActive = 'board'
      this.blockChoice = 'board'
      this.footerShow = false
      this.experienceShow = false
    },
    switchAlbum () {
      this.defaultActive = 'album'
      this.blockChoice = 'album'
      this.footerShow = false
      this.experienceShow = false
    }
  },
  components: {
    Home,
    Experience,
    Board,
    Album
  }
}
</script>

<style scoped>
  .el-header {
    /*background-color: #FFFFFF;*/
    color: #333;
    line-height: 0;
    width: 100%;
    z-index: 2;
    position: fixed;
    background-size: 100px 100px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: right;
  }

  .el-footer {
    filter:Alpha(opacity=50)!important;
    background-color: rgba(0, 0, 0, .5);
    /*color: #333;*/
  }

  .el-menu {
    background: #FFFFFF;
    width: 100%
  }

  .el-menu--horizontal>.el-menu-item:hover {
    border-bottom: 2px solid #409EFF!important;
  }
 </style>
