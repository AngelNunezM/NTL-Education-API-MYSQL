import {getConnection} from "./../database/database";

//obtenemos los Cursos
const getRequerimientos = async(req,res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM requerimientos");
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//agregar cursos
const addRequerimientos = async(req,res) =>{
    try{
        const {Nombre, IdCurso} = req.body;
        const Requerimiento = {Nombre, IdCurso};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO requerimientos SET?", Requerimiento);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//eliminar cursos
const deleteRequerimientos = async(req,res) =>{
    try{
        const {Id_Requerimientos} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM requerimientos WHERE Id_Requerimientos = ?", Id_Requerimientos);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const updateRequerimientos = async(req,res) =>{
    try{
        const {Id_Requerimientos} = req.params;
        const {Nombre, IdCurso} = req.body;

        const Requerimiento = {Nombre, IdCurso};
        const connection = await getConnection();
        const result = await connection.query("UPDATE requerimientos SET ? WHERE Id_Requerimientos = ?", [Requerimiento, Id_Requerimientos]);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getRequerimientos,
    addRequerimientos,
    deleteRequerimientos,
    updateRequerimientos
};