<template>
  <div class="navBox">
    <ul class="navList">
      <li class="mainLogo">
        <a href="#"><SvgIcon name="logo" /></a>
      </li>
      <li class="mainMenu">
        <ul class="list">
          <li class="item"><a href="#">首页</a></li>
          <li class="item"><a href="#">知乎知学堂</a></li>
          <li class="item">
            <div class="icon"><SvgIcon name="双四星" class="img" /></div>
            <span class="text"><a href="#">发现</a></span>
          </li>
          <li class="item"><a href="#">等你来答</a></li>
        </ul>
      </li>
      <li class="searchBoxAndQouestion">
        <div class="searchbox">
          <input type="text" class="input" />
          <div class="search">
            <a href="#"><SvgIcon name="search" class="img" /></a>
          </div>
        </div>
        <div class="questionbox">
          <a href="#"><div class="question">提问</div></a>
        </div>
      </li>
      <li class="personal">
        <ul class="list">
          <li class="item">
            <button class="btn">
              <div class="img"><SvgIcon name="消息" class="icon"></SvgIcon></div>
              <div class="text">消息</div>
            </button>
          </li>
          <li class="item">
            <button class="btn">
              <div class="img"><SvgIcon name="私信" class="icon"></SvgIcon></div>
              <div class="text">私信</div>
            </button>
          </li>
          <li class="item">
            <button class="btn">
              <div class="headbox">
                <SvgIcon name="头像" class="head"></SvgIcon>
              </div>
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
</script>
<style scoped lang="scss">
.navBox {
  width: 100vm;
  height: 5.2rem;
  box-shadow: 1px 1px #ccc 3px;
  color: #666;
  line-height: 5.2rem;
  display: flex;
  justify-content: center;

  .navList {
    width: 122rem;
    height: 100%;
    display: flex;

    .mainLogo {
      flex: 10%;
    }

    .mainMenu {
      flex: 30%;

      .list {
        display: flex;
        text-align: center;
        font-size: 1.6rem;
        height: 5.2rem;

        .item {
          flex: 1;
          justify-content: center;
          display: flex;
          align-items: center;

          .icon {
            flex: 1;

            .img {
              height: 50%;
            }
          }

          .text {
            flex: 4;
          }
        }
      }
    }

    .searchBoxAndQouestion {
      flex: 40%;
      display: flex;
      align-items: center;

      .searchbox {
        height: 3rem;
        border-radius: 5rem;
        flex-basis: 80%;
        background-color: #f5f5f5;
        display: flex;
        align-items: center;
        border: 0.1px solid #ddd;

        .input {
          background-color: #f5f5f5;
          margin-left: 1.5rem;
          outline: none;
          height: 100%;
          flex-basis: 88%;
        }

        .search {
          flex-basis: 12%;

          .img {
            width: 33%;
          }
        }
      }

      .questionbox {
        flex-basis: 20%;
        height: 3rem;
        text-align: center;
        line-height: 3rem;
        margin: auto auto;
      }

      .question {
        color: white;
        width: 90%;
        float: right;
        border-radius: 1.5rem;
        background-color: rgb(73, 55, 235);
      }
    }
    .personal {
      flex: 20%;

      .list {
        display: flex;
        align-items: center;
        text-align: center;

        .item {
          flex: 1;
          height: 5.2rem;
          display: flex;
          flex-direction: column;

          .btn {
            height: 100%;
          }

          .img {
            flex: 50%;
            height: 50%;
          }

          .text {
            flex: 50%;
            height: 50%;
            line-height: 2.6rem;
          }

          .headbox {
            flex: 100%;
            height: 100%;
            display: flex;
            align-items: center;

            .head {
              height: 75%;
              border-radius: 0.3rem;
            }
          }
        }
      }
    }
  }
}

.arco-dropdown-open .arco-icon-down {
  transform: rotate(180deg);
}
</style>
