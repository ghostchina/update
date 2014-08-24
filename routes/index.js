//ghost 默认的请求数据
// var defaultReqData = {"ghost_version":"0.5.0","node_version":"0.10.28","env":"development","database_type":"sqlite3","email_transport":"Gmail","blog_id":"adaad76294f5d22e37a7faa444c16311","theme":"casper","apps":"","post_count":1,"user_count":0,"blog_created_at":"","npm_version":"1.4.9"};
//ghost 默认的返回数据  var resData ={ version: '0.5.0', next_check: 1408895651 };   //下次更新的时间为当前请求时间+1天

var express = require('express');
var _ = require('lodash');
var router = express.Router();
var oneDay = 24*60*60;

var Version = require('../db').Version;
var UpdateLog  = require('../db').UpdateLog;

/* GET home page. */
router.post('/', function(req, res) {
    //保存当前请求的信息
   var reqData = JSON.parse(req.rawBody);
    reqData.req_date = new Date();
    reqData.headers = req.rawBody;
    reqData.ip = req.ip;

    reqData = _.omit(reqData, 'email_transport');

   new UpdateLog(reqData).save().then(function(model){
        // console.log(model)
    });

    //获取到最新的版本和下一次更新的时间
    new Version().fetchAll().then(function(collections){
        collections.query(function(qb){
            qb.orderBy('id', 'desc');
        }).fetchOne().then(function(model){
            //响应数据
            var resData = {
                version: model.get('version'),
                next_check: parseInt(new Date().getTime()/1000)+oneDay
            };
            res.json(resData);
        })
    });
});

module.exports = router;
