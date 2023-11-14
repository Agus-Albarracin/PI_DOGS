# **PROCESO DE CREACION HANDLERS BACK-END**
### **🟧🟧 ES IMPORTANTE HABER TERMINO CON LOS PASOS DE "03 - backend - controllers" antes continuar 🟧🟧**

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
#  **Handlers**
Crearemos los **handlers**, son los manejadores de las rutas, conectan el flujo de información con las fuentes internas del back-end.<br />
<br />

🔴Dentro de la carpeta src, crearemos nuestra carpeta de handlers, donde crearemos los archivos que contendran las funciones <br />manejadores:
- **deleteDogsHandler.js** 
- **getDogsHandler.js**
- **getTempsHandler.js**
- **postDogsHandler.js**
<br />
<br />

---
<br />
<br />

🧩 **deleteDogsHandler** 
<br />
<br />

Manejaremos la ruta de delete.<br />

🔴Requerimos de la funcion deleteDog desde la carpeta delete que se encontra la carpeta controllers.<br />
🔴Creamos la funcion contenedora, esta recibira el { id } que recibimos por params "req.params".<br />
🔴Usaremos el try e intentamos llamar la funcion deleteDog y le pasamos el id por parametro.<br />
🔴En caso de que nos de una respuesta exitosa devolveremos un status en 200 con un json que tenga la data.<br />
🔴En caso de un error, con catch manejaremos el error que nos retorne un status 404 con json que tenga el error.message.<br />
🔴Por ultimos exportamos el modulo.<br />

```bash
const deleteDog = require("../controllers/delete/deleteDog");

// Maneja la ruta DELETE de los perros
const deleteDogsHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await deleteDog(id)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(404).json(error.message)
    }
}

module.exports = { deleteDogsHandler }
```

---

<br />
<br />

🧩 **getDogsHandler**
<br />
Este modulo manejara las rutas de get, por nombre, por id o todos.
<br />
<br />

🔴Requerimos las siguientes funciones desde la carpeta get que se encuentra en controllers. 
- __getAllDogs
- _getDogById
- _getDogByName.
<br />

```bash
const __getAllDogs = require("../controllers/get/___getAllDogs");
const _getDogById = require("../controllers/get/_getDogById");
const _getDogByName = require("../controllers/get/_getDogByName");
```
<br />
🔴Creamos la funcion contenedora (por nombre o  todos.)<br />
🔴usaremos el try, capturamos el { name } que recbimos por req.query.<br />
🔴En caso de que no tengamos el nombre, enviamos un status 200 con todos los perros, invocando la funcion **__getAllDogs**<br />
🔴Retornamos la respuesta con la funcion _getDogByName y le pasamos name por parametro.<br />
🔴 en caso de un error enviamos un status 500, con un json que contenga el error.message.<br />
<br />

```bash
const get__all_or_name_dogs = async (req, res) => {
  try {
    const { name } = req.query;

    // Si no me pasan el name, traigo todos
    if(!name) return res.status(200).send(await __getAllDogs());
    return res.send(await _getDogByName(name));
  }
  catch (error) {
    return res.status(500).json(error.message)
  }
}
```
<br />

🔴Creamos la funcion contenedora de (por id)<br />
🔴Capturamos el id que recibimos por req.params.<br />
🔴Usamos el try, hacemos una variable con la funcion **_getDogById** y le pasamos el id por parametro.<br />
🔴retornamos un status 200 con un json con la info.<br />
🔴en caso de un error con el catch, retornamos un status 500 con un json que tenga el error.message.<br />
<br />

```bash
const get__id_dogs = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await _getDogById(id);
    return res.status(200).json(response)
  }
  catch (error) {
    return res.status(500).json(error.message)
  }
}
```
<br />
🔴 por ultimos exportamos el modulo con un destruccturing con las funciones.<br />

```bash
module.exports = {
  get__all_or_name_dogs,
  get__id_dogs,
}
```

---
<br />
<br />

🧩 **getTempsHandler**
<br />
Este modulo manejara las rutas get de los temperaments.
<br />
<br />

🔴Requerimos de Temperaments desde nuestro modulo donde tenemos la BD.<br />
🔴Requerimos del modulo **__getAllTemps** desde la carpeta get dentro de la carpeta controllers.<br />
<br />

```bash
const { Temperaments } = require("../db")
const ___getAllTemps = require("../controllers/get/___getAllTemps");
```
<br />
🔴Creamos la funcion contenedora, donde con try invocamos la funcion **___getAllTemps()**;<br />
🔴Creamos una variable donde a nuestro models Temperaments y usaremos el metodo **findAll()** de sequelize<br />
<br />

```bash
const getTempsHandler = async (req, res) => {
  try {
    await ___getAllTemps();
    const all__temps = await Temperaments.findAll();
```
<br />
🟡El método findAll permite recuperar varias filas en base a un criterio formado en la cláusula where. El método devuelve un array con <br />las filas recuperadas. Cada fila se corresponde con una instancia de la clase del modelo.<br />
<br />

```bash
    res.status(200).send(all__temps)
  }
  catch (error) {
    return res.status(500).json(error.message)
  }
}
```
<br />
🔴Enviamos un status 200 con la info.<br />
🔴En caso de error con el catch enviamos un status 500 con un json que contenga el error.message.<br />
🔴Por ultimos exportamos el modulo.<br />
<br />

```bash
module.exports = {
  getTempsHandler
}

```
<br />

---

🧩 **postDogsHandler**
<br />
🔴Requerimos el modulo postNewDog desde la carpeta post dentro de la carpeta controllers.
<br />

```bash
const postNewDog = require("../controllers/post/postNewDog");
```
<br />

🔴Creamos la funcion contenedora, donde recibiremos por req.body los atributos del perro.
<br />

```bash
const post__dogs = async (req, res) => {
    try {
      const { name, image, height, weight, life_span, temperaments } = req.body;
```
<br />

🔴Creamos una variable donde invocamos la funcion **postNewDog** y le psamos por parametro los atributos.<br />
🔴Enviamos un status 200 con la info.<br />
<br />

```bash
 const newDog = await postNewDog(name, image, height, weight, life_span, temperaments)
 res.status(200).send(newDog);
```
<br />

🔴En caso de un error con catch enviamos un status 404 con un json que tenga el error.message.
<br />

```bash
    catch (error) {
      return res.status(404).json(error.message)
```
<br />

🔴Por ultimos exportamos el modulo.
<br />

```bash
  module.exports = {  post__dogs }
```
<br />

