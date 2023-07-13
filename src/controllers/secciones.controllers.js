import {getConnection} from "./../database/database";

const getSecciones = async(req,res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM secciones")
        console.log(result);
        res.json(result)
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const postSecciones = async(req,res) => {
    try {
        const {Nombre, IdCurso} = req.body
        const Seccion = {Nombre, IdCurso}
        const connection = await getConnection()
        const result = await connection.query("INSERT INTO secciones SET?", Seccion)
        console.log(result)
        res.json(result)
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteSecciones = async(req,res) => {
    try {
        const {Id_Secciones} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Secciones WHERE Id_Secciones = ?", Id_Secciones)
        console.log(result);
        res.json(result)
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateSecciones = async(req,res) => {
    try {
        const {Id_Secciones} = req.params;
        const {Nombre, IdCurso} = req.body
        const connection = await getConnection();
        const result = await connection.query("UPDATE Secciones SET ? WHERE Id_Secciones =?", [Seccion, Id_Secciones])
        console.log(result);
        res.json(result)
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getSecciones,
    postSecciones,
    deleteSecciones,
    updateSecciones
}