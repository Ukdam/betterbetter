# betterbetter
이상형 월드컵 사이트


## 실행
"scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "client": "cd client && npm run start",
        "server": "nodemon server/server.js",
        "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
  },
  
concurrently을 이용해서 client와 server동시에 실행한다.(npm run dev)
TOURNAMENT폴더(가장 상위 폴더)에서 실행.
