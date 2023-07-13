import { config } from "dotenv";

config();

//CONFIGURACION, obtenemos los datos desde el .env manteniendo la seguridad
export default{
    host:process.env.HOST,
    database:process.env.DATABASE,
    user:process.env.USER,
    password:process.env.PASSWORD
}