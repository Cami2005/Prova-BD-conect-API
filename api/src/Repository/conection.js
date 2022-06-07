import mysql from 'mysql/promise'

const con = await mysql.creatConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_BD,
    
    TypeCast: function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
            return (field.string === 1);
        } else {
            return next ();
        }
    }
})

export { con }