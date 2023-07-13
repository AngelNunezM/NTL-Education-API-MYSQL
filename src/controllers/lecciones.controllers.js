import {getConnection} from "../database/database";

const getLecciones = async(req,res) => 
{
   try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM lecciones");
        console.log(result);
        res.json(result);
   }
   catch(error){
    res.status(500);
    res.send(error.message);
   }
}

const addLecciones = async(req,res) => 
{
   try{
        const {Nombre, URL, Fragmento, Id_Secciones, Idplataforma} = req.body;
        const Leccion =  {Nombre, URL, Fragmento, Id_Secciones, Idplataforma};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO lecciones SET?", Leccion);
        console.log(result);
        res.json(result);
   }
   catch(error){
    res.status(500);
    res.send(error.message);
   }
}

//eliminame estas
const deleteLecciones = async(req,res) => 
{
   try{
        const {Id_Lecciones} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE * FROM lecciones WHERE Id_Lecciones = ?", Id_Lecciones);
        console.log(result);
        res.json(result);
   }
   catch(error){
    res.status(500);
    res.send(error.message);
   }
}

const updateLecciones = async(req,res) => 
{
   try{
        const {Id_Lecciones} = req.params;
        const {Nombre, IdLecciones} = req.body;
        const Leccion = {Nombre, IdLecciones};
        const connection = await getConnection();
        const result = await connection.query("UPDATE  lecciones SET ? WHERE Id_Lecciones = ?", [Leccion,Id_Lecciones]);
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
    getLecciones,
    addLecciones,
    deleteLecciones,
    updateLecciones
}

