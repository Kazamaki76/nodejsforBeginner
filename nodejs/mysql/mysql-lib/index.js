const mysql = require("mysql2/promise");

async function run(){ 
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Kazamaki4.",
            database: "todolist"
        });
        // const result = await connection.query("select * from user") // [ el1, el2]
        // console.log("length: ", result.length);
        // console.log("data", result[0]); // [{id : 1, username : "facu",password : "fuawdpdfh", email : "john@dodo.com"},{},{}]
        // console.log("description" , result[1]);
        
        // await connection.query("insert into todolist (title, completed, u_id)values ("fitness",false,1")
        // const result = await connection.query("select t.id todo_id, t.title, t.completed, t.due_date, t.u_id, u.u_name,u.id uid,u.u_password,u.u_email from todo_list t left join user u on t.u_id = u.id ");
        // console.log(result[0])

        // const result = await connection.query(
        //     'insert into user(u_name,u_email,u_password) values ("ann","a@dodo.com","domomo"),("gogo", "gogo@gmail.com","gogogogo")'
        // ); // [obj, undefined]

        // const result = await connection.query('update user set u_password = "654321"')

        // const result = await connection.query("delete from user where id >= 8")

        // result create,update,delete[{},undefined]    
        //result   read: [[],[]]

        // const result = await connection.query("select count(*) total from user")
        // console.log(result);

        const pool = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "Kazamaki4.",
            database : "todolist",
            connectionLimit: 10
        }); 
        // const result = await pool.query("select * from user");
        // console.log(result)

        const u_name = 'facu";--';
        const u_password = "aerhertjh";

        // select * from user where u_name ="facu" and password = "654321"
        // const sql = 'select * from user where u_name = "' + u_name + '"and u_password = "' + u_password + '"';
        // const result = await pool.query(sql)

        const sql = 'select * from user where u_name = ? and u_password = ?'
        const result = await pool.query(sql, [ u_name, u_password]);


        console.log(result)
        console.log(sql)
    }catch(err) {
        console.log(err)
    }

}
run()



// mysql
// .createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Kazamaki4.",
//     database:"todolist"
// })

// .then(Connection => {
// console.log("DB connected")
// Connection 
// .query("select * from user")
// .then(result => {
//     console.log(result)
// });

// })
// .catch(err => {
//     console.log(err);
// })