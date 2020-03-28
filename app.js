const express = require("express"); // 引入express
const https = require('https');
const fs = require('fs');
const { weibo } = require('./mongodb') // 导入mongodb数据模型
const bodyParser = require("body-parser")   // 引入body-parser中间件可以解析post数据

const app = express();
// app.listen("3001");
// 安装证书
var httpsOptions = {
  key: fs.readFileSync('./Nginx/2_www.geminglu.cn.key'),
  cert: fs.readFileSync('./Nginx/1_www.geminglu.cn_bundle.crt')
}
https.createServer(httpsOptions, app).listen(3001);
app.use(express.static('./public'));
app.use(express.json())
// 如果要解析post的数据就需要一个中间件 body-parser
app.use(bodyParser())

app.get("./api",(req, res)=>{
  console.log("qq")
})