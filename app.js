const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'sql10.freemysqlhosting.net',
  user: 'sql10688798',
  password: 'gfQpphcCqq',
  database: 'sql10688798',
  port: 3306
});

// Conectar a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Ruta de prueba para verificar la conexión a la base de datos
app.get('/', (req, res) => {
  connection.query('SELECT 1 + 1 as result', (err, results) => {
    if (err) {
      console.error('Error en la consulta a la base de datos:', err);
      res.status(500).send('Error en la consulta a la base de datos');
    } else {
      res.send(`¡El servidor está funcionando! Resultado de la base de datos: ${results[0].result}`);
    }
  });
});

// Cerrar la conexión a la base de datos cuando se cierra la aplicación
process.on('SIGINT', () => {
  connection.end();
  process.exit();
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


// app.js

const ProfesoresController = require('./profesoresController');

// Rutas para Profesores
app.get('/profesores', ProfesoresController.obtenerProfesores);
app.post('/profesores', ProfesoresController.agregarProfesor);
app.put('/profesores/:id', ProfesoresController.editarProfesor);
app.delete('/profesores/:id', ProfesoresController.eliminarProfesor);

// app.js

const MateriasController = require('./materiasController');

// Rutas para Materias
app.get('/materias', MateriasController.obtenerMaterias);
app.post('/materias', MateriasController.agregarMateria);
app.put('/materias/:id', MateriasController.editarMateria);
app.delete('/materias/:id', MateriasController.eliminarMateria);




// app.js

const SeccionesController = require('./seccionesController');

// Rutas para Secciones
app.get('/secciones', SeccionesController.obtenerSecciones);
app.post('/secciones', SeccionesController.agregarSeccion);
app.put('/secciones/:id', SeccionesController.editarSeccion);
app.delete('/secciones/:id', SeccionesController.eliminarSeccion);



// app.js

const EventosController = require('./eventosController');

// Rutas para Eventos
app.get('/eventos', EventosController.obtenerEventos);
app.post('/eventos', EventosController.agregarEvento);
app.put('/eventos/:id', EventosController.editarEvento);
app.delete('/eventos/:id', EventosController.eliminarEvento);


// app.js

const ActividadesController = require('./actividadesController');

// Rutas para Actividades
app.get('/actividades', ActividadesController.obtenerActividades);
app.post('/actividades', ActividadesController.agregarActividad);
app.put('/actividades/:id', ActividadesController.editarActividad);
app.delete('/actividades/:id', ActividadesController.eliminarActividad);


// app.js

const EvaluacionesController = require('./evaluacionesController');

// Rutas para Evaluaciones
app.get('/evaluaciones', EvaluacionesController.obtenerEvaluaciones);
app.post('/evaluaciones', EvaluacionesController.agregarEvaluacion);
app.put('/evaluaciones/:id', EvaluacionesController.editarEvaluacion);
app.delete('/evaluaciones/:id', EvaluacionesController.eliminarEvaluacion);


// app.js

const AsociacionesController = require('./asociacionesController');

// Rutas para Asociaciones Profesor-Materia
app.get('/asociaciones-profesor-materia', AsociacionesController.obtenerAsociacionesProfesorMateria);
app.post('/asociaciones-profesor-materia', AsociacionesController.agregarAsociacionProfesorMateria);
app.put('/asociaciones-profesor-materia/:id', AsociacionesController.editarAsociacionProfesorMateria);
app.delete('/asociaciones-profesor-materia/:id', AsociacionesController.eliminarAsociacionProfesorMateria);

// Rutas para Asociaciones Materia-Seccion
app.get('/asociaciones-materia-seccion', AsociacionesController.obtenerAsociacionesMateriaSeccion);
app.post('/asociaciones-materia-seccion', AsociacionesController.agregarAsociacionMateriaSeccion);
app.put('/asociaciones-materia-seccion/:id', AsociacionesController.editarAsociacionMateriaSeccion);
app.delete('/asociaciones-materia-seccion/:id', AsociacionesController.eliminarAsociacionMateriaSeccion);

// Rutas para Asociaciones Evaluacion-Actividad-Seccion
app.get('/asociaciones-evaluacion-actividad-seccion', AsociacionesController.obtenerAsociacionesEvaluacionActividadSeccion);
app.post('/asociaciones-evaluacion-actividad-seccion', AsociacionesController.agregarAsociacionEvaluacionActividadSeccion);
app.put('/asociaciones-evaluacion-actividad-seccion/:id', AsociacionesController.editarAsociacionEvaluacionActividadSeccion);
app.delete('/asociaciones-evaluacion-actividad-seccion/:id', AsociacionesController.eliminarAsociacionEvaluacionActividadSeccion);

