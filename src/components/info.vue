<template>
  <div class="info">
    <div class="main">
      <h5>京东小区</h5>
      <span>3室</span>
      <span>4个房间</span>
      <ul>
        <li>70㎡</li>
        <li>南北通透</li>
        <li>5/6</li>
      </ul>
      <p>地址：槐安东路与雅清街交口京东小区1211</p>
    </div>
    <div class="Supporting">
      <h5>房间配套：</h5>
      <ul>
        <li>空调</li>
        <li>电脑</li>
        <li>洗衣机</li>
        <li>厨房</li>
        <li>宽带</li>
        <li>淋浴</li>
        <li>客厅</li>
        <li>电视</li>
      </ul>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  list-style-type: none;
}
body{
  font-family: '微软雅黑';
}
.main h5{
  float: left;
  font-size: 20px;
  line-height: 20px;
}
.main ul{
  overflow: hidden;
}
.main ul li {
  float: left;
}
</style>
