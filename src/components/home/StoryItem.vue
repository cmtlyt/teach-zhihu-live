<script setup lang="ts">
defineProps<{
  title?: string
  content?: string
  date?: Date
  author?: string
  tags?: string[]
}>()
// 倒计时函数
// const startCountdown = () => {
//   const interval = setInterval(() => {
//     countdown.value--
//     if (countdown.value <= 0) {
//       clearInterval(interval)
//     }
//   }, 1000)
// }
// startCountdown()
</script>

<template>
  <!-- <div class="item-box" v-if="countdown > 0" :active="countdown > 1">
    <a-space direction="vertical" size="large" :style="{ width: '100%' }">
      <a-skeleton :animation="animation">
        <a-space direction="vertical" :style="{ width: '100%' }" size="large">
          <a-skeleton-line :rows="3" />
          <a-skeleton-shape size="small" />
        </a-space>
      </a-skeleton>
    </a-space>
  </div> -->
  <div class="item-box">
    <div class="item-title">
      <a href="#" class="title">{{ title }}</a>
    </div>
    <div class="item-content">
      <span>{{ content }}</span>
      <a-space
        ><a-link href="link">
          阅读全文
          <template #icon> <icon-down /></template>
        </a-link>
      </a-space>
    </div>
    <div class="item-actions">
      <a-space>
        <a-button type="primary">
          <template #icon>
            <icon-caret-up />
          </template>
          <!-- Use the default slot to avoid extra spaces -->
          <template #default><span>赞同</span></template>
        </a-button>
        <a-button type="primary">
          <template #icon>
            <icon-caret-down />
          </template>
        </a-button>
        <a-button type="text">
          <template #icon>
            <icon-message />
          </template>
          1,099条评论
        </a-button>
        <a-button type="text">
          <template #icon>
            <icon-send />
          </template>
          <span>分享</span>
        </a-button>
        <a-button type="text">
          <template #icon>
            <icon-star-fill />
          </template>
          <span>收藏</span>
        </a-button>
        <a-button type="text">
          <template #icon>
            <icon-heart-fill />
          </template>
          <span>喜欢</span>
        </a-button>
        <a-dropdown position="bottom" class="darpdown">
          <a-button type="text">
            <template #icon>
              <icon-more />
            </template>
          </a-button>
          <template #content>
            <a-doption>举报</a-doption>
            <a-doption>不感兴趣</a-doption>
          </template>
        </a-dropdown>
      </a-space>
    </div>
  </div>
</template>

<style scoped lang="scss">
.arco-icon {
  font-size: 16px;
}

.item-box {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-bottom: 1px solid #ccc;

  .item-title {
    font-size: 1.6rem;
    font-weight: 1000;

    .title {
      line-height: 1.6;
    }
  }

  .item-content {
    font-size: 1.5rem;
    line-height: 1.67;
  }

  .item-actions {
    height: 5.2rem;
    margin-bottom: -1rem;
    display: flex;
    justify-content: left;
    align-items: center;
  }
}
</style>
