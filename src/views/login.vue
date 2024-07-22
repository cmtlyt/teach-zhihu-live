<template>
  <div class="bg">
    <div class="box">
      <div class="header"><SvgIcon name="logo" class="logo"></SvgIcon></div>
      <div class="header"><SvgIcon name="logo" class="logo"></SvgIcon></div>
      <div class="main">
        <div class="leftmain">
          <div class="top">
            <h3 class="one">打开知乎App</h3>
            <span class="two">在「我的页」右上角打开扫一扫</span>
            <div class="img"><img src="" alt="" /></div>
            <span class="three">其他扫码方式：微信</span>
          </div>
          <div class="bottom">
            <ul class="list">
              <li class="item">下载知乎</li>
              <li class="item">开通机构号</li>
              <li class="item">无障碍模式</li>
            <ul class="list">
              <li class="item">下载知乎</li>
              <li class="item">开通机构号</li>
              <li class="item">无障碍模式</li>
            </ul>
          </div>
        </div>
        <div class="rightmain">
          <div class="top">
            <div class="logway">
              <ul class="btnlist">
                <button class="loginTypeBtn"><li @click="showCodeLogin">验证码登录</li></button>
                <button class="loginTypeBtn"><li @click="showPasswordLogin">密码登录</li></button>
              <ul class="btnlist">
                <button class="loginTypeBtn"><li @click="showCodeLogin">验证码登录</li></button>
                <button class="loginTypeBtn"><li @click="showPasswordLogin">密码登录</li></button>
              </ul>
            </div>
            <div class="CodeLogin" v-if="isCodeLogin">
              <div class="inputRow">
                <button id="choseLocation" class="btn">中国+86</button>
                <input type="text" placeholder="请输入手机号" class="inputBox" />
            <div class="CodeLogin" v-if="isCodeLogin">
              <div class="inputRow">
                <button id="choseLocation" class="btn">中国+86</button>
                <input type="text" placeholder="请输入手机号" class="inputBox" />
              </div>
              <div class="inputRow">
                <input type="text" placeholder="获取短信验证码" class="inputBox" />
                <button class="getCode btn">获取短信验证码</button>
              <div class="inputRow">
                <input type="text" placeholder="获取短信验证码" class="inputBox" />
                <button class="getCode btn">获取短信验证码</button>
              </div>
              <div class="btnRow">
                <button class="getSpeechCode">获取语音验证码</button>
              <div class="btnRow">
                <button class="getSpeechCode">获取语音验证码</button>
              </div>
              <button class="login">登录</button>
              <button class="login">登录</button>
            </div>
            <div class="PasswordLogin" v-else>
              <div class="inputdiv">
                <input class="userinput" v-model="loginInfo.name" type="text" placeholder="手机号或邮箱" />
            <div class="PasswordLogin" v-else>
              <div class="inputdiv">
                <input class="userinput" v-model="loginInfo.name" type="text" placeholder="手机号或邮箱" />
              </div>
              <div class="inputdiv">
                <input class="pwdinput" v-model="loginInfo.password" type="text" placeholder="密码" />
              <div class="inputdiv">
                <input class="pwdinput" v-model="loginInfo.password" type="text" placeholder="密码" />
              </div>
              <div class="otherdiv">
                <router-link class="reg" to="/register">注册</router-link>
                <router-link class="forgetP" to="/register">忘记密码</router-link>
              <div class="otherdiv">
                <router-link class="reg" to="/register">注册</router-link>
                <router-link class="forgetP" to="/register">忘记密码</router-link>
              </div>
              <button class="login" @click="submit">登录</button>
              <button class="login" @click="submit">登录</button>
            </div>
          </div>
          <div class="bottom">
            <ul>
              <li>
                <SvgIcon name="QQ" alt="" class="svg" />
                <SvgIcon name="QQ" alt="" class="svg" />
              </li>
              <li>
                <SvgIcon name="wx" alt="" class="svg" />
                <SvgIcon name="wx" alt="" class="svg" />
              </li>
              <li>
                <SvgIcon name="weibo" alt="" class="svg" />
                <SvgIcon name="weibo" alt="" class="svg" />
              </li>
            </ul>
            <span> 未注册手机验证后自动登录，注册即代表同意《知乎协议》《隐私保护指引》 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Message } from '@arco-design/web-vue'
import { useRouter } from 'vue-router'

import SvgIcon from '@/components/SvgIcon.vue'
import { login } from '@/api/user'

const router = useRouter()
const isCodeLogin = ref(true)
const loginInfo = reactive({ name: '', password: '' })
function submit() {
  login(loginInfo)
    .then((res) => {
      if (res.data.success) {
        Message.success({ content: '登录成功,请稍等', onClose: () => router.push('/') })
        Message.success({ content: '登录成功,请稍等', onClose: () => router.push('/') })
      }
    })
    .catch(([res]) => {
      Message.error(res.message)
    })
}
const showCodeLogin = () => {
  isCodeLogin.value = true
}
const showPasswordLogin = () => {
  isCodeLogin.value = false
}
</script>

<style lang="scss" scoped>
.bg {
  background-image: url('../assets/img/background.jpg');
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  display: flex;
  width: 88rem;
  height: 68.6rem;
  text-align: center;
  width: 88rem;
  height: 68.6rem;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .header {
    flex: 1;
    display: flex;
    justify-content: center;
    width: 88rem;
    .logo {
      width: 20rem;
    }
  align-items: center;
  justify-content: center;
  .header {
    flex: 1;
    display: flex;
    justify-content: center;
    width: 88rem;
    .logo {
      width: 20rem;
    }
  }
  .main {
    flex: 4;
    background-color: white;
    width: 88rem;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    .leftmain {
      flex: 40%;
      height: 100%;
      display: flex;
      border-right: 1px solid #ccc;
      flex-direction: column;
      .top {
        flex: 75%;
        display: flex;
        flex-direction: column;
        padding-top: 9rem;
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
        .list {
          display: flex;
          height: 80%;
          justify-content: space-around;
          align-items: center;
          .item {
            display: block;
            width: 28%;
            font-size: 1.2rem;
            border-radius: 2rem;
            border: 1px solid #ccc;
            background-color: #eee;
            height: 3rem;
            line-height: 3rem;
          }
  .main {
    flex: 4;
    background-color: white;
    width: 88rem;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    .leftmain {
      flex: 40%;
      height: 100%;
      display: flex;
      border-right: 1px solid #ccc;
      flex-direction: column;
      .top {
        flex: 75%;
        display: flex;
        flex-direction: column;
        padding-top: 9rem;
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
        .list {
          display: flex;
          height: 80%;
          justify-content: space-around;
          align-items: center;
          .item {
            display: block;
            width: 28%;
            font-size: 1.2rem;
            border-radius: 2rem;
            border: 1px solid #ccc;
            background-color: #eee;
            height: 3rem;
            line-height: 3rem;
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
      font-size: 1.4rem;
      color: #666;
      width: 100%;
      .top {
        flex: 60%;
        .logway {
          width: 100%;
          display: flex;
          flex-direction: column;
          .btnlist {
            width: 60%;
            display: flex;
            .loginTypeBtn {
              font-size: 1.8rem;
              height: 6rem;
              line-height: 6rem;
              color: #444;
              flex: 1;
            }
          }
        }
        .CodeLogin {
          width: 80%;
          margin: 0 auto;
          .inputRow,
          .btnRow {
            height: 5rem;
            line-height: 5rem;
            font-size: 1.6rem;
            display: flex;
            margin-top: 1rem;
            border-bottom: 1px solid #ccc;
            .btn {
              flex: 30%;
              text-align: left;
            }
            .inputBox {
              flex: 70%;
            }
            .getCode {
              text-align: right;
            }
            .getSpeechCode {
              display: block;
              color: rgb(73, 55, 235);
              float: right;
            }
          }
          .btnRow {
            border: none;
            display: block;
          }
          .login {
            width: 80%;
            background-color: rgb(73, 55, 235);
            color: white;
            border: none;
            height: 4.2rem;
            line-height: 4.2rem;
            border-radius: 0.5rem;
            margin-top: 1.5rem;
          }
        }
        .PasswordLogin {
          width: 80%;
          margin: 0 auto;
          .inputdiv {
            height: 5rem;
            line-height: 5rem;
            font-size: 1.6rem;
            display: flex;
            margin-top: 1rem;
            border-bottom: 1px solid #ccc;
            .userinput {
              flex: 70%;
            }
            .pwdinput {
              flex: 70%;
            }
          }
          .otherdiv {
            height: 5rem;
            line-height: 5rem;
            font-size: 1.6rem;
            display: flex;
            justify-content: space-between;
            .reg {
              color: rgb(73, 55, 235);
            }
            .forgetP {
              margin-right: 1rem;
            }
          }
          .login {
            width: 80%;
            background-color: rgb(73, 55, 235);
            color: white;
            border: none;
            height: 4.2rem;
            line-height: 4.2rem;
            border-radius: 0.5rem;
            margin-top: 1.5rem;
          }
        }
      }
      .bottom {
        flex: 40%;
        ul {
          display: flex;
          width: 70%;
          margin: 4rem auto 0rem;
          justify-content: space-around;
          li {
            flex-basis: 40px;
            background-color: #eee;
            border-radius: 50%;
            height: 4rem;
            line-height: 4rem;
            .svg {
              width: 3rem;
              display: block;
              margin: 0px auto;
            }
          }
        }
        span {
          display: block;
          margin: 3rem auto;
          width: 70%;
          color: #999;
        }
      }
    }
    .rightmain {
      flex: 60%;
      height: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      font-size: 1.4rem;
      color: #666;
      width: 100%;
      .top {
        flex: 60%;
        .logway {
          width: 100%;
          display: flex;
          flex-direction: column;
          .btnlist {
            width: 60%;
            display: flex;
            .loginTypeBtn {
              font-size: 1.8rem;
              height: 6rem;
              line-height: 6rem;
              color: #444;
              flex: 1;
            }
          }
        }
        .CodeLogin {
          width: 80%;
          margin: 0 auto;
          .inputRow,
          .btnRow {
            height: 5rem;
            line-height: 5rem;
            font-size: 1.6rem;
            display: flex;
            margin-top: 1rem;
            border-bottom: 1px solid #ccc;
            .btn {
              flex: 30%;
              text-align: left;
            }
            .inputBox {
              flex: 70%;
            }
            .getCode {
              text-align: right;
            }
            .getSpeechCode {
              display: block;
              color: rgb(73, 55, 235);
              float: right;
            }
          }
          .btnRow {
            border: none;
            display: block;
          }
          .login {
            width: 80%;
            background-color: rgb(73, 55, 235);
            color: white;
            border: none;
            height: 4.2rem;
            line-height: 4.2rem;
            border-radius: 0.5rem;
            margin-top: 1.5rem;
          }
        }
        .PasswordLogin {
          width: 80%;
          margin: 0 auto;
          .inputdiv {
            height: 5rem;
            line-height: 5rem;
            font-size: 1.6rem;
            display: flex;
            margin-top: 1rem;
            border-bottom: 1px solid #ccc;
            .userinput {
              flex: 70%;
            }
            .pwdinput {
              flex: 70%;
            }
          }
          .otherdiv {
            height: 5rem;
            line-height: 5rem;
            font-size: 1.6rem;
            display: flex;
            justify-content: space-between;
            .reg {
              color: rgb(73, 55, 235);
            }
            .forgetP {
              margin-right: 1rem;
            }
          }
          .login {
            width: 80%;
            background-color: rgb(73, 55, 235);
            color: white;
            border: none;
            height: 4.2rem;
            line-height: 4.2rem;
            border-radius: 0.5rem;
            margin-top: 1.5rem;
          }
        }
      }
      .bottom {
        flex: 40%;
        ul {
          display: flex;
          width: 70%;
          margin: 4rem auto 0rem;
          justify-content: space-around;
          li {
            flex-basis: 40px;
            background-color: #eee;
            border-radius: 50%;
            height: 4rem;
            line-height: 4rem;
            .svg {
              width: 3rem;
              display: block;
              margin: 0px auto;
            }
          }
        }
        span {
          display: block;
          margin: 3rem auto;
          width: 70%;
          color: #999;
        }
      }
    }
  }
}
</style>
