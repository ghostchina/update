/**
 * Created by liuxing on 14-8-24.
 */
var Version = function(bookshelf){
    return bookshelf.Model.extend({
        tableName: 'version'
    });
}
module.exports = Version;