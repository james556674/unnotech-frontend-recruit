# Unnotech Frontend Engineer 徵才小專案

## Main Page
![](https://github.com/james556674/unnotech-frontend-recruit/blob/master/src/assets/booklist.png)

## Demo



## 執行專案
```
1. Clone the project
git clone https://github.com/james556674/unnotech-frontend-recruit.git

2. Install vue
npm install @vue/cli

3. Run the server
npm run serve

```

## 專案架構

- 建立了兩個主要頁面books與book datail，以及一個404 not found的頁面
- 因為booklist區塊在兩個頁面中會重複使用，於是建立了一個booklist component
- 將外部方法所需要建立的instance 放入utils裡的helper.js統一管理
- axios串接api的函式放入apis資料夾裡的book.js統一管理

## 第三方 library

- 使用了axios來進行api串接，主要考量原因是，axios支援promise的寫法，而且也可以建立instance讓api串接方便管理
- 使用了sweetalert2的原因，想用最短的時間讓提示訊息可以漂亮一點

## Package Version

- "axios": "^0.21.1",
- "core-js": "^3.9.1",
- "sweetalert2": "^10.15.5",
- "vue": "^2.6.12",
- "vue-router": "^3.5.1"
