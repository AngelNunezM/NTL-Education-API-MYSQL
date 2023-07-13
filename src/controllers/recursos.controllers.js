import {getConnection} from "../database/database";


const getRecursos = async(req,res)=> {
    try {
        const connection = await getConnection();
        const result = await connection.query("Select * from recursos");
        console.log(result);
        res.json(result);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
//apoco si tilin?

const postRecursos = async(req,res)=> {
    try {
        const { URL, recursos_Id, TipoRecursos } = req.body;
        const Recurso = { URL, recursos_Id, TipoRecursos };
        const connection = await getConnection();
        const result = await connection.query("Insert Into Recursos SET?",Recurso);
        console.log(result);
        res.json(result);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
//delete
const deleteRecursos = async(req,res)=> {
    try {
        const {Id_Recursos} = req.params;
        const connection = await getConnection();
        const result = await connection.query("Delete from recursos where Id_Recursos = ?", Id_Recursos);
        console.log(result);
        res.json(result);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//Update

const updateRecursos = async(req,res)=> {
    try {
        const {Id_Recursos} = req.params;
        const { URL, recursos_Id, TipoRecursos } = req.body;
        const Recurso = {URL, recursos_Id, TipoRecursos };
        const connection = await getConnection();
        const result = await connection.query("UPDATE recursos SET ? WHERE Id_Recursos = ?", [Recurso.Id_Recursos]);
        console.log(result);
        res.json(result);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//l

export const methods = {
    getRecursos,
    postRecursos,
    deleteRecursos,
    updateRecursos,
}