// El archivo app.js es el archivo de ejecucion de nuestro aplicativo web
// Aca vamos a configurar nuestro servidor con EXPRESS y vamos a gestionar todo lo relacionado con la logica de negocio-> conexion base de datos, peticiones, respuestas

//1. IMPORTA LAS DEPENDENCIAS Y MODULOS QUE NECESITAMOS
import express from 'express';//ECMAS6
import dotenv from 'dotenv'; // dependencia para manejar las variables de entorno
import { connectionMongo } from './src/config/dataBase.js';

//2. CONFIGURAR EL USO DE NUESTRO SERVIDOR
const app = express();
dotenv.config();// configurando para poder usar variables de entorno
connectionMongo();



const port = process.env.PORT//3000, 6000, 9000

//3. EJECUTAR EL SERVIDOR EN NUESTRO COMPUTADOR
app.listen(port, ()=>{
    console.log('El servidor esta ejecutandose correctamente, en el puerrto', port);
});