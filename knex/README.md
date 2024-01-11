## KNEX
    O "Knex" é um construtor de consultas SQL para JavaScript, frequentemente usado em aplicativos Node.js. Ele fornece uma maneira elegante e programática de criar consultas SQL usando JavaScript, em vez de escrever SQL manualmente.


## SUPORTE PARA
    Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, Amazon Redshift

## FORMAS DE TRABALHAR COM BANCO
    Raw -> "SELECT * FROM post" -> MySQL -> vai misturar muito o codigo JS com Mysql
    ORM -> Models -> Users.create({name: "Guilherme"}) -> Mongodb -> menos performaticas


    Query Builders -> banco.select().table("users") -> mesmo que -> "SELECT * FROM users"

