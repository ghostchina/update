/**
 * Created by liuxing on 14-8-24.
 */
var config = {
    development:{
        port: 3000,
        database:{
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : 'xxxxxx',
                database : 'update',
                charset  : 'utf8'
            }
        },
        currentVersion: "0.5.0"
    },

    production:{
        port: 3000,
        database:{
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : 'xxxxxx',
                database : 'update',
                charset  : 'utf8'
            }
        },
        currentVersion: "0.5.0"
    }
}
module.exports = config[process.env.NODE_ENV || 'development'];