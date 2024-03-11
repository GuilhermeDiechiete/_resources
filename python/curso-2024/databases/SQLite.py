import sqlite3
connect = sqlite3.connect('agenda.db')
cursor = connect.cursor()

cursor.execute('CREATE TABLE IF NOT EXISTS exemplo (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
cursor.execute("INSERT INTO exemplo (nome, idade) VALUES ('João', 30)")

connect.commit()
cursor.execute('SELECT * FROM exemplo')

for row in cursor.fetchall():
    print(row)

cursor.close()
connect.close()
