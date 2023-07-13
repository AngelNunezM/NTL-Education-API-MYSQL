import {getConnection} from "./../database/database";

//obtenemos los Usuarios
const getUsuarios = async(req,res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios");
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const addUsuarios = async(req,res) =>{
    try{
        const {Nombre, Email, Passwordd} = req.body;
        const Usuario = {Nombre, Email, Passwordd};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO usuarios SET?", Usuario);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const deleteUsuarios = async(req,res) =>{
    try{
        const {Id_Usuario} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuarios WHERE Id_Usuario = ?", Id_Usuario);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const updateUsuarios = async(req,res) =>{
    try{
        const {Id_Usuario} = req.params;
        const {Nombre, Email, Passwordd} = req.body;

        const Usuario = {Nombre, Email, Passwordd};
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuarios SET ? WHERE Id_Usuario = ?", [Usuario, Id_Usuario]);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getUsuarios,
    addUsuarios,
    deleteUsuarios,
    updateUsuarios
};