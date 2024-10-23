// El archivo app.js es el archivo de ejecucion de nuestro aplicativo web
// Aca vamos a configurar nuestro servidor con EXPRESS y vamos a gestionar todo lo relacionado con la logica de negocio-> conexion base de datos, peticiones, respuestas

//1. IMPORTA LAS DEPENDENCIAS Y MODULOS QUE NECESITAMOS
import express from 'express';//ECMAS6


//2. CONFIGURAR EL USO DE NUESTRO SERVIDOR
const app = express();
const port = 3000; //3000, 6000, 9000

//3. EJECUTAR EL SERVIDOR EN NUESTRO COMPUTADOR
app.listen(port, ()=>{
    console.log('El servidor esta ejecutandose correctamente, en el puerrto', port);
});