<template>
  <div class="login">
    <div class="container">
    <div class="logo">
      <img src="../assets/login/logo.png" alt="logo">
    </div>
    <!--登录-->
    <form >
      <div class="block">
        <div class="inp">
          <img src="../assets/login/user.png" alt="user">
          <input type="number" placeholder="请输入手机号" maxlength="11">
        </div>
        <div class="h1"></div>
        <div class="inp">
          <img src="../assets/login/password.png" alt="pwd">
          <input type="password" placeholder="请输入密码" maxlength="18">
          <img src="../assets/login/close.png" alt="x" id="close">
        </div>
      </div>
      <input type="button" value="登录">
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
  border: 0;
  margin: 0;
  padding: 0;
  font-size: 1em;
  line-height: 1em;
   -webkit-appearance: none; 
  background-color: rgba(0, 0, 0, 0);
}
html,body{
      width: 100%;
      min-width: 100%;
      background: #fff;
    }
    /*头部*/
    .header{
      height: 43px;
      line-height: 43px;
      background: #fff;
      border-bottom: 1px solid #e6e6e6;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
    }
    .back{
      padding: 0 12px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .back img{
      width: 8px;
      height: 14px;
    }
    .title{
      text-align: center;
      font-weight: bold;
    }
    /*主体部分*/
    .h1{
      height: 1px;
      background: #c4c4c4;
    }
    .container{
      padding: 44px 10px 0;
    }
    .logo{
      padding: 35px 0 45px;
      text-align: center;
    }
    .logo img{
      width: 165px;
      height: 57px;
    }
    .block{
      border: 1px solid #c4c4c4;
      border-radius: 4px;
      line-height: 60px;
    }
    .inp{
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
    }
    .inp input{
      height: 60px;
      outline: none;
      width: 100%;
      -webkit-flex: 1;
      flex: 1;
    }
    .inp img{
      width: 18px;
      height: 21px;
      padding: 0 20px 0 16px;
    }
    .inp img[alt="x"]{
      width: 18px;
      height: 18px;
      padding: 0 15px;
      display: none;
    }
    input[type="button"]{
      height: 40px;
      line-height: 40px;
      background: #8ec31f;
      text-align: center;
      border-radius: 6px;
      color: #fff;
      outline: none;
      width: 100%;
      margin-top: 16px;
      font-size: 18px;
    }
    .register{
      color: #666;
      margin-top: 12px;
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content: space-between;
      justify-content:space-between;
      font-size: 14px;
    }
</style>
