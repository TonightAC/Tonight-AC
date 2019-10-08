<template>
  <el-container style="position: absolute; top: 0; left: 0; width: 100%; min-height: 100%; height: auto;">
    <el-header class="el-header" :style="{ backgroundColor: headerColor }">
      <div class="mobile">
        <el-row>
          <el-col :span="6"><div style="margin-top: 10px">
            <el-dropdown trigger="click" class="mobile" style="margin-top: 15px; margin-left: 5px">
              <img style="font-size: 16px; margin-top: -8px; margin-left: -8px; width: 30px; height: 30px;" src="../assets/panda.png"  alt="Panda"/>
              <el-dropdown-menu slot="dropdown" style="margin-top: 21px">
                <el-dropdown-item icon="el-icon-house" @click.native="switchHome">主页</el-dropdown-item>
                <el-dropdown-item icon="el-icon-takeaway-box" @click.native="switchExperience" divided>个人经历</el-dropdown-item>
                <el-dropdown-item icon="el-icon-chat-line-square" @click.native="switchBoard" divided>留言板</el-dropdown-item>
                <el-dropdown-item icon="el-icon-toilet-paper" @click.native="switchYard" divided>笑场</el-dropdown-item>
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
              <el-menu-item @click="switchYard">笑场</el-menu-item>
            </el-menu>
          </div></el-col>
          <el-col :span="6"><div style="text-align: right; margin-top: 10px;">
              <el-divider  direction="vertical"></el-divider>
              <el-badge :value="1" class="item" :hidden="badgeHidden">
                <el-button style="width: 80px" type="primary" :icon="starIcon" @click="clickStar" :disabled="starDisabled">{{ star }}</el-button>
              </el-badge>
            </div></el-col>
        </el-row>
      </div>
    </el-header>
    <el-container class="el-container">
      <home v-show="blockChoice === 'home'" style="margin-top: 60px; z-index: 1; position: relative"></home>
      <experience v-show="blockChoice === 'experience'" style="margin-top: 60px; z-index: 1; position: relative"></experience>
      <board v-show="blockChoice === 'board'" style="margin-top: 60px; z-index: 1; position: relative"></board>
      <el-footer class="el-footer" v-if="footerShow" :style="{ backgroundColor: footerColor }">
        <div class="pc">
          <el-row>
            <el-col :span="8">
              <div style="margin-top: 10px">
                <div style="display: inline-block"><span style="display: block">TONIGHT</span><span style="display: block; font-family: 'American Typewriter'; color: #F06292">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AC</span></div>
                <img src="../assets/panda.png" style="display: inline-block; width: 30px; height: 30px">
              </div>
            </el-col>
            <el-col :span="8">
              <div style="text-align: center; margin-top: 20px">
                <el-link href="https://www.zhihu.com/people/zhi-shang-gan-ren/activities" type="primary" :underline="false" target="_blank">我的知乎</el-link>
                <el-link href="https://blog.csdn.net/lalala_HFUT" style="margin: 0 15px;" type="primary" :underline="false" target="_blank">我的博客</el-link>
              <el-tooltip class="item" effect="dark" content="GitHub is on build" placement="top">
                <el-link href="https://github.com/suresursus" type="primary" :underline="false" target="_blank" disabled><del>我的GitHub</del></el-link>
              </el-tooltip>
            </div>
            </el-col>
            <el-col :span="8">
              <div style="float: right; margin-top: 20px">
              <el-tooltip content="182-9791-7232" placement="top-end" effect="light">
                <i class="el-icon-phone-outline" style="margin-right: 25px; color: white"></i>
              </el-tooltip>
              <el-tooltip content="suresursus@outlook.com" placement="top-end" effect="light">
                <i class="el-icon-message" style="margin-right: 25px; color: white"></i>
              </el-tooltip>
              <el-tooltip content="安徽省合肥市合肥工业大学翡翠湖校区" placement="top-end" effect="light">
                <i class="el-icon-location-outline" style="color: white"></i>
              </el-tooltip>
            </div>
            </el-col>
          </el-row>
        </div>
        <div class="mobile" style="text-align: center; margin-top: 20px;">
          <el-link href="https://www.zhihu.com/people/zhi-shang-gan-ren/activities" type="primary" :underline="false" target="_blank">我的知乎</el-link>
          <el-divider direction="vertical"></el-divider>
          <el-link href="https://blog.csdn.net/lalala_HFUT" type="primary" :underline="false" target="_blank">我的博客</el-link>
          <el-divider direction="vertical"></el-divider>
          <el-tooltip class="item" effect="dark" content="GitHub is on build" placement="top">
            <el-link href="https://github.com/suresursus" type="primary" :underline="false" target="_blank" disabled><del>我的GitHub</del></el-link>
          </el-tooltip>
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Home from '@/components/Home'
import Experience from '@/components/Experience'
import Board from '@/components/Board'
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
      bulbPng: 'url(' + require('../assets/bulbOn.png') + ')',
      headerColor: '#FFFFFF',
      footerColor: null,
      starIcon: 'el-icon-star-off',
      defaultActive: 'home',
      blockChoice: 'home',
      contain: ''
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
    clickStar () {
      this.starDisabled = true
      if (this.badgeHidden === true) {
        this.badgeHidden = false
        this.star--
        this.starIcon = 'el-icon-star-off'
        if (screen.width < 1080) {
          Toast({
            message: 'Fine',
            position: 'bottom',
            duration: 2000
          })
        } else {
          this.$message({
            dangerouslyUseHTMLString: true,
            message: '<strong>Fine</strong>',
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
              message: '不客气',
              position: 'bottom',
              duration: 2000
            })
          } else {
            this.$message({
              message: '不客气',
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
      // this.footerShow = true
      this.experienceShow = false
    },
    switchExperience () {
      this.defaultActive = 'experience'
      this.blockChoice = 'experience'
      // this.footerShow = false
      this.experienceShow = true
    },
    switchBoard () {
      this.defaultActive = 'board'
      this.blockChoice = 'board'
      // this.footerShow = false
      this.experienceShow = false
    },
    switchYard () {
      this.$router.push({path: '/yard'})
    }
  },
  components: {
    Home,
    Experience,
    Board
  }
}
</script>

<style scoped>
  .el-container {
    background-image: url("../assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
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
    width: 100%;
  }

  .el-menu--horizontal>.el-menu-item:hover {
    border-bottom: 2px solid #409EFF!important;
  }
 </style>
