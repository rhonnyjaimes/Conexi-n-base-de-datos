// actividadesController.js

const mysql = require('mysql2');

class ActividadesController {
  // Método para obtener la lista de actividades
  static obtenerActividades(req, res) {
    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    connection.query('SELECT * FROM actividades', (err, results) => {
      if (err) {
        console.error('Error al obtener actividades:', err);
        res.status(500).send('Error al obtener actividades');
      } else {
        res.json(results);
      }

      connection.end();
    });
  }

  // Método para agregar una nueva actividad
  static agregarActividad(req, res) {
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
      return res.status(400).send('Los campos "nombre" y "descripcion" son obligatorios.');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'INSERT INTO actividades (nombre, descripcion) VALUES (?, ?)';
    const values = [nombre, descripcion];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al agregar actividad:', err);
        res.status(500).send('Error al agregar actividad');
      } else {
        res.send('Actividad agregada exitosamente.');
      }

      connection.end();
    });
  }

  // Método para editar una actividad existente
  static editarActividad(req, res) {
    const actividadId = req.params.id;
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
      return res.status(400).send('Los campos "nombre" y "descripcion" son obligatorios.');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'UPDATE actividades SET nombre = ?, descripcion = ? WHERE id_actividad = ?';
    const values = [nombre, descripcion, actividadId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al editar actividad:', err);
        res.status(500).send('Error al editar actividad');
      } else {
        res.send('Actividad editada exitosamente.');
      }

      connection.end();
    });
  }

  // Método para eliminar una actividad
  static eliminarActividad(req, res) {
    const actividadId = req.params.id;

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'DELETE FROM actividades WHERE id_actividad = ?';
    const values = [actividadId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al eliminar actividad:', err);
        res.status(500).send('Error al eliminar actividad');
      } else {
        res.send('Actividad eliminada exitosamente.');
      }

      connection.end();
    });
  }
}

module.exports = ActividadesController;
