// EN ESTE ARCHIVO ESCRBIMOS EL CODIGO PARA LA CONEXION CON LA BASE DE DATOS

// 1. IMPORTAR LAS DEPENDENCIAS QUE SE NECESITAN
import mongoose from 'mongoose';

// 2.CREAR UNA FUNCION PARA CONECTAR LA BASE DE DATOS
//FUNCION ASINCRONICA - NECESITAMOS ESPERAR UNA RESPUESTA

  export async function connectionMongo(){
    //DEBEMOS CONTROLAR LOS ERRORES - boque try - catch
    // try - gestiona cuando la respuesta es positiva
    // catch - atrapa los errores
    try {
        await mongoose.connect(process.env.DB_URL,{});
        console.log('conexion existosa con la base de datos');
    } catch (error) {
        console.error('un error de conexion:' + error)
    }
}