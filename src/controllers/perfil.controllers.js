import {getConnection} from "../database/database";

//obtenemos el perfil
const getPerfil = async(req,res) =>{
    try{
        const {Id_Perfil} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM perfil WHERE Id_Perfil = ?", Id_Perfil);
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//se actualiza el perfil
const updatePerfil = async(req,res) =>{
    try{
        const {Id_Perfil} = req.params;
        const {Titulo, Bibliografia, IdUsuario, photoPerfil} = req.body;
        const Perfil = {Titulo, Bibliografia, IdUsuario, photoPerfil};
        const connection = await getConnection();
        const result = await connection.query("UPDATE perfil SET ? WHERE Id_Perfil = ?", [Perfil, Id_Perfil]);
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getPerfil,
    updatePerfil
};