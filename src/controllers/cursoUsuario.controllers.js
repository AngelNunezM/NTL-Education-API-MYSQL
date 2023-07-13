import {getConnection} from "./../database/database";

const getCurso_Usuarios = async(req,res) => 
{
   try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM curso_usuario");
        console.log(result);
        res.json(result);
   }
   catch(error){
    res.status(500);
    res.send(error.message);
   }
}

const getCurso_UsuariosID = async(req,res) => 
{
   try{
      const {IdCurso} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT count(IdUsuario) as Total FROM curso_usuario where IdCurso = ?",IdCurso );
        console.log(result);
        res.json(result);
   }
   catch(error){
    res.status(500);
    res.send(error.message);
   }
}

const postCurso_Usuarios = async(req,res) => 
{
   try{
        const {IdUsuario, IdCurso} = req.body;
        const Curso_Usuario =  {IdUsuario, IdCurso}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO curso_usuario SET?", Curso_Usuario);
        console.log(result);
        res.json(result);
   }
   catch(error){
    res.status(500);
    res.send(error.message);
   }
}



//exportame estas 
export const methods = {
    getCurso_Usuarios,
    postCurso_Usuarios,
    getCurso_UsuariosID
}