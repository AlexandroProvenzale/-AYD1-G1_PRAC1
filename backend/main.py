import json
from flask import Flask, jsonify
from flask_mysqldb import MySQL
import pymysql
from app import app
from config import mysql
from flask import jsonify
from flask import flash, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})

conexion = MySQL(app)

def obtener_conexion():
    return pymysql.connect(host='104.197.88.253:3306',
    user='root',
    password=']0JmxH@]20_}`8\h',
    bd='ayd1practica1')

@app.route('/')
def index():
    return 'BIENVENIDO A NUESTRA APLICACION' 

#INTEGRACION DE RELEASE V1.0.0
#INTEGRACION DE RELEASE V1.1.0
#INTEGRACION DE RELEASE V2.0.0

#CONSULTA PARA AGREGAR CONTACTOS TIPO POST
@app.route('/agregarContacto', methods=['POST'])
def AgregarContacto():
    try: 
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        arg2 = (request.json["firstname"], request.json["lastname"],request.json["phone"],request.json["email"])
        cursor.callproc('SP_CrearContacto', arg2)
        cursor.connection.commit()
        response = jsonify({'mensaje':"El registro del nuevo contacto fue exitoso."})
        return response
    except Exception as ex:
        return jsonify({"mensaje": "Error"})
    finally:
        cursor.close()
        conn.close()


#CONSULTA PARA LISTAR TODOS LOS CONTACTOS
@app.route('/listarContactos', methods=['GET'])
def ListarContactos():
    try: 
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.callproc('SP_ListarContactos')
        datos = cursor.fetchall()
        response = jsonify(datos)
        print(response)
        return response
    except Exception as ex:
        return jsonify({"mensaje": "Error"})
    finally:
        cursor.close()
        conn.close()



#CONSULTA PARA ELIMINAR CONTACTOS TIPO DELETE
@app.route('/eliminarContacto', methods=['DELETE'])
def EliminarContacto():
    try: 
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        arg2 = (request.json["id_contacto"])
        print(arg2)
        cursor.callproc('SP_EliminarContacto', arg2)
        cursor.connection.commit()
        response = jsonify({'mensaje':"El registro fue eliminado exitosamente."})
        return response
    except Exception as ex:
        return jsonify({"mensaje": "Error"})
    finally:
        cursor.close()
        conn.close()

        
#CONSULTA PARA MODIFICAR CONTACTOS TIPO POST
@app.route('/modificarContacto', methods=['POST'])
def ModificarContacto():
    try: 
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        arg2 = (request.json["id_contacto"], request.json["firstname"], request.json["lastname"],request.json["phone"],request.json["email"])
        cursor.callproc('SP_ModificarContacto', arg2)
        cursor.connection.commit()
        response = jsonify({'mensaje':"El registro del contacto fue modificado fue exitoso."})
        return response
    except Exception as ex:
        return jsonify({"mensaje": "Error"})
    finally:
        cursor.close()
        conn.close()


#CONSULTA PARA MOSTTRAR LOS CONTACTOS FAVORITOS TIPO GET
@app.route('/favoritosContactos', methods=['GET'])
def FavoritosContactos():
    try: 
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.callproc('SP_FavoritosContactos')
        datos = cursor.fetchall()
        response = jsonify(datos)
        return response
    except Exception as ex:
        return jsonify({"mensaje": "Error"})
    finally:
        cursor.close()
        conn.close()

        
#CONSULTA PARA AGREGAR CONTACTO A FAVORITOS TIPO POST
@app.route('/agregarFavorito', methods=['POST'])
def AgregarFavorito():
    try: 
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        arg2 = (request.json["id_contacto"])
        cursor.callproc('SP_AgregarFavorito', arg2)
        cursor.connection.commit()
        response = jsonify({'mensaje':"El registro fue agregado a favoritos exitosamente."})
        return response
    except Exception as ex:
        return jsonify({"mensaje": "Error"})
    finally:
        cursor.close()
        conn.close()

        
        
#CONSULTA PARA ELIMINAR CONTACTO DE FAVORITO TIPO POST
@app.route('/eliminarFavorito', methods=['POST'])
def EliminarFavorito():
    try: 
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        arg2 = (request.json["id_contacto"])
        cursor.callproc('SP_EliminarFavorito', arg2)
        cursor.connection.commit()
        response = jsonify({'mensaje':"El registro fue eliminado de favoritos exitosamente."})
        return response
    except Exception as ex:
        return jsonify({"mensaje": "Error"})
    finally:
        cursor.close()
        conn.close()


#CONSULTA PARA AGREGAR CONTACTOS TIPO POST
@app.route('/buscarContacto', methods=['POST'])
def buscarContacto():
    try: 
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        arg2 = (request.json["nombre"],)
        print(arg2)
        cursor.callproc('SP_buscar',arg2)
        datos = cursor.fetchall()
        response = jsonify(datos)
        return response
    except Exception as ex:
        print( jsonify({"mensaje": "Error"}))
    finally:
        cursor.close()
        conn.close()




def pagina_no_encontrada(error):
    return "404. Endpoint no encontrado", 404

if __name__ == '__main__':
    app.register_error_handler(404, pagina_no_encontrada)
    app.run(port = 5000, debug = True)