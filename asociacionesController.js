
const mysql = require('mysql2');

class AsociacionesController {
  static obtenerAsociacionesProfesorMateria(req, res) {
    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    connection.query('SELECT * FROM asociaciones_profesor_materia', (err, results) => {
      if (err) {
        console.error('Error al obtener asociaciones Profesor-Materia:', err);
        res.status(500).send('Error al obtener asociaciones Profesor-Materia');
      } else {
        res.json(results);
      }

      connection.end();
    });
  }

  // Método para agregar una nueva asociación Profesor-Materia
  static agregarAsociacionProfesorMateria(req, res) {
    const { id_profesor, id_materia } = req.body;

    if (!id_profesor || !id_materia) {
      return res.status(400).send('Los campos "id_profesor" y "id_materia" son obligatorios.');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'INSERT INTO asociaciones_profesor_materia (id_profesor, id_materia) VALUES (?, ?)';
    const values = [id_profesor, id_materia];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al agregar asociación Profesor-Materia:', err);
        res.status(500).send('Error al agregar asociación Profesor-Materia');
      } else {
        res.send('Asociación Profesor-Materia agregada exitosamente.');
      }

      connection.end();
    });
  }

  // Método para editar una asociación Profesor-Materia existente
  static editarAsociacionProfesorMateria(req, res) {
    const asociacionId = req.params.id;
    const { id_profesor, id_materia } = req.body;

    if (!id_profesor || !id_materia) {
      return res.status(400).send('Los campos "id_profesor" y "id_materia" son obligatorios.');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'UPDATE asociaciones_profesor_materia SET id_profesor = ?, id_materia = ? WHERE id_asociacion = ?';
    const values = [id_profesor, id_materia, asociacionId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al editar asociación Profesor-Materia:', err);
        res.status(500).send('Error al editar asociación Profesor-Materia');
      } else {
        res.send('Asociación Profesor-Materia editada exitosamente.');
      }

      connection.end();
    });
  }

  // Método para eliminar una asociación Profesor-Materia
  static eliminarAsociacionProfesorMateria(req, res) {
    const asociacionId = req.params.id;

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'DELETE FROM asociaciones_profesor_materia WHERE id_asociacion = ?';
    const values = [asociacionId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al eliminar asociación Profesor-Materia:', err);
        res.status(500).send('Error al eliminar asociación Profesor-Materia');
      } else {
        res.send('Asociación Profesor-Materia eliminada exitosamente.');
      }

      connection.end();
    });
  }

}
// asociacionesController.js

const mysql = require('mysql2');

class AsociacionesController {
  // ... (código anterior)

  // Método para obtener todas las asociaciones Materia-Sección
  static obtenerAsociacionesMateriaSeccion(req, res) {
    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    connection.query('SELECT * FROM asociaciones_materia_seccion', (err, results) => {
      if (err) {
        console.error('Error al obtener asociaciones Materia-Sección:', err);
        res.status(500).send('Error al obtener asociaciones Materia-Sección');
      } else {
        res.json(results);
      }

      connection.end();
    });
  }

  // Método para agregar una nueva asociación Materia-Sección
  static agregarAsociacionMateriaSeccion(req, res) {
    const { id_materia, id_seccion } = req.body;

    if (!id_materia || !id_seccion) {
      return res.status(400).send('Los campos "id_materia" y "id_seccion" son obligatorios.');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'INSERT INTO asociaciones_materia_seccion (id_materia, id_seccion) VALUES (?, ?)';
    const values = [id_materia, id_seccion];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al agregar asociación Materia-Sección:', err);
        res.status(500).send('Error al agregar asociación Materia-Sección');
      } else {
        res.send('Asociación Materia-Sección agregada exitosamente.');
      }

      connection.end();
    });
  }

  // Método para editar una asociación Materia-Sección existente
  static editarAsociacionMateriaSeccion(req, res) {
    const asociacionId = req.params.id;
    const { id_materia, id_seccion } = req.body;

    if (!id_materia || !id_seccion) {
      return res.status(400).send('Los campos "id_materia" y "id_seccion" son obligatorios.');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'UPDATE asociaciones_materia_seccion SET id_materia = ?, id_seccion = ? WHERE id_asociacion = ?';
    const values = [id_materia, id_seccion, asociacionId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al editar asociación Materia-Sección:', err);
        res.status(500).send('Error al editar asociación Materia-Sección');
      } else {
        res.send('Asociación Materia-Sección editada exitosamente.');
      }

      connection.end();
    });
  }

  // Método para eliminar una asociación Materia-Sección
  static eliminarAsociacionMateriaSeccion(req, res) {
    const asociacionId = req.params.id;

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'DELETE FROM asociaciones_materia_seccion WHERE id_asociacion = ?';
    const values = [asociacionId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al eliminar asociación Materia-Sección:', err);
        res.status(500).send('Error al eliminar asociación Materia-Sección');
      } else {
        res.send('Asociación Materia-Sección eliminada exitosamente.');
      }

      connection.end();
    });
  }
// asociacionesController.js

// ... (código anterior)

// Método para obtener todas las asociaciones Evaluación-Actividad
static obtenerAsociacionesEvaluacionActividad(req, res) {
    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    connection.query('SELECT * FROM asociaciones_evaluacion_actividad', (err, results) => {
      if (err) {
        console.error('Error al obtener asociaciones Evaluación-Actividad:', err);
        res.status(500).send('Error al obtener asociaciones Evaluación-Actividad');
      } else {
        res.json(results);
      }

      connection.end();
    });
}

// Método para agregar una nueva asociación Evaluación-Actividad
static agregarAsociacionEvaluacionActividad(req, res) {
    const { id_evaluacion, id_actividad } = req.body;

    if (!id_evaluacion || !id_actividad) {
      return res.status(400).send('Los campos "id_evaluacion" y "id_actividad" son obligatorios.');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'INSERT INTO asociaciones_evaluacion_actividad (id_evaluacion, id_actividad) VALUES (?, ?)';
    const values = [id_evaluacion, id_actividad];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al agregar asociación Evaluación-Actividad:', err);
        res.status(500).send('Error al agregar asociación Evaluación-Actividad');
      } else {
        res.send('Asociación Evaluación-Actividad agregada exitosamente.');
      }

      connection.end();
    });
}

// Método para editar una asociación Evaluación-Actividad existente
static editarAsociacionEvaluacionActividad(req, res) {
    const asociacionId = req.params.id;
    const { id_evaluacion, id_actividad } = req.body;

    if (!id_evaluacion || !id_actividad) {
      return res.status(400).send('Los campos "id_evaluacion" y "id_actividad" son obligatorios.');
    }

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'UPDATE asociaciones_evaluacion_actividad SET id_evaluacion = ?, id_actividad = ? WHERE id_asociacion = ?';
    const values = [id_evaluacion, id_actividad, asociacionId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al editar asociación Evaluación-Actividad:', err);
        res.status(500).send('Error al editar asociación Evaluación-Actividad');
      } else {
        res.send('Asociación Evaluación-Actividad editada exitosamente.');
      }

      connection.end();
    });
}

// Método para eliminar una asociación Evaluación-Actividad
static eliminarAsociacionEvaluacionActividad(req, res) {
    const asociacionId = req.params.id;

    const connection = mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      user: 'sql10688798',
      password: 'gfQpphcCqq',
      database: 'sql10688798',
      port: 3306
    });

    const query = 'DELETE FROM asociaciones_evaluacion_actividad WHERE id_asociacion = ?';
    const values = [asociacionId];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al eliminar asociación Evaluación-Actividad:', err);
        res.status(500).send('Error al eliminar asociación Evaluación-Actividad');
      } else {
        res.send('Asociación Evaluación-Actividad eliminada exitosamente.');
      }

      connection.end();
    });
}

}

module.exports = AsociacionesController;
