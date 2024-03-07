
const mysql = require('mysql2');

class EvaluacionesController {
  static obtenerEvaluaciones(req, res, next) {
    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    connection.query('SELECT * FROM evaluaciones', (err, results) => {
      if (err) {
        console.error('Error al obtener evaluaciones:', err);
        res.status(500).send('Error al obtener evaluaciones');
      } else {
        res.json(results);
      }
      
      connection.end(); // Cerrar la conexión después de la consulta
    });
  }

  // Método para agregar una nueva evaluación
  static agregarEvaluacion(req, res, next) {
    const { nombre, porcentaje } = req.body;

    if (!nombre || !porcentaje) {
      return res.status(400).send('Nombre y porcentaje son campos obligatorios');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'INSERT INTO evaluaciones (nombre, porcentaje) VALUES (?, ?)';
    const values = [nombre, porcentaje];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al agregar evaluación:', err);
        res.status(500).send('Error al agregar evaluación');
      } else {
        res.send('Evaluación agregada exitosamente');
      }

      connection.end(); // Cerrar la conexión después de la consulta
    });
  }

  // Método para editar una evaluación existente
  static editarEvaluacion(req, res, next) {
    const evaluacionId = req.params.id;
    const { nombre, porcentaje } = req.body;

    if (!nombre || !porcentaje) {
      return res.status(400).send('Nombre y porcentaje son campos obligatorios');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'UPDATE evaluaciones SET nombre = ?, porcentaje = ? WHERE id_evaluacion = ?';
    const values = [nombre, porcentaje, evaluacionId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al editar evaluación:', err);
        res.status(500).send('Error al editar evaluación');
      } else {
        res.send('Evaluación editada exitosamente');
      }

      connection.end();
    });
  }

  // Método para eliminar una evaluación
  static eliminarEvaluacion(req, res, next) {
    const evaluacionId = req.params.id;

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'DELETE FROM evaluaciones WHERE id_evaluacion = ?';
    const values = [evaluacionId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al eliminar evaluación:', err);
        res.status(500).send('Error al eliminar evaluación');
      } else {
        res.send('Evaluación eliminada exitosamente');
      }

      connection.end(); // Cerrar la conexión después de la consulta
    });
  }
}

module.exports = EvaluacionesController;
