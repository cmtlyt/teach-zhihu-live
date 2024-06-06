<template>
  <div class="bg">
    <div class="head">
      <svgIcon name="logo"></svgIcon>
    </div>
    <div class="container">
      <div style="flex-basis: 15%"></div>
      <a-form class="form-wrapper" :rules="rules" :model="form" layout="vertical" @submit="handleSubmit">
        <a-form-item field="name" label="用户名" validate-trigger="blur">
          <a-input v-model="form.name" placeholder="请输入用户名" />
        </a-form-item>
        <a-form-item field="password" label="密码" validate-trigger="blur">
          <a-input-password v-model="form.password" placeholder="请输入密码" />
        </a-form-item>
        <a-form-item field="password2" label="确认密码" validate-trigger="blur">
          <a-input-password v-model="form.password2" placeholder="请再次输入密码" />
        </a-form-item>
        <div class="gap"></div>
        <a-form-item class="btn-box">
          <a-button class="reg-btn" type="primary" html-type="submit">注册</a-button></a-form-item
        >
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Message } from '@arco-design/web-vue'

import { register } from '../api/user'

import SvgIcon from '@/components/SvgIcon.vue'

const router = useRouter()

const form = reactive({ name: '', password: '', password2: '' })

const rules = {
  name: [{ required: true, message: '用户名不能为空' }],
  password: [{ required: true, message: '密码不能为空' }],
  password2: [
    { required: true, message: '密码不能为空' },
    {
      validator: (value: string, cb: any) => {
        if (value !== form.password) cb('两次密码不同')
        else cb()
      },
    },
  ],
}

function handleSubmit() {
  register(form)
    .then((res) => {
      if (res.data.success) {
        Message.success({ content: '注册成功', onClose: () => router.push('/') })
      }
    })
    .catch(([res]) => {
      Message.error(res.message)
    })
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  flex: 1;
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
  padding: 0 4rem;
}

.gap {
  flex: 1;
}

.field {
  display: flex;
  flex-direction: column;
  height: 15%;

  input {
    border-bottom: 1px solid #000;
    width: 100%;
    padding: 1rem 0;
    margin-bottom: 0.5em;
    flex: 1;
  }

  .msg {
    color: red;
  }

  .input-box {
    display: flex;
    align-items: center;
    height: 100%;

    .icon-box {
      margin-left: 1rem;
      height: 20px;
      width: 20px;
    }
  }
}

.btn-box {
  padding: 2rem;
  display: flex;
  justify-content: center;

  :deep(.arco-form-item-content) {
    justify-content: center;
  }

  .reg-btn {
    width: 60%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 12px;
    font-size: 16px;
  }
}
</style>
