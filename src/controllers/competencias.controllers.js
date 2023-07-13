import {getConnection} from "./../database/database";

//obtenemos las competencias del curso
const getCompetencias = async(req,res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM competencias");
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
} 

//Agregar competencias
const postCompetencias = async(req,res) =>{
    try{
        const {Nombre, IdCurso} = req.body;
        const Competencia = {Nombre, IdCurso};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO competencias SET?", Competencia);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//Eliminar Competencias
const deleteCompetencias = async(req,res) =>{
    try{
        const {Id_Competencia} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM competencias WHERE Id_Competencia = ?", Id_Competencia);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//Actualizar competencias 
const updateCompetencias = async(req,res) =>{
    try{
        const {Id_Competencia} = req.params;
        const {Nombre, IdCurso} = req.body;
        const Competencia = {Nombre, IdCurso};
        const connection = await getConnection();
        const result = await connection.query("UPDATE competencias SET ? WHERE Id_Competencia = ", [Competencia, Id_Competencia]);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}


export const methods = {
    getCompetencias,
    postCompetencias,
    deleteCompetencias,
    updateCompetencias
};
//te amo