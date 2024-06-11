import { defineStore } from 'pinia'

import { getUserInfo } from '@/api/user'

export const useUserStore = defineStore('user', {
  state() {
    return {
      isLogin: false,
      age: 0,
      avatar: '',
      email: '',
      name: '',
      phone: '',
      sex: '',
    }
  },
  getters: {},
  actions: {
    getUserInfo() {
      getUserInfo().then((res) => {
        console.warn(res)
        const info = res.data.userInfo
        this.isLogin = true
        this.age = info.age
        this.avatar = info.avatar
        this.email = info.email
        this.name = info.name
        this.phone = info.phone
        this.sex = info.sex
      })
    },
  },
})
