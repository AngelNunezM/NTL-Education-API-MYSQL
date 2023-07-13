import {getConnection} from "../database/database";

const getCalificaciones = async(req,res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM calificacion");
        res.json(result)
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const postCalificaciones = async(req,res) => {
    try {
        const {Comentario, Valoracion, IdUsuario, IdCursos} = req.body;
        const Calificacion = {Comentario, Valoracion, IdUsuario, IdCursos};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO calificacion SET?", Calificacion);
        console.log(result);
        res.json(result);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteCalificaciones = async(req,res) => {
    try {
        const {Id_Calificacion} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM calificacion WHERE Id_Calificacion = ?", Id_Calificacion);
        console.log(result);
        res.json(result);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateCalificaciones = async(req,res) => {
    try {
        const {Id_Calificacion} = req.params;
        const {Comentario, Valoracion, IdUsuario, IdCursos} = req.body;
        const Calificacion = {Comentario, Valoracion, IdUsuario, IdCursos};
        const connection = await getConnection();
        const result = await connection.query("UPDATE calificacion SET ? WHERE Id_Calificacion =?", [Calificacion, Id_Calificacion]);
        console.log(result);
        res.json(result)
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getCalificaciones,
    postCalificaciones,
    deleteCalificaciones,
    updateCalificaciones
}