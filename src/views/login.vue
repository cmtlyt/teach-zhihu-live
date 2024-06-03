<template>
  <div class="bg">
    <div class="box">
      <div class="header">
        <h2>知乎</h2>
      </div>
      <div class="main">
        <div class="leftmain">
          <div class="top">
            <h3 class="one">打开知乎App</h3>
            <span class="two">在「我的页」右上角打开扫一扫</span>
            <div class="img"><img src="" alt=""></div>
            <span class="three">其他扫码方式：微信</span>
          </div>
          <div class="bottom">
            <ul>
              <li>下载知乎App</li>
              <li>开通机构号</li>
              <li>无障碍模式</li>
            </ul>
          </div>
        </div>
        <div class="rightmain">
          <div class="top">
            <div class="logway">
              <ul>
                <li role="button" @click="showCodeLogin">验证码登录</li>
                <li role="button" @click="showPasswordLogin">密码登录</li>
              </ul>
            </div>
            <div id="CodeLogin" v-if="isCodeLogin">
              <div>
                <button id="choseLocation">中国+86</button>
                <input type="text" placeholder="请输入手机号">
              </div>
              <div>
                <input type="text" placeholder="获取短信验证码">
                <button id="getCode">获取短信验证码</button>
              </div>
              <div style="border:none;display:block">
                <button id="getSpeechCode">
                  获取语音验证码
                </button>
              </div>
              <button id="loginorreg">登录/注册</button>
            </div>
            <div id="PasswordLogin" v-else>
              <div>
                <input v-model="loginInfo.name" type="text" placeholder="手机号或邮箱">
              </div>
              <div>
                <input v-model="loginInfo.password" type="text" placeholder="密码">
              </div>
              <div style="border:none;display:block">
                <button id="overseasLogin">
                  海外手机登录
                </button>
                <button id="forgetP">
                  忘记密码
                </button>
              </div>
              <button id="loginorreg" @click="submit">登录/注册</button>
            </div>
          </div>
          <div class="bottom">
            <ul>
              <li>
                <SvgIcon name="QQ" alt="" />
              </li>
              <li>
                <SvgIcon name="wx" alt="" />
              </li>
              <li>
                <SvgIcon name="weibo" alt="" />
              </li>
            </ul>
            <span>
              未注册手机验证后自动登录，注册即代表同意《知乎协议》《隐私保护指引》
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { login, register } from '@/api/user';

// 登录模式只有两种不需要两个变量，一个就好了，不要声明太多，然后变量小写字母开头，类才是大写字母开头，好的，这个reactive是 对象的时候用的是嘛，ref就是普通的数据类型的时候用吗，差不多。好的，我看register注释掉了，之前为什么点了那个注册按钮，还有数据可以用来登录，，就是本来不是按钮绑定了注册方法吗，然后改成登录方法了，为什么刷新了网页，数据还有，不然我给你mock什么接口。。。不就是用来存数据的吗，这么好吗，不用数据库都可以存储数据了，本地的，没法联机，我mock了整个数据库。。。晕，什么是mock了整个数据库，就是在前端实现了数据库的基本操作，这样，那我是不是只要在api文件夹里面写功能就可以达成增删改查的效果了，那个里面是接口，实际处理在mock文件夹里面，不过那个代码你不需要管，需要啥接口跟我说就好了，好
// 你先不要去看那个里面的代码，很复杂，容易头痛，好的，然后你看看什么要删，删了之后提交，新分支的home页面到时候提交了，就创建一个新的pr，好的，我之前写的那个是不是就没了，就是我写了一个导航栏
const isCodeLogin = ref(true)
const loginInfo = reactive({ name: '', password: '' })

function submit() {
  login(loginInfo).then(res => {
    console.log(res)
  })
}
const showCodeLogin = () => {
  isCodeLogin.value = true
}
const showPasswordLogin = () => {
  isCodeLogin.value = false;
}
</script>

<style lang="scss">
input {
  outline: none;
}

.box {
  display: flex;
  flex-direction: column;
  height: 688px;
  width: 880px;
  margin: auto auto;
  text-align: center;
}

.header {
  flex: 20%;
  // background-color: purple;
  line-height: 136px;

  h2 {
    font-family: 'Courier New', Courier, monospace;
    font-weight: bolder;
    color: rgb(73, 55, 235);
    font-size: 64px;
    letter-spacing: 12px;
  }
}

.main {
  flex: 80%;
  background-color: white;
  display: flex;
  box-sizing: border-box;

  .leftmain {
    flex: 40%;
    border-right: 1px solid #ccc;
    height: 100%;
    display: flex;
    flex-direction: column;

    .top {
      flex: 75%;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding-top: 90px;

      .one {
        flex: 10%;
        font-weight: bold;
      }

      .two {
        flex: 10%;
      }

      .three {
        flex: 10%;
        font-weight: bold;
      }

      .img {
        flex: 60%;
      }
    }

    .bottom {
      flex: 25%;

      ul {
        display: flex;
        height: 80%;
        margin-top: 22px;
        justify-content: space-around;

        li {
          display: block;
          flex-basis: 28%;
          font-size: 12px;
          border-radius: 20px;
          border: 1px solid #ccc;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }

  .rightmain {
    flex: 60%;
    height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .top {
      flex: 60%;
    }

    .bottom {
      flex: 40%;

    }
  }
}

.bg {
  background-color: rgb(174, 199, 221);
  height: 100vh;
}

.rightmain {
  font-size: 14px;
  color: #666;
  width: 100%;

  .logway {
    width: 100%;
    display: flex;
    flex-direction: column;

    ul {
      width: 60%;
      display: flex;

      li {
        font-size: 18px;
        height: 60px;
        line-height: 60px;
        color: #444;
        flex: 1;
        flex: 1;
      }
    }
  }

  #CodeLogin {
    width: 80%;
    margin: 0 auto;

    div {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      display: flex;
      margin-top: 10px;
      border-bottom: 1px solid #ccc;

      button {
        flex: 30%;
        text-align: left;
      }

      input {
        flex: 70%;
      }

      #getCode {
        text-align: right;
      }

      #getSpeechCode {
        display: block;
        color: rgb(73, 55, 235);
        float: right;
      }
    }

    #loginorreg {
      width: 80%;
      background-color: rgb(73, 55, 235);
      color: white;
      border: none;
      height: 42px;
      line-height: 42px;
      border-radius: 5px;
      margin-top: 15px;
    }
  }

  #PasswordLogin {
    width: 80%;
    margin: 0 auto;

    div {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      display: flex;
      margin-top: 10px;
      border-bottom: 1px solid #ccc;

      button {
        flex: 30%;
        text-align: left;
      }

      input {
        flex: 70%;
      }

      #overseasLogin {
        float: left;
        color: rgb(73, 55, 235);
      }

      #forgetP {
        float: right;
      }
    }

    #loginorreg {
      width: 80%;
      background-color: rgb(73, 55, 235);
      color: white;
      border: none;
      height: 42px;
      line-height: 42px;
      border-radius: 5px;
      margin-top: 15px;
    }
  }
}

.bottom {

  ul {
    display: flex;
    width: 70%;
    margin: 40px auto 0px;
    justify-content: space-around;

    li {
      flex-basis: 40px;
      background-color: #eee;
      border-radius: 50%;
      height: 40px;
      line-height: 40px;

      img {
        width: 25px;
        display: block;
        margin: 8px auto;
      }
    }
  }

  span {
    display: block;
    margin: 30px auto;
    width: 80%;
    color: #999;
  }
}
</style>