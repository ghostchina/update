/**
 * Created by liuxing on 14-8-24.
 */
var config = require('../config')[process.env.NODE_ENV]; //获取配置文件
var knex = require('knex')(config.database );   //初始化数据库
var bookshelf = require('bookshelf')(knex);

var UpdateLog = require('./UpdateLog')(bookshelf); //模型
var Version = require('./Version')(bookshelf); //模型


module.exports = {
    bookshelf:  bookshelf,
    UpdateLog:  UpdateLog,
    Version:  Version
};