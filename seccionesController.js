// seccionesController.js

const mysql = require('mysql2');

class SeccionesController {
  // Método para obtener todas las secciones
  static obtenerSecciones(req, res, next) {
    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'SELECT * FROM secciones';

    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener secciones:', err);
        res.status(500).send('Error al obtener secciones');
      } else {
        res.json(results);
      }

      connection.end();
    });
  }

  // Método para agregar una nueva sección y establecer la relación con la materia
static agregarSeccion(req, res, next) {
    const { nombre, id_materia } = req.body;
  
    if (!nombre || !id_materia) {
      return res.status(400).send('Nombre y materia son campos obligatorios');
    }
  
    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });
  
    // Iniciamos la transacción
    connection.beginTransaction((err) => {
      if (err) {
        console.error('Error al iniciar la transacción:', err);
        return res.status(500).send('Error al agregar sección');
      }
  
      const querySeccion = 'INSERT INTO secciones (nombre, id_materia) VALUES (?, ?)';
      const valuesSeccion = [nombre, id_materia];
  
      // Insertamos la nueva sección
      connection.query(querySeccion, valuesSeccion, (errSeccion, resultsSeccion) => {
        if (errSeccion) {
          console.error('Error al agregar sección:', errSeccion);
          // Deshacemos la transacción en caso de error
          connection.rollback(() => {
            res.status(500).send('Error al agregar sección');
          });
        } else {
          // Commit de la transacción si todo está bien
          connection.commit((errCommit) => {
            if (errCommit) {
              console.error('Error al realizar commit:', errCommit);
              // Deshacemos la transacción en caso de error
              connection.rollback(() => {
                res.status(500).send('Error al agregar sección');
              });
            } else {
              res.send('Sección agregada exitosamente');
            }
          });
        }
  
        connection.end();
      });
    });
  }

  // Método para editar una sección existente
  static editarSeccion(req, res, next) {
    const seccionId = req.params.id;
    const { nombre, id_materia } = req.body;

    if (!nombre || !id_materia) {
      return res.status(400).send('Nombre y materia son campos obligatorios');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'UPDATE secciones SET nombre = ?, id_materia = ? WHERE id_seccion = ?';
    const values = [nombre, id_materia, seccionId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al editar sección:', err);
        res.status(500).send('Error al editar sección');
      } else {
        res.send('Sección editada exitosamente');
      }

      connection.end();
    });
  }

  // Método para eliminar una sección
  static eliminarSeccion(req, res, next) {
    const seccionId = req.params.id;

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'DELETE FROM secciones WHERE id_seccion = ?';
    const values = [seccionId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al eliminar sección:', err);
        res.status(500).send('Error al eliminar sección');
      } else {
        res.send('Sección eliminada exitosamente');
      }

      connection.end();
    });
  }
}

module.exports = SeccionesController;
