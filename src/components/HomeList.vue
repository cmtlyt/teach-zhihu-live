<script setup lang="ts"></script>

<template>
  <div class="item-box">
    <div class="item-title">
      <a href="#" class="title">为什么足浴按摩技师老是问客人是哪里人？</a>
    </div>
    <div class="item-content">
      小粉灯： 这不是第一个问题，第一个问题往往是： “你之前来过吗？”
      因为她要通过你对这个问题的回答判断能不能这次就收你小费做不正规的内容； 许多店提供正规服…
    </div>
    <div class="item-actions">
      <a-space>
        <a-button type="primary">
          <template #icon>
            <icon-caret-up />
          </template>
          <!-- Use the default slot to avoid extra spaces -->
          <template #default>赞同</template>
        </a-button>
        <a-button type="primary">
          <template #icon>
            <icon-caret-down />
          </template>
        </a-button>
        <a-link href="link">
          <template #icon>
            <icon-message />
          </template>
          1,099条评论
        </a-link>
        <a-link href="link">
          <template #icon>
            <icon-send />
          </template>
          分享
        </a-link>
        <a-link href="link">
          <template #icon>
            <icon-star-fill />
          </template>
          收藏
        </a-link>
        <a-link href="link">
          <template #icon>
            <icon-heart-fill />
          </template>
          喜欢
        </a-link>
      </a-space>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
.arco-icon {
  font-size: 32;
}
</style>
