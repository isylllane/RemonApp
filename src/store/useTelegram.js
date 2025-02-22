import {defineStore} from 'pinia'

export const useTelegram = defineStore('TelegramData', {
  state: () => ({
    tg: window.Telegram.WebApp,
    user: window.Telegram.WebApp.initDataUnsafe?.user,
    devUser: {
      "id": 1702859584,
      "first_name": "keyframes",
      "last_name": "box",
      "username": "keyframes_box",
      "language_code": "ru",
      "allows_write_to_pm": true,
      "photo_url": "https://t.me/i/userpic/320/R2eVpsPAiG_R8zsVJmI7p--Clb09aotTTBEVAaBPZH0.svg"
    },
  }),

})
