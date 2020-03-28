const mongoose = require('mongoose');   // 导入插件

// 连接mongoDB数据库的test库
mongoose.connect('mongodb://111.229.110.113:27017/test', {useUnifiedTopology: true, useNewUrlParser: true});
// 创建一个数据模型
var weiboSchema = new mongoose.Schema({
    name: {type: String}, // unique不可重复
    content: {type: String},
    praise: {type: Number},
    stepOn: {type: Number}
});

// 将userSchema数据模型应用到user集合中
var weibo = mongoose.model('user', weiboSchema);

module.exports = { weibo }