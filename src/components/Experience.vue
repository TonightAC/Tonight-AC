<template>
  <div>
<!--    <el-scrollbar class="el-scrollbar__wrap">-->
    <el-main class="el-main mobile" style="padding-top: 0">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix" style="line-height: 10px">
          <span style="margin-top: 10px"><i class="el-icon-medal"></i> 教育经历</span>
        </div>
        <span>2014～2017郑州外国语学校</span>
        <el-divider></el-divider>
        <span>2017～2021合肥工业大学</span>
        <div style="height: 10px"></div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix" style="line-height: 10px">
          <span style="margin-top: 10px"><i class="el-icon-medal"></i> 项目经历</span>
        </div>
        <span><el-link href="http://47.102.124.250/#/" type="primary" :underline="false" target="_blank">lxoxl网盘</el-link>（Vue SpringBoot）</span>
        <el-divider></el-divider>
        <span><el-link href="" type="primary" :underline="false" target="_blank" disabled>ElePower电力系统</el-link>（Vue SSM）</span>
        <el-divider></el-divider>
        <span><el-link href="" type="primary" :underline="false" target="_blank" disabled>多鲜商城</el-link>（Android SSM）</span>
        <el-divider></el-divider>
        <span><el-link href="" type="primary" :underline="false" target="_blank" disabled>qbt图书进销管理系统</el-link>（Android Servlet）</span>
        <div style="height: 10px"></div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix" style="line-height: 10px">
          <span style="margin-top: 10px"><i class="el-icon-medal"></i> 竞赛经历</span>
        </div>
        <span><el-link href="http://rjxy.hfut.edu.cn/2018/1030/c7228a186407/page.htm" type="primary" :underline="false" target="_blank">2018年CCSP铜奖</el-link></span>
        <el-divider></el-divider>
        <span><el-link href="http://rjxy.hfut.edu.cn/2019/0523/c7228a213772/page.htm" type="primary" :underline="false" target="_blank">2019年CCSP华东分赛区铜奖</el-link></span>
        <el-divider></el-divider>
        <span><el-link href="https://csp.ccf.org.cn/csp/score/score_pdf.action?id=00000000000000000000201809202293" type="primary" :underline="false" target="_blank">第十五次CSP认证300分</el-link>（前2.47%）</span>
        <el-divider></el-divider>
        <span><el-link href="" type="primary" :underline="false" target="_blank" disabled>2019年安徽省程序设计竞赛二等奖</el-link></span>
        <div style="height: 10px"></div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix" style="line-height: 10px">
          <span style="margin-top: 10px"><i class="el-icon-medal"></i> 实习经历</span>
        </div>
        <span>安徽幽谷装饰设计工程有限公司</span>
        <el-divider content-position="right">2018-09～2019-03 Android实习</el-divider>
        <span>河南智游网络技术有限公司</span>
        <el-divider content-position="right">2019-06～2019-09 Java实习</el-divider>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix" style="line-height: 10px">
          <span style="margin-top: 10px"><i class="el-icon-medal"></i> 在校荣誉</span>
        </div>
        <span>三好学生<el-divider direction="vertical"></el-divider>三等奖学金<el-divider direction="vertical"></el-divider>21/133</span>
        <el-divider content-position="right">大一学年</el-divider>
        <div style="height: 8px"></div>
        <span>......</span>
        <div style="height: 8px"></div>
        <el-divider content-position="right">大二学年</el-divider>
        <div style="height: 8px"></div>
        <span>......</span>
        <div style="height: 8px"></div>
        <el-divider content-position="right">大三学年</el-divider>
        <div style="height: 8px"></div>
        <span>......</span>
        <div style="height: 8px"></div>
        <el-divider content-position="right">大四学年</el-divider>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix" style="line-height: 10px">
          <span style="margin-top: 10px"><i class="el-icon-medal"></i> 个人专长</span>
        </div>
        <div style="height: 8px"></div>
        <span>了解常用算法</span>
        <div style="height: 8px"></div>
        <el-divider content-position="right">算法能力</el-divider>
        <div style="height: 8px"></div>
        <div>能开发简单Vue和Android应用</div>
        <div style="height: 8px"></div>
        <el-divider content-position="right">前端能力</el-divider>
        <span>了解Java语言<el-divider direction="vertical"></el-divider>了解MySQL数据库</span>
        <el-divider content-position="right">后端能力</el-divider>
        <span>会使用Git<el-divider direction="vertical"></el-divider>代码编写规范<el-divider direction="vertical"></el-divider>了解设计模式</span>
        <el-divider content-position="right">团队协作能力</el-divider>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix" style="line-height: 10px">
          <span style="margin-top: 10px"><i class="el-icon-medal"></i> 精品博文</span>
        </div>
        <span><el-link href="https://blog.csdn.net/lalala_HFUT/article/details/93380438" type="primary" :underline="false" target="_blank">单周期CPU 设计与实现</el-link></span>
        <el-divider></el-divider>
        <span><el-link href="https://blog.csdn.net/lalala_HFUT/article/details/98951611" type="primary" :underline="false" target="_blank">JDK1.8源码笔记</el-link></span>
        <div style="height: 10px"></div>
      </el-card>
    </el-main>
    <el-main class="el-main pc">
      <el-row class="el-row" :gutter="10">
        <el-col class="el-col" :span="4"><el-card class="grid-content bg-purple" shadow="hover">教育经历</el-card></el-col>
        <el-col class="el-col" :span="20"><el-card class="grid-content bg-purple-light" shadow="hover">
          <span>2017～2021合肥工业大学软件学院 </span><span>2014～2017郑州外国语学校</span>
        </el-card></el-col>
      </el-row>
      <el-row class="el-row" :gutter="10">
        <el-col class="el-col" :span="4"><el-card class="grid-content bg-purple" shadow="hover">在校荣誉</el-card></el-col>
        <el-col class="el-col" :span="20"><el-card class="grid-content bg-purple-light" shadow="hover">
          <div>
            <span>大一学年获得三好学生称号，并获得三等奖学金，专业排名21/133。</span>
            <el-divider></el-divider>
            <span>大二学年获得优秀干部称号，并获得三等奖学金，专业排名29/135。</span>
            <el-divider></el-divider>
            <span>大三学年成绩过于优异，破格让我再读一年大二。</span>
            <el-divider></el-divider>
            <span>大四学年，还没毕业被马化腾和马云，哎编不下去了。</span>
            <el-divider></el-divider>
            <span>整体来说总成绩不够强势（确实），但专业课成绩优势明显（从上面也看不出来）。基础扎实，自学能力强，更加重视实践能力的培养。</span>
          </div>
        </el-card></el-col>
      </el-row>
      <el-row class="el-row" :gutter="10">
        <el-col class="el-col" :span="4"><el-card class="grid-content bg-purple" shadow="hover">实习经历</el-card></el-col>
        <el-col class="el-col" :span="20"><el-card class="grid-content bg-purple-light" shadow="hover">
          <span>2018-09～2019-03安徽幽谷装饰设计工程有限公司 Android实习生（兼职）</span>
          <el-divider></el-divider>
          <span>2019-06～2019-09河南智游网络技术有限公司 Java实习生</span>
        </el-card></el-col>
      </el-row>
      <el-row class="el-row" :gutter="10">
        <el-col class="el-col" :span="4"><el-card class="grid-content bg-purple" shadow="hover">项目经历</el-card></el-col>
        <el-col class="el-col" :span="20"><el-card class="grid-content bg-purple-light" shadow="hover">
      <span>
        <el-link href="http://47.102.124.250/#/" type="primary" :underline="false" target="_blank">lxoxl网盘</el-link>
        <el-link href="" type="primary" :underline="false" target="_blank" disabled>ElePower电力系统</el-link>
      </span>
          <el-divider></el-divider>
          <span>
        <el-link href="" type="primary" :underline="false" target="_blank" disabled>多鲜商城</el-link>
        <el-link href="" type="primary" :underline="false" target="_blank" disabled>qbt图书进销管理系统</el-link>
      </span>
        </el-card></el-col>
      </el-row>
      <el-row class="el-row" :gutter="10">
        <el-col class="el-col" :span="4"><el-card class="grid-content bg-purple" shadow="hover">竞赛经历</el-card></el-col>
        <el-col class="el-col" :span="20"><el-card class="grid-content bg-purple-light" shadow="hover">
          <span><el-link href="http://rjxy.hfut.edu.cn/2018/1030/c7228a186407/page.htm" type="primary" :underline="false" target="_blank">2018年大学生计算机系统与程序设计竞赛（CCSP）铜奖</el-link></span>
          <el-divider></el-divider>
          <span><el-link href="http://rjxy.hfut.edu.cn/2019/0523/c7228a213772/page.htm" type="primary" :underline="false" target="_blank">2019年大学生计算机系统与程序设计竞赛（CCSP）分赛区铜奖</el-link></span>
          <el-divider></el-divider>
          <span><el-link href="https://csp.ccf.org.cn/csp/score/score_pdf.action?id=00000000000000000000201809202293" type="primary" :underline="false" target="_blank">第十五次计算机软件能力认证（CSP）认证300分（前2.47%）</el-link></span>
          <el-divider></el-divider>
          <span><el-link href="" type="primary" :underline="false" target="_blank" disabled>2019年安徽省程序设计竞赛二等奖</el-link></span>
        </el-card></el-col>
      </el-row>
      <el-row class="el-row" :gutter="10">
        <el-col class="el-col" :span="4"><el-card class="grid-content bg-purple" shadow="hover">个人专长</el-card></el-col>
        <el-col class="el-col" :span="20"><el-card class="grid-content bg-purple-light" shadow="hover">
          <span>具备一定的算法能力，能熟练使用常用算法。</span>
          <el-divider content-position="right">算法能力</el-divider>
          <span>对前端知识有浅显的了解，会开发简单的Vue和Android应用。</span>
          <el-divider content-position="right">前端能力</el-divider>
          <span>熟悉Java语言，了解JVM，会使用SSM框架，会使用MySQL数据库，会使用redis和nginx。</span>
          <el-divider content-position="right">后端能力</el-divider>
          <span>会使用git，代码编写规范，了解设计模式，吃苦耐劳，沟通能力强，服从上级领导。</span>
          <el-divider content-position="right">团队协作能力</el-divider>
        </el-card></el-col>
      </el-row>
      <el-row class="el-row" :gutter="10">
        <el-col class="el-col" :span="4"><el-card class="grid-content bg-purple" shadow="hover">业余生活</el-card></el-col>
        <el-col class="el-col" :span="20"><el-card class="grid-content bg-purple-light" shadow="hover">
          <span>抽烟、喝酒、打架、早恋、烫头、染黄毛、飙车、赌博、蹦迪、去酒吧。</span>
          <el-divider></el-divider>
          <span>不可能，</span>
          <el-divider></el-divider>
          <span>我一样也不沾。</span>
        </el-card></el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'Experience'
}
</script>

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 0;
    height: 100%;
  }

  .box-card {
    margin-top: 20px;
    font-size: 15px;
    width: 100%;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .el-row {
    margin-bottom: 10px;
    font-size: 15px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
