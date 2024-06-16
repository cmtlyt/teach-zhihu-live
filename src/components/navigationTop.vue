import SvgIcon from '@/components/SvgIcon.vue';
<template>
  <div class="navbox">
    <ul class="navlist">
      <li class="one"><img src="../assets/icons/知乎.svg" alt="" /></li>
      <div style="clear: both"></div>
      <li class="two">
        <div role="button">首页</div>
        <div role="button">知乎知学堂</div>
        <div role="button">
          <div>
            <Svgicon name="双四星" class="svg"></Svgicon>
          </div>
          <div style="margin: 0px">发现</div>
        </div>
        <div role="button">等你来答</div>
      </li>
      <li class="three">
        <div class="searchbox">
          <input type="text" />
          <div role="button"><img src="../assets/icons/search.svg" alt="" /></div>
        </div>
        <div class="questionbox" role="button">
          <div class="question">提问</div>
        </div>
      </li>
      <li class="four">
        <div class="msg" role="button">
          <div class="img">
            <SvgIcon name="消息" class="img"></SvgIcon>
          </div>
          <span class="text">消息</span>
        </div>
        <div class="tell" role="button">
          <SvgIcon name="私信" class="img"></SvgIcon>
          <span class="text">私信</span>
        </div>
        <div class="head" role="button">
          <img src="https://q4.itc.cn/q_70/images03/20240515/18f3c7131e344b6888f3d13c6570931a.jpeg" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.navbox {
  width: 100vm;
  height: 52px;
  box-shadow: 1px 1px #ccc 3px;
  .navlist {
    font-size: 16px;
    color: #666;
    width: 1200px;
    height: 52px;
    margin: 0 auto;
    display: flex;
    .one {
      flex: 10%;
      img {
        height: 100%;
      }
    }
    .two {
      flex: 30%;
      div {
        display: block;
        float: left;
        line-height: 52px;
        height: 52px;
        margin-left: 24px;
        div {
          height: 52px;
          img {
            width: 18px;
            color: #666;
            display: block;
            margin-top: 16px;
          }
        }
      }
    }
    .three {
      display: flex;
      flex: 40%;
      .searchbox {
        height: 30px;
        margin: auto auto;
        border-radius: 50px;
        flex-basis: 80%;
        background-color: #f5f5f5;
        display: flex;
        border: 1px solid #ddd;
        input {
          background-color: #f5f5f5;
          margin-left: 15px;
          outline: none;
          height: 100%;
          flex-basis: 88%;
        }
        div {
          flex: 12%;
          img {
            width: 33%;
            margin-top: 7px;
            margin-left: 8px;
          }
        }
      }
      .questionbox {
        flex-basis: 20%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin: auto auto;
      }
      .question {
        color: white;
        width: 90%;
        float: right;
        border-radius: 15px;
        background-color: rgb(73, 55, 235);
      }
    }
    .four {
      flex: 20%;
      display: flex;
      justify-content: space-between;
      .msg {
        width: 32px;
        flex-direction: column;
        text-align: center;
        margin-left: 80px;
        .img {
          margin-top: 5px;
          width: 24px;
          img {
            width: 100%;
          }
        }
      }
      .tell {
        width: 32px;
        margin-left: 20px;
        img {
          margin-top: 5px;
          width: 24px;
          img {
            width: 100%;
          }
        }
      }
      .head {
        width: 40px;
        margin-left: 20px;
        display: flex;
        justify-content: center;
        img {
          width: 36px;
          height: 36px;
          display: block;
          background-color: aqua;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
