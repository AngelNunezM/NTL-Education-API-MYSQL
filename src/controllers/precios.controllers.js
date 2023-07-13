import {getConnection} from "./../database/database";

//obtengo el precio de los cursos
const getPrecios = async(req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM precio");
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//agregar precios nuevos
const postPrecios = async(req,res) => {
    try{
        const {Nombre, Valor} = req.body;
        const Precio = { Nombre, Valor};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO precio SET?",Precio);
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//Elimino el precio del catalogo
const deletePrecios = async(req,res) => {
    try{
        const {Id_Precio} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM precio WHERE Id_Precio = ?", Id_Precio);
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//Actualizar el precio del catalogo
const updatePrecios = async(req,res) => {
    try{
        const {Id_Precio} = req.params;
        const {Nombre, Valor} = req.body;
        const Precio = { Nombre, Valor};
        const connection = await getConnection();
        const result = await connection.query("UPDATE precio SET ? WHERE Id_Precio = ?", [Precio,Id_Precio]);
        console.log(result);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

//EXPORTAR EL CONTROLADOR
export const methods = {
    getPrecios,
    postPrecios,
    deletePrecios,
    updatePrecios
}