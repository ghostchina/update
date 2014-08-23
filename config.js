/**
 * Created by liuxing on 14-8-24.
 */
var config = {
    development:{
        database:{
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'liux',
                password : 'liux',
                database : 'ghost_update',
                charset  : 'utf8'
            }
        }
    }
}
module.exports = config;