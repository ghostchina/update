/**
 * Created by liuxing on 14-8-24.
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var bookshelf = require('../db');
var UpdateLog = bookshelf.UpdateLog;

var reqData = {"ghost_version":"0.5.0","node_version":"0.10.28","env":"development","database_type":"sqlite3","blog_id":"adaad76294f5d22e37a7faa444c16311","theme":"casper","apps":"","post_count":1,"user_count":0,"blog_created_at":"","npm_version":"1.4.9"};
reqData.req_date = new Date();

new UpdateLog(reqData).save().then(function(model){
    console.log(model)
});