<script setup lang="ts">
import { ref } from 'vue'

import Navbar from '@/components/Navbar.vue'
import HomeList from '@/components/HomeList.vue'

const tab_item = ref(0)

const isTabActive = (val: number) => {
  return tab_item.value !== val ? 'tab-item' : 'tab-item tab-item-active'
}
</script>

<template>
  <div class="box">
    <Navbar class="Navbar" />
    <div class="main">
      <div class="left-main">
        <div class="img"><img src="\public\banner.jpg" alt="" /></div>
        <div class="list-box">
          <ul class="tab">
            <li :class="isTabActive(0)" @click="tab_item = 0">关注</li>
            <li :class="isTabActive(1)" @click="tab_item = 1">推荐</li>
            <li :class="isTabActive(2)" @click="tab_item = 2">热榜</li>
            <li :class="isTabActive(3)" @click="tab_item = 3">视频</li>
          </ul>
          <HomeList></HomeList>
        </div>
      </div>
      <div class="right-main"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  padding-top: 5.2rem;
  background-color: #f4f6f9;
  .Navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1000;
  }
  .main {
    display: flex;
    width: 100vw;
    justify-content: center;
    margin-top: 1rem;
    .left-main {
      width: 67.8rem;
      display: flex;
      flex-direction: column;
      margin-right: 1rem;
      background-color: white;
      .img {
        box-shadow: -1px -1px #ccc 2px;
      }
      .list-box {
        box-shadow: -1px -1px #ccc 2px;
        width: 100%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        .tab {
          width: 100%;
          height: 52px;
          display: flex;
          justify-content: left;
          align-items: center;
          font-size: 16px;
          color: #666;
          box-sizing: border-box;
          border-bottom: 1px solid #ccc;
          .tab-item {
            line-height: 52px;
            width: 76px;
            text-align: center;
          }
          .tab-item:hover {
            color: rgb(77, 17, 160);
            cursor: pointer;
          }
          .tab-item-active {
            color: skyblue;
          }
        }
      }
    }
    .right-main {
      width: 29.8rem;
    }
  }
}
</style>
