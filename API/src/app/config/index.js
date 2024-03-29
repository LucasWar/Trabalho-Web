async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'siscursos2'
        });
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = {connect};