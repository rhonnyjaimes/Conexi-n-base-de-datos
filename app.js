const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const connection = mysql.createConnection({
  host: 'sql10.freemysqlhosting.net',
  user: 'sql10688798',
  password: 'gfQpphcCqq',
  database: 'sql10688798',
  port: 3306
});

connection.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

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

process.on('SIGINT', () => {
  connection.end();
  process.exit();
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});



const ProfesoresController = require('./profesoresController');

app.get('/profesores', ProfesoresController.obtenerProfesores);
app.post('/profesores', ProfesoresController.agregarProfesor);
app.put('/profesores/:id', ProfesoresController.editarProfesor);
app.delete('/profesores/:id', ProfesoresController.eliminarProfesor);


const MateriasController = require('./materiasController');

app.get('/materias', MateriasController.obtenerMaterias);
app.post('/materias', MateriasController.agregarMateria);
app.put('/materias/:id', MateriasController.editarMateria);
app.delete('/materias/:id', MateriasController.eliminarMateria);





const SeccionesController = require('./seccionesController');

app.get('/secciones', SeccionesController.obtenerSecciones);
app.post('/secciones', SeccionesController.agregarSeccion);
app.put('/secciones/:id', SeccionesController.editarSeccion);
app.delete('/secciones/:id', SeccionesController.eliminarSeccion);




const EventosController = require('./eventosController');

app.get('/eventos', EventosController.obtenerEventos);
app.post('/eventos', EventosController.agregarEvento);
app.put('/eventos/:id', EventosController.editarEvento);
app.delete('/eventos/:id', EventosController.eliminarEvento);



const ActividadesController = require('./actividadesController');

app.get('/actividades', ActividadesController.obtenerActividades);
app.post('/actividades', ActividadesController.agregarActividad);
app.put('/actividades/:id', ActividadesController.editarActividad);
app.delete('/actividades/:id', ActividadesController.eliminarActividad);



const EvaluacionesController = require('./evaluacionesController');

app.get('/evaluaciones', EvaluacionesController.obtenerEvaluaciones);
app.post('/evaluaciones', EvaluacionesController.agregarEvaluacion);
app.put('/evaluaciones/:id', EvaluacionesController.editarEvaluacion);
app.delete('/evaluaciones/:id', EvaluacionesController.eliminarEvaluacion);



const AsociacionesController = require('./asociacionesController');

app.get('/asociaciones-profesor-materia', AsociacionesController.obtenerAsociacionesProfesorMateria);
app.post('/asociaciones-profesor-materia', AsociacionesController.agregarAsociacionProfesorMateria);
app.put('/asociaciones-profesor-materia/:id', AsociacionesController.editarAsociacionProfesorMateria);
app.delete('/asociaciones-profesor-materia/:id', AsociacionesController.eliminarAsociacionProfesorMateria);

app.get('/asociaciones-materia-seccion', AsociacionesController.obtenerAsociacionesMateriaSeccion);
app.post('/asociaciones-materia-seccion', AsociacionesController.agregarAsociacionMateriaSeccion);
app.put('/asociaciones-materia-seccion/:id', AsociacionesController.editarAsociacionMateriaSeccion);
app.delete('/asociaciones-materia-seccion/:id', AsociacionesController.eliminarAsociacionMateriaSeccion);

app.get('/asociaciones-evaluacion-actividad-seccion', AsociacionesController.obtenerAsociacionesEvaluacionActividad);
app.post('/asociaciones-evaluacion-actividad-seccion', AsociacionesController.agregarAsociacionEvaluacionActividad);
app.put('/asociaciones-evaluacion-actividad-seccion/:id', AsociacionesController.editarAsociacionEvaluacionActividad);
app.delete('/asociaciones-evaluacion-actividad-seccion/:id', AsociacionesController.eliminarAsociacionEvaluacionActividad);

