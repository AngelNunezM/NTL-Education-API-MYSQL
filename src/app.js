import express from "express";
import morgan from "morgan";

//routes importadas
import usuariosRoutes from "./routes/usuarios.routes"; 
import cursosRoutes from "./routes/cursos.routes";
import perfilRoutes from "./routes/perfil.routes";
import requerimientosRoutes from "./routes/requerimientos.routes";
import competenciasRoutes from "./routes/competencias.routes";
import preciosRoutes from "./routes/precios.routes";
import descripcionesRoutes from "./routes/descripciones.routes";
import seccionesRoutes from "./routes/secciones.routes";
import recursosRoutes from "./routes/recursos.routes";
import calificacionesRoutes from "./routes/calificaciones.routes";
import leccionesRoutes from './routes/lecciones.routes';
import plataformasRoutes from './routes/plataformas.routes';
import imagenesRoutes from './routes/imagenes.routes';
import cursoUsuarioRoutes from './routes/cursoUsuario.routes';

const app = express();

//settings
app.set('port', 9000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/Usuarios',usuariosRoutes); //USUARIOS 
app.use('/api/Cursos',cursosRoutes); //CURSOS
app.use('/api/Perfiles',perfilRoutes); // PERFILES
app.use('/api/Requerimientos',requerimientosRoutes); // REQUERIMIENTOS
app.use('/api/Competencias',competenciasRoutes); // COMPETENCIAS
app.use('/api/Precios', preciosRoutes); // PRECIOS
app.use('/api/Descripciones', descripcionesRoutes); // DESCRIPCIONES
app.use('/api/Recursos', recursosRoutes); // RECURSOS
app.use('/api/Secciones', seccionesRoutes); // SECCIONES
app.use('/api/Calificaciones', calificacionesRoutes); //CALIFICACIONES
app.use('/api/Lecciones', leccionesRoutes); // LECCIONES
app.use('/api/Plataformas', plataformasRoutes); // PLATAFORMAS
app.use('/api/Imagenes', imagenesRoutes); // IMAGENES
app.use('/api/CursoUsuarios', cursoUsuarioRoutes); // CURSO_USUARIOS

export default app;
