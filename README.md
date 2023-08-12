# Api_PLC_Nodejs
Api en node js para comunicación via HTTP con PLC S7 1200 utilizando la libreria de comunicación LHTTP 

# Requisitos previos
<ul>
  <li>MYSQL</li>
  <li>Node js v16</li>
  <li>Tia portal v16</li>
</ul>

## Indicaciones
1. Clonar repositorio usando `git clone`
2. Una vez clonado el repositorio se instala el server de node js ingresando a la carpeta `api_plc` y ejecutando en la terminal `npm install`
3. Crear la base de datos y las tablas correspondientes importando el archivo `../db/querys.sql` o copiando el codigo directamente
4. Compilar y cargar el programa al tia portal
5. Ejecutar MYSQL la Base de datos
6. Correr server node js usando `npm start`
7. Setear el tia portal en modo monitor