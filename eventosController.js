// eventosController.js

const mysql = require('mysql2');

class EventosController {
  // Método para obtener la lista de eventos
  static obtenerEventos(req, res, next) {
    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    connection.query('SELECT * FROM eventos', (err, results) => {
      if (err) {
        console.error('Error al obtener eventos:', err);
        res.status(500).send('Error al obtener eventos');
      } else {
        res.json(results);
      }
      
      connection.end(); // Cerrar la conexión después de la consulta
    });
  }

  // Método para agregar un nuevo evento
  static agregarEvento(req, res, next) {
    const { nombre, fecha, descripcion, tipo } = req.body;

    if (!nombre || !fecha || !descripcion || !tipo) {
      return res.status(400).send('Nombre, fecha, descripción y tipo son campos obligatorios');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'INSERT INTO eventos (nombre, fecha, descripcion, tipo) VALUES (?, ?, ?, ?)';
    const values = [nombre, fecha, descripcion, tipo];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al agregar evento:', err);
        res.status(500).send('Error al agregar evento');
      } else {
        res.send('Evento agregado exitosamente');
      }

      connection.end(); // Cerrar la conexión después de la consulta
    });
  }

  // Método para editar un evento existente
  static editarEvento(req, res, next) {
    const eventoId = req.params.id;
    const { nombre, fecha, descripcion, tipo } = req.body;

    if (!nombre || !fecha || !descripcion || !tipo) {
      return res.status(400).send('Nombre, fecha, descripción y tipo son campos obligatorios');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'UPDATE eventos SET nombre = ?, fecha = ?, descripcion = ?, tipo = ? WHERE id_evento = ?';
    const values = [nombre, fecha, descripcion, tipo, eventoId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al editar evento:', err);
        res.status(500).send('Error al editar evento');
      } else {
        res.send('Evento editado exitosamente');
      }

      connection.end();
    });
  }

  // Método para eliminar un evento
  static eliminarEvento(req, res, next) {
    const eventoId = req.params.id;

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'DELETE FROM eventos WHERE id_evento = ?';
    const values = [eventoId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al eliminar evento:', err);
        res.status(500).send('Error al eliminar evento');
      } else {
        res.send('Evento eliminado exitosamente');
      }

      connection.end(); // Cerrar la conexión después de la consulta
    });
  }
}

module.exports = EventosController;
