import {getConnection} from "../database/database";

const getImagenes = async(req,res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM imagenes");
        console.log(result);
        res.json(result)
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const postImagenes = async(req,res) => {
    try {
        const {url, imagen_Id, tipoImagen} = req.body;
        const Imagen = {url, imagen_Id, tipoImagen};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO imagenes SET?", Imagen);
        console.log(result);
        res.json(result);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteImagenes = async(req,res) => {
    try {
        const {Id_Imagen} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM imagenes WHERE Id_Imagen = ?", Id_Imagen);
        console.log(result);
        res.json(result);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateImagenes = async(req,res) => {
    try {
        const {Id_Imagen} = req.params;
        const {url, imagen_Id, tipoImagen} = req.body;
        const Imagen = {url, imagen_Id, tipoImagen};
        const connection = await getConnection();
        const result = await connection.query("UPDATE imagenes SET ? WHERE Id_Imagen =?", [Imagen, Id_Imagen]);
        console.log(result);
        res.json(result)
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getImagenes,
    postImagenes,
    deleteImagenes,
    updateImagenes
}