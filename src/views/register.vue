<template>
  <div class="bg">
    <div class="head">
      <svgIcon name="logo"></svgIcon>
    </div>
    <div class="container">
      <div style="flex-basis: 15%;"></div>
      <div id="user">
        <div class="input-box"><input type="text" placeholder="请输入用户名"></div>
        <div class="msg"><span>输入有误</span></div>
      </div>
      <div id="pwd">
        <div class="input-box"><input type="password" placeholder="请输入密码">
          <div class="icon-box"></div>
        </div>
        <div class="msg"><span>输入有误</span></div>
      </div>
      <div id="repwd">
        <div class="input-box"><input type="password" placeholder="请重复输入密码">
          <div class="icon-box">
            <SvgIcon name="unshow"></SvgIcon>
          </div>
        </div>
        <div class="msg"><span>输入有误</span></div>
      </div>
      <div class="btn-box">
        <button class="reg-btn">
          注册
        </button>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

import { register } from '../api/user';
import SvgIcon from '@/components/SvgIcon.vue';

const RegInfo = reactive({ name: '', password: '' })

// function submit() {
//   register(RegInfo).then(res => {
//     console.log(res)
//   })
// }
</script>
//
<style lang="scss">
input {
  outline: none;
}

.bg {
  background-size: 100vw 100vh;
  background-image: url('../assets/img/background.jpg');
  box-sizing: border-box;
  padding-top: 8vh;
  height: 100vh;
  width: 100vw;
}

.head {
  margin: 0px auto;
  width: 400px;
  height: 12vh;
  text-align: center;
}

.container {
  margin: 0px auto;
  width: 400px;
  height: 480px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

#user {
  flex-basis: 20%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .input-box {
    flex-basis: 80%;
    font-size: 18px;
    color: #666;

    input {
      line-height: 100%;
      height: 100%;
      width: 100%;
      padding-left: 21px;
      border-bottom: 1px solid #ccc;
    }
  }

  .msg {
    color: red;
    margin-left: 10px;
  }
}

#pwd {
  flex-basis: 20%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .SvgIcon {
    width: 30px;
  }

  .input-box {
    flex-basis: 80%;
    font-size: 18px;
    color: #666;

    input {
      line-height: 100%;
      height: 100%;
      width: 100%;
      padding-left: 21px;
      border-bottom: 1px solid #ccc;
    }
  }

  .msg {
    color: red;
    margin-left: 10px;
  }
}


#repwd {
  flex-basis: 20%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .input-box {
    flex-basis: 80%;
    font-size: 18px;
    color: #666;

    input {
      display: inline-block;
      line-height: 100%;
      height: 100%;
      width: 90%;
      padding-left: 21px;
      border-bottom: 1px solid #ccc;
    }

    .icon-box {
      display: inline-block;
      height: 100%;
      width: 10%;
    }
  }

  .msg {
    color: red;
    margin-left: 10px;
  }
}

.btn-box {
  flex-basis: 30%;

  .reg-btn {
    width: 60%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 22px;
    margin-left: 75px;
    border-radius: 12px;
    background-color: rgb(73, 55, 235);
    color: white;
    font-size: 16px;
  }

}
</style>