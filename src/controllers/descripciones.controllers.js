import {getConnection} from "../database/database";

const getDescripciones = async(req,res) => 
{
   try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM descripcion");
        console.log(result);
        res.json(result);
   }
   catch(error){
    res.status(500);
    res.send(error.message);
   }
}
const addDescripciones = async(req,res) => 
{
   try{
        const {Nombre, IdLecciones} = req.body;
        const Descripcion =  {Nombre, IdLecciones}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO descripcion SET?", Descripcion);
        console.console.log(result);
        res.json(result);
   }
   catch(error){
    res.status(500);
    res.send(error.message);
   }
}

//eliminame estas
const deleteDescripciones = async(req,res) => 
{
   try{
        const {Id_Descripcion} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE * FROM descripcion WHERE Id_Descripcion = ?", Id_Descripcion);
        console.console.log(result);
        res.json(result);
   }
   catch(error){
    res.status(500);
    res.send(error.message);
   }
}

const updateDescripciones = async(req,res) => 
{
   try{
        const {Id_Descripcion} = req.params;
        const {Nombre, IdLecciones} = req.body;
        const Descripcion =  {Nombre, IdLecciones}
        const connection = await getConnection();
        const result = await connection.query("UPDATE  descripcion SET ? WHERE Id_Descripcion = ?", [Descripcion,Id_Descripcion]);
        console.console.log(result);
        res.json(result);
   }
   catch(error){
    res.status(500);
    res.send(error.message);
   }
}

//exportame estas 
export const methods = {
    getDescripciones,
    addDescripciones,
    deleteDescripciones,
    updateDescripciones
}
