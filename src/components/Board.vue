<template>
  <div>
    <el-main class="el-main mobile" style="text-align: center">
      <el-input :autosize="{ minRows: 6, maxRows: 10}" type="textarea" placeholder="想说什么" v-model="messageBody" maxlength="220" show-word-limit></el-input>
      <el-input style="margin-top: 15px" v-model="messageHeader" placeholder="怎么称呼" maxlength="12" show-word-limit></el-input>
      <el-button style="width: 200px; margin: 15px" type="primary" @click="release">发布</el-button>
      <el-card style="height: 100%">
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          <div v-for="item in data" :key="item.index"><span style="font-size: 15px">{{item.messageBody}}</span>
            <el-divider content-position="right">{{item.messageHeader}}</el-divider></div>
        </div>
        <p v-loading="loading" style="text-align: center; margin-bottom: 30px"></p>
        <p v-if="noMore" style="text-align: center">没有更多了<i class="el-icon-lollipop"/><i class="el-icon-lollipop"/><i class="el-icon-lollipop"/>‍</p>
      </el-card>
    </el-main>
    <el-main class="el-main pc">
      <el-row :gutter="20">
        <el-col :span="6" style="text-align: center">
<!--          <div style=" position: fixed; top: 80px; width: 100%">-->
            <el-input :autosize="{ minRows: 8, maxRows: 10}" type="textarea" placeholder="想说什么" v-model="messageBody" maxlength="220" show-word-limit></el-input>
            <el-input style="margin-top: 15px" v-model="messageHeader" placeholder="怎么称呼" maxlength="12" show-word-limit></el-input>
            <el-button style="width: 200px; margin-top: 15px" type="primary" @click="release">发布</el-button>
<!--          </div>-->
        </el-col>
        <el-col :span="18">
          <el-card style="height: 100%">
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
              <div v-for="item in data" :key="item.index"><span style="font-size: 15px">{{item.messageBody}}</span>
                <el-divider content-position="right">{{item.messageHeader}}</el-divider></div>
            </div>
            <p v-loading="loading" style="text-align: center; margin-bottom: 30px"></p>
            <p v-if="noMore" style="text-align: center">没有更多了<i class="el-icon-lollipop"/><i class="el-icon-lollipop"/><i class="el-icon-lollipop"/>‍</p>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'Board',
  data () {
    return {
      messageBody: '',
      messageHeader: '',
      count: 0,
      data: [],
      loading: false,
      busy: false,
      noMore: false
    }
  },
  methods: {
    loadMore () {
      this.refresh()
    },
    release () {
      if (this.messageHeader !== '' && this.messageBody !== '') {
        this.axios.get('/message/newMessage?messageHeader=' + this.messageHeader + '&messageBody=' + this.messageBody).then(res => {
          if (res.data === 'success') {
            if (screen.width < 1080) {
              Toast({
                message: '发布成功',
                position: 'bottom',
                duration: 2000
              })
            } else {
              this.$message({
                message: '发布成功',
                type: 'success'
              })
            }
            // this.refresh()
            this.count++
            this.data.splice(0, 0, {messageHeader: this.messageHeader, messageBody: this.messageBody})
          } else {
            this.$message.error('发布失败')
          }
          this.messageHeader = ''
          this.messageBody = ''
        }).catch(error => {
          console.log(error)
          this.$message.error('发布失败')
        })
      } else {
        this.$message.error('内容不能为空')
      }
    },
    refresh () {
      if (this.noMore === false) {
        this.busy = true
        this.loading = true
        this.axios.get('/message/getAllMessage?count=' + this.count).then(res => {
          if (res.data.message.length <= 0) {
            this.noMore = true
          }
          for (let i = 0; i < res.data.message.length; i++) {
            this.data.push({ messageHeader: res.data.message[i].mhead, messageBody: res.data.message[i].mbody })
          }
          this.count += 10
          this.busy = false
          this.loading = false
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*line-height: 60px;*/
  }
</style>
