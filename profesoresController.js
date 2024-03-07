// profesoresController.js

const mysql = require('mysql2');

class ProfesoresController {
  // Método para obtener la lista de profesores
  static obtenerProfesores(req, res, next) {
    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    connection.query('SELECT * FROM profesores', (err, results) => {
      if (err) {
        console.error('Error al obtener profesores:', err);
        res.status(500).send('Error al obtener profesores');
      } else {
        res.json(results);
      }
      
      connection.end(); // Cerrar la conexión después de la consulta
    });
  }

  // Método para agregar un nuevo profesor
  static agregarProfesor(req, res, next) {
    const { nombre, correo } = req.body;

    if (!nombre || !correo) {
      return res.status(400).send('Nombre y correo son campos obligatorios');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'INSERT INTO profesores (nombre, correo) VALUES (?, ?)';
    const values = [nombre, correo];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al agregar profesor:', err);
        res.status(500).send('Error al agregar profesor');
      } else {
        res.send('Profesor agregado exitosamente');
      }

      connection.end(); // Cerrar la conexión después de la consulta
    });
  }

    // Método para editar un profesor existente
    static editarProfesor(req, res, next) {
        const profesorId = req.params.id;  // Cambiado de id a id_profesor
        const { nombre, correo } = req.body;  // Cambiado de email a correo
    
        if (!nombre || !correo) {
          return res.status(400).send('Nombre y correo son campos obligatorios');  // Cambiado de email a correo
        }
    
        const connection = mysql.createConnection({
          host: 'sql10.freemysqlhosting.net',
          user: 'sql10688798',
          password: 'gfQpphcCqq',
          database: 'sql10688798',
          port: 3306
        });
    
        const query = 'UPDATE profesores SET nombre = ?, correo = ? WHERE id_profesor = ?';  // Cambiado de id a id_profesor
        const values = [nombre, correo, profesorId];  // Cambiado de email a correo
    
        connection.query(query, values, (err, results) => {
          if (err) {
            console.error('Error al editar profesor:', err);
            res.status(500).send('Error al editar profesor');
          } else {
            res.send('Profesor editado exitosamente');
          }
    
          connection.end();
        });
      }
    
  // Método para eliminar un profesor
  static eliminarProfesor(req, res, next) {
    const profesorId = req.params.id;  // Cambiado de id a id_profesor

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'DELETE FROM profesores WHERE id_profesor = ?';  // Cambiado de id a id_profesor
    const values = [profesorId];  // Cambiado de id a id_profesor

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al eliminar profesor:', err);
        res.status(500).send('Error al eliminar profesor');
      } else {
        res.send('Profesor eliminado exitosamente');
      }

      connection.end(); // Cerrar la conexión después de la consulta
    });
  }
}

module.exports = ProfesoresController;
