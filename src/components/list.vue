<template>
  <div id="app">
    <view-box>
      <x-header
      title="客有家租房"
      :left-options="{showBack:false}"
      slot="header"
      class="header">
      <div slot="right" @click="outLogin">退出登录</div>
      </x-header>
      <search class="search"></search>
      <tab></tab>
      <div>
        <scroller
          class="my-scorller"
          ref="myScroller"
          :on-refresh="refresh"
          :on-infinite="infinite"
          >
          <panel :list="dataList" :type="type" class="panel"></panel>
          <panel :list="moreDataList" :type="type" class="panel panel1"></panel>
        </scroller>
      </div>
      
      <tabbar slot="bottom">
        <tabbar-item>
          <img src="../assets/icon_nav_button.png" alt="" slot="icon">
          <span slot="label">所有房源</span>
        </tabbar-item>
        <tabbar-item>
          <img src="../assets/icon_nav_cell.png" alt="" slot="icon">
          <span slot="label">可租房源</span>
        </tabbar-item>
      </tabbar>
    </view-box>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import {ViewBox, XHeader, Tabbar, TabbarItem, Panel} from 'vux'
import search from './search'
import tab from './tab'

export default {
  name: 'app',
  components: {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Panel,
    search,
    tab
  },
  data () {
    var dataList = []
    for (var i = 0; i < 10; i++) {
      dataList.push({
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '玉泉营.万年花城二期',
        desc: '112m²/302/3居室',
        url: '/info'
      })
    }
    return {
      type: '2',
      dataList: dataList,
      moreDataList: []
    }
  },
  methods: {
    refresh () {
      // 下拉刷新
      setTimeout(() => {
        this.$refs.myScroller.finishPullToRefresh();
        this.$vux.toast.text(`当前一共刷新了10条数据`, 'top')
      }, 1000)
      
    },
    infinite () {
      setTimeout(() => {
        for (var i = 0; i < 5; i++) {
          this.dataList.push({
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '玉泉营.万年花城二期',
            desc: '112m²/302/3居室',
            url: '/info'
          })
        }
        this.$refs.myScroller.finishInfinite();
        this.$vux.toast.text(`加载成功`, 'top')
      }, 1000)
      
    },
    outLogin () {
      this.$local.save('user',null)
      this.$router.push('/')
    }
  }
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
  width:100%;
  height:100%;
  overflow: hidden;
}
a{
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
  height:100%;

}
#app .search{
  position:fixed;
  top:46px;
  left:0;
  z-index:5;
  width:100%;
}
#app .my-scorller{
  top:136px;
}

#app .panel1,{
  margin:0;
}
#app .weui-panel {
  margin-top: 0;
  text-align: center;
}
#app .loading-layer {
  padding-bottom: 140px
}
._v-container>._v-content>.active[data-v-ecaca2b0]{
  margin-top:-60px;
}
</style>
