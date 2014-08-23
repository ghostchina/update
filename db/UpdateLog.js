/**
 * Created by liuxing on 14-8-24.
 */
var UpdateLog = function(bookshelf){
    return bookshelf.Model.extend({
        tableName: 'update_log'
    });
}
module.exports = UpdateLog;