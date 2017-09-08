<template>
  <div class="info">
    <x-header title="客有家详情" :left-options="{showBack:true}" slot="header" class="header"></x-header>
    <div class="main">
      <h5>京东小区<span>3室</span><span>4个房间</span></h5>
      <ul>
        <li>面积：70㎡</li>
        <li>户型：南北通透</li>
        <li>楼层：5/6</li>
      </ul>
      <p>地址：槐安东路与雅清街交口京东小区1211</p>
    </div>
    <div class="Supporting">
      <h5>房间配套：</h5>
      <ul>
        <li><span>空调</span></li>
        <li><span>电脑</span></li>
        <li><span>洗衣机</span></li>
        <li><span>厨房</span></li>
        <li><span>宽带</span></li>
        <li><span>淋浴</span></li>
        <li><span>客厅</span></li>
        <li><span>电视</span></li>
      </ul>
    </div>
    <div class="room-info">
      <h5>房间信息：</h5>
      <ul>
        <li><span class="number">1</span><span>已入住</span><span>男</span></li>
        <li><span class="number">2</span><span>已入住</span><span>男</span></li>
        <li><span class="number">3</span><span>未入住</span><span>男</span></li>
        <li><span class="number">4</span><span>未入住</span><span>男</span></li>
        <li><span class="number">5</span><span>未入住</span><span>男</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {ViewBox, XHeader, Tabbar, TabbarItem, Panel} from 'vux'
export default {
  name: 'info',
  components: {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Panel
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.info{
  background: #e6e6e6;
  padding-bottom: 1px;
}
li{
  list-style-type: none;
}
body{
  font-family: '微软雅黑';
}
.main {
  padding:20px 10px 20px;
  background: #ffffff;
}
.main h5{
  font-size: 20px;
  padding-left: 10px;
}
.main h5 span{
  font-size: 14px;
  font-weight: normal;
  padding: 0 10px;
}
.main ul{
  overflow: hidden;
}
.main ul li {
  float: left;
  padding:10px;
  font-size: 12px;
}
.main p{
  padding-left: 10px;
  font-size: 14px;
}
.Supporting,.room-info{
  margin:10px;
  background: #ffffff;
  border-radius: 5px;
}
.Supporting h5,.room-info h5{
  font-size: 16px;
  line-height: 30px;
  padding-left: 10px;
}
.Supporting ul::after{
  content: ' ';
  display: block;
  clear: both;
}
.Supporting li{
  float: left;
  padding:10px 5px;
}
.Supporting li span {
  padding: 5px 10px;
  font-size: 12px;
  color: #FF9900;
  border: 1px solid #FF9900;
  border-radius: 5px;
}
.room-info ul li span{
  display: inline-block;
  text-align: center;
  font-size: 12px;
  line-height: 30px;
  width: 40%;
  border-bottom: 1px dashed #ccc;
}
.room-info ul li span.number{
  width: 20%;
}
</style>
