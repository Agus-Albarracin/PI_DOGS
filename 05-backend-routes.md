# **PROCESO DE CREACION HANDLERS BACK-END**
### **🟧🟧 ES IMPORTANTE HABER TERMINO CON LOS PASOS DE "04 - backend - handlers" antes continuar 🟧🟧**

NOTA:<br />
cada vez que haya un emoji de 🔴 es parte de una instrucción.<br />
cada vez que haya un emoji de 🟡 es parte de una anotacion.<br />
cada vez que haya un emoji de 🆎 es un ejemplo.<br />
cada vez que haya un emoji de 🗒️ es una nota que dejo para revisar.<br />
cada vez que haya un emoji de 🧩 hace referencia a un archivo.<br />

---
```bash
```
---


🔴Crearemos los archivos que contendran los handlers que manejan las rutas, aparte del **indexroutes.js** que ya habiamos creado.
- dogs__routes.js
- temps__routes.js.

🔴Crear las funciones de cada ruta y exportarlas.<br />
🔴Importarlas en indexroutes.js<br /> 



<br />

## 🧩 dogs__routes

🔴Requerimos desde la carpeta **handlers** los modulos con las funciones.<br />
🔴Importar la funcion con express y Router.<br />
<br />

```bash

const dogs__router = require("express").Router();
const { get__all_or_name_dogs, get__id_dogs, } = require("../handlers/getDogsHandler");
const { post__dogs  } = require("../handlers/postDogsHandler")
const { deleteDogsHandler  } = require("../handlers/deleteDogsHandler")

```
🔴En **dogs__routes.js** crear las rutas, con los metodos https get post etc y pasarle como parametro (el string de la url, funcion)<br />

```bash
// GET todos o por nombre
dogs__router.get("/", get__all_or_name_dogs);

// GET por id
dogs__router.get("/:id", get__id_dogs);

// POST nuevo perro
dogs__router.post("/", post__dogs );

// DELETE por id
dogs__router.delete("/:id", deleteDogsHandler );

```
🔴Exprotar el modulo.<br />

```bash
module.exports = dogs__router;
```
<br />


## 🧩 temps__routes

🔴Requerimos desde la carpeta **handlers** los modulos con las funciones.<br />
🔴Importar la funcion con express y Router.<br />
<br />

```bash
const temps__routes = require("express").Router();
const { getTempsHandler } = require("../handlers/getTempsHandler");
```
🔴En **temps__routes.js** crear las rutas, con los metodos https get post etc y pasarle como parametro (el string de la url, funcion)<br />

```bash
// GET todos los temperamentos
temps__routes.get("/", getTempsHandler);

```
---
<br />
🔴 En app.js requerir router desde el indexroutes.js este contendra las rutas que le pasaremos a nuestro end-point<br />
<br />

```bash
const { router } = require("./routes/indexroutes")

app__server.use(router)
```
🔴Exprotar el modulo.<br />

```bash
module.exports = temps__router;
```
<br />

---

### **Indexroutes.js**
<br />

🔴En **indexroutes.js** requerimos de las rutas **dogs__routes** y **temps__routes**<br />
🔴Usamos el router con su metodo.use y le pasamos por parametro el string con la URL de la ruta y los modulos.<br />

```bash
const dogs__routes= require("./dogs__routes")
const temps__routes = require("./temps__routes")

router.use("/dogs", dogs__routes);
router.use("/temperaments", temps__routes);

```
---

### **En app.js**

🔴En app.js requerimos de router desde **indexroutes.js**.
🔴Requerimos de la base de datos, del archivo **db.js**
🔴Y con el metodo use le pasamos como parametro "/" y le pasamos la funcion routes.
<br />
```bash
app__server.use("/", routes);
```
<br />

