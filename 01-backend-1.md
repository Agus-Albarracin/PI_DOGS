# **PROCESO DE CREACION PI - BACKEND.**<br />
NOTA:<br />
cada vez que haya un emoji de 🔴 es parte de una instrucción.<br />
cada vez que haya un emoji de 🟡 es parte de una anotacion.<br />


```bash
```
---
<br />
<br />

# **Inicialzo (backend)** <br />
🔴Creamos carpeta api <br />
<br />

```bash
npm init -y
npm i express axios nodemon morgan cors sequelize pg pg-hstore dotenv
```
<br />

---
<br />
🔴En el archivo package.json, añadimos en scripts<br />
🟡(esto va a poner a nodemon a escuchar el archivo index.js)<br />
<br />
<br />

```bash
"start": "nodemon index.js"
```

<br />

---

<br />
<br />

# **App.js**
<br />
🔴Crear carpeta src<br />
🔴Dentro creamos el archivo app.js    <br />
🔴Requerimos a express<br />
<br />
<br />

```bash
const express = require("express");
const app__server = express();
module.exports = app__server;
```

<br />
<br />

---

<br />
🔴Dentro de la carpeta src, en el archivo app.js<br />
🔴Requerimos a morgan y cors, 2 middleware.<br />
🔴Usando el metodo .use invocamos a express.json() para convertir lo qe nos llegue por express en json.<br />
🔴Invocamos a morgan ejecutado y le pasamos el parametro de "dev" para que se ejecute solo en el ambito de desarrollo.<br />
🔴Invocamos a cors ejecutado.<br />
🔴Y colocamos una función de middleware con Controles de acceso;<br />

<br />
🟡 un middleware es una intermediario/una funcion que se ejecuta antes de la resolución de la request.<br />
O puede ser cualquier funcion que pongamos como intermediario en nuestra aplicacion con un req, res y next como parametros<br /><br /><br />
🆎EJEMPLO:<br /><br />
<img src="./imgMD/ejDeMiddleware.jpg" alt="" width="1000px" />
<br /><br />
<img src="./imgMD/ejMiddlewareEnRequest.jpg" alt="" width="1000px" />
<br />
<br />
<br />
🟡 el metodo use() nos permite decirle a la aplicacion que ocupe algun middleware.<br />

🟡 MORGAN es un middleware.<br />
<br />
<br />

```bash
const morgan = require("morgan");
const cors = require("cors")

app__server.use(express.json())
app__server.use(morgan("dev"));
app__server.use(cors())

app__server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    ); 
    next();
 });
```
<br />
<br />

# **Index.js**
<br />
🔴 Crear archivo index.js en api.<br />
🔴En la carpeta api, dentro del archivo index.js<br />
🔴ponemos a escuchar el servidor en algun puerto.<br />
🔴requerimos app.<br />
🔴creamos const con el puerto.<br />
<br />
<br />

```bash
const server = require("./src/app");
const PORT = 3001;

server.listen(PORT, () =>{
   console.log(`Server iniciado en el puerto ${PORT}`)
})
```
<br />
<br />

---
<br />
🔴Crear una carpeta routes en la carpeta src y dentro crear un archivo indexroutes.js que contendra las rutas con los "handlers".<br />
🔴Crear una constante router, requerir express, usar el metodo Router de express y ejecutarlo.<br />
🔴Por ultimo exportar router del modulo.
<br />
🟡 La funcion .Router de express, nos permite manejar las rutas con sus respectivos handlers, para crear manejadores de rutas montables y modulares.<br />
<br />
<br />

```bash
const express = require("express");
const router = express.Router();

module.exports = { router }
```
<br />
<br />



