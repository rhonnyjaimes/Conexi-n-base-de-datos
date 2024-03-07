// materiasController.js

const mysql = require('mysql2');

class MateriasController {
  // Método para obtener la lista de materias
  static obtenerMaterias(req, res, next) {
    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    connection.query('SELECT * FROM materias', (err, results) => {
      if (err) {
        console.error('Error al obtener materias:', err);
        res.status(500).send('Error al obtener materias');
      } else {
        res.json(results);
      }
      
      connection.end(); // Cerrar la conexión después de la consulta
    });
  }

  // Método para agregar una nueva materia
  static agregarMateria(req, res, next) {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).send('El campo "nombre" es obligatorio');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'INSERT INTO materias (nombre) VALUES (?)';
    const values = [nombre];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al agregar materia:', err);
        res.status(500).send('Error al agregar materia');
      } else {
        res.send('Materia agregada exitosamente');
      }

      connection.end(); // Cerrar la conexión después de la consulta
    });
  }

  // Método para editar una materia existente
  static editarMateria(req, res, next) {
    const materiaId = req.params.id;
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).send('El campo "nombre" es obligatorio');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'UPDATE materias SET nombre = ? WHERE id_materia = ?';
    const values = [nombre, materiaId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al editar materia:', err);
        res.status(500).send('Error al editar materia');
      } else {
        res.send('Materia editada exitosamente');
      }

      connection.end();
    });
  }

  // Método para eliminar una materia
  static eliminarMateria(req, res, next) {
    const materiaId = req.params.id;

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'DELETE FROM materias WHERE id_materia = ?';
    const values = [materiaId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al eliminar materia:', err);
        res.status(500).send('Error al eliminar materia');
      } else {
        res.send('Materia eliminada exitosamente');
      }

      connection.end(); // Cerrar la conexión después de la consulta
    });
  }
}

module.exports = MateriasController;
