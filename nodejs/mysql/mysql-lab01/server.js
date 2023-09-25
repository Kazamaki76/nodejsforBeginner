const mysql = require("mysql2/promise");

async function run() {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Kazamaki4.",
    database: "mysql_todo_list",
    connectionLimit: 10,
  });

  async function addUser() {
    const result = await pool.query(
      'insert into users(username,password) values("sjkg", "bobo")'
    );
    console.log(result);
  }
//   addUser();     

  async function addTodo() {
    const result = await pool.query(
      'insert into todos(title,completed,user_id) values("srtjhrtas",true,11)'
    );
    console.log(result);
  }
//   addTodo();

  async function updateTodo() {
    const result = await pool.query(
        'update todos set title = "yoyoyo" , completed = 0 where user_id = 1 '
    )
    console.log(result);
  }
//   updateTodo()

  async function updateUser() {
    const result = await pool.query(
       'update users set password ="dogbobo" where id = 10'
    )
    console.log(result)
  }
//   updateUser()


async function deleteTodos() {
    const result = await pool.query(
        'delete from todos where id = 11'
    )
    console.log(result)
  }
//   deleteTodos()


  async function deleteUser() {
    const result = await pool.query(
        'delete from users where id = 11'
    )
    console.log(result)
  }
//   deleteUser()


  async function selectTodos(todoId){
    const result = await pool.query(
        'select  title, completed from todos where id = ?', [todoId]
    )
    console.log(result)
  }
//   selectTodos(10)
  async function selectUsers(UID){
    const result = await pool.query(
    "select username,password from users where id =?", [UID]
    )
    console.log(result)
  }
  selectUsers(5)

}

run();




