<script setup lang="ts">
import { onDeactivated, onMounted, ref } from 'vue'

import Navbar from '@/components/Navbar.vue'
import HomeList from '@/components/home/StoryList.vue'
const tab_item = ref(0)
const items = ref([
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
  {
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  },
])

const isTabActive = (val: number) => {
  return tab_item.value !== val ? 'tab-item' : 'tab-item tab-item-active'
}

const handleScrollLoad = () => {
  const { clientHeight, scrollTop, scrollHeight } = document.documentElement
  if (clientHeight + scrollTop > scrollHeight - 20) {
    // items.value.push(...Array(10).fill({ message: 'Foo' }))
    addNewStory()
  }
}

const addNewStory = () => {
  let newArray = new Array(10)
  newArray.fill({
    title: '为什么足浴按摩技师老是问客人是哪里人？',
    content:
      '小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？” 因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…',
    date: '',
    author: '',
    tags: '',
  })
  items.value.push(...newArray)
}

onMounted(() => {
  window.addEventListener('scroll', handleScrollLoad)
})

onDeactivated(() => {
  window.removeEventListener('scroll', handleScrollLoad)
})
</script>

<template>
  <div class="box">
    <Navbar class="nav-bar" />
    <div class="main" ref="listRef">
      <div class="left-main">
        <div class="img"><img src="/public/banner.jpg" alt="" /></div>
        <div class="list-box">
          <ul class="tab">
            <li :class="isTabActive(0)" @click="tab_item = 0">关注</li>
            <li :class="isTabActive(1)" @click="tab_item = 1">推荐</li>
            <li :class="isTabActive(2)" @click="tab_item = 2">热榜</li>
            <li :class="isTabActive(3)" @click="tab_item = 3">视频</li>
          </ul>
          <HomeList
            v-for="(value, key) in items"
            :title="value.title"
            :content="value.content"
            :date="value.date"
            :author="value.author"
            :tags="value.tags"
            :key="key"
          />
        </div>
      </div>
      <div class="right-main"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding-top: 5.2rem;
  background-color: #f4f6f9;
  height: 100%;

  .nav-bar {
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
