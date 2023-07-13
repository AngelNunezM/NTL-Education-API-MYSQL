import {getConnection} from "./../database/database";

//obtenemos las Plataformas del curso
const getPlataformas = async(req,res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM plataforma");
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
} 

//Agregar Plataformas
const postPlataformas = async(req,res) =>{
    try{
        const {Nombre} = req.body;
        const Plataforma = {Nombre};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO plataforma SET?", Plataforma);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//Eliminar Plataformas
const deletePlataformas = async(req,res) =>{
    try{
        const {Id_Plataforma} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM plataforma WHERE Id_Plataforma = ?", Id_Plataforma);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//Actualizar Plataformas 
const updatePlataformas = async(req,res) =>{
    try{
        const {Id_Plataforma} = req.params;
        const {Nombre} = req.body;
        const Plataforma = {Nombre};
        const connection = await getConnection();
        const result = await connection.query("UPDATE plataforma SET ? WHERE Id_Plataforma = ", [Plataforma, Id_Plataforma]);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}


export const methods = {
    getPlataformas,
    postPlataformas,
    deletePlataformas,
    updatePlataformas
};
