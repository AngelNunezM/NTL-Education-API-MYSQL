import {getConnection} from "./../database/database";

//obtenemos los Cursos
const getCursos = async(req,res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("Select C.Id_Cursos, C.Titulo, C.Subtitulo, C.Descripcion, C.Estatus, C.IdUsuario, P.Valor, P.Nombre, count(CU.IdUsuario) as Total from cursos as C Inner join Precio as P On P.Id_Precio=C.IdPrecio left join curso_usuario as CU On CU.IdCurso=C.Id_Cursos group by C.Id_Cursos, C.Titulo, C.Subtitulo, C.Descripcion, C.Estatus, C.IdUsuario, P.valor, P.nombre; ");
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//obtenemos un curso en especifico
const getOneCursos = async(req,res) =>{
    try{
        const {Id_Cursos} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT C.Id_Cursos, C.Titulo, C.Subtitulo, C.Descripcion, C.Estatus, P.Valor, U.Nombre, C.IdUsuario FROM cursos AS C INNER JOIN precio AS P ON C.IdPrecio = P.Id_Precio INNER JOIN usuarios AS U ON U.Id_Usuario = C.IdUsuario where Id_Cursos =  ?", Id_Cursos);
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//agregar cursos
const addCursos = async(req,res) =>{
    try{
        const {Titulo, Subtitulo, Descripcion, Estatus, IdUsuario, IdPrecio} = req.body;
        const Curso = {Titulo, Subtitulo, Descripcion, Estatus, IdUsuario, IdPrecio};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Cursos SET?", Curso);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//eliminar cursos
const deleteCursos = async(req,res) =>{
    try{
        const {Id_Cursos} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM cursos WHERE Id_Cursos = ?", Id_Cursos);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const updateCursos = async(req,res) =>{
    try{
        const {Id_Cursos} = req.params;
        const {Titulo, Subtitulo, Descripcion, Estatus, IdUsuario, IdPrecio} = req.body;
        const Curso = {Titulo, Subtitulo, Descripcion, Estatus, IdUsuario, IdPrecio};
        const connection = await getConnection();
        const result = await connection.query("UPDATE cursos SET ? WHERE Id_Cursos = ?", [Curso, Id_Cursos]);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getCursos,
    getOneCursos,
    addCursos,
    deleteCursos,
    updateCursos
};