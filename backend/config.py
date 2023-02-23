from app import app
from flaskext.mysql import MySQL

mysql = MySQL()
app.config['DEBUG'] = 'True'
app.config['MYSQL_DATABASE_HOST'] = '104.197.88.253'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ']0JmxH@]20_}`8\h'
app.config['MYSQL_DATABASE_DB'] = 'ayd1practica1'
mysql.init_app(app)

