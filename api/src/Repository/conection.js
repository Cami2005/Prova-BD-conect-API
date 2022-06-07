import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_BD,
    
    TypeCast: function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
            return (field.string === '1');
        } else {
            return next ();
        }
    }
})

export { con }