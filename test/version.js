/**
 * Created by liuxing on 14-8-24.
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var bookshelf = require('../db');
var Version = bookshelf.Version;

//或者ID值最大的记录
new Version().fetchAll().then(function(collections){
    collections.query(function(qb){
        qb.orderBy('id', 'desc');
    }).fetchOne().then(function(model){
        console.log(model);
    })
});