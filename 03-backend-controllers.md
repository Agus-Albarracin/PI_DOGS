# **PROCESO DE CREACION CONTROLLERS BACK-END**
### **🟧🟧ES IMPORTANTE HABER TERMINO CON LOS PASOS DE " db-1.md " antes continuar🟧🟧**
NOTA:<br />
cada vez que haya un emoji de 🔴 es parte de una instrucción.<br />
cada vez que haya un emoji de 🟡 es parte de una anotacion.<br />
cada vez que haya un emoji de 🆎 es un ejemplo.<br />
cada vez que haya un emoji de 🗒️ es una nota que dejo para revisar.<br />
cada vez que haya un emoji de 🧩 hace referencia a un archivo.<br />

**  **
```bash
```

---

🟡 El controller son funciones, que son las que interactuan con las fuentes externas.<br />

<br />
🔴Crear en la carpeta controllers las funciones que transportan el flujo de información con fuentes externas, en este caso creamos las carpeta de delete, get y post.<br />

## **delete**
🟡 Dentro de la ruta delete tendremos la funcion para eliminar los perros.<br />
🟡 Este funcion, buscara el perro por id y lo eliminara.<br />
🔴 Requerimos del models Dogs.<br />

```bash
const { Dogs } = require("../../db");
```

🔴Usaremos el metodo **findByPk** de sequeleze, obtiene solo una entrada de la tabla, utilizando la clave principal proporcionada.<br />
🔴Y usaremos el método **destroy** de sequeleze permite eliminar filas de la tabla. Si se invoca sin argumentos y desde la instancia <br />del modelo elimina la fila subyacente. Si se invoca desde el modelo se pueden eliminar una o varias filas sin necesidad de <br />recuperarlas a instancias.<br />

## **get**
🔴Dentro de la carpeta "get" creamos las funciones para obtener los datos.<br />
🔴Requerimos la URL de la API y la API KEY desde nuestro archivo de ambiente .env y vamos a decirle que los lea con el metodo process.<br />
🔴Requerimos de Dogs y Temperaments desde la BD.<br />
<br />

**🧩 "__getAllDogs" 🧩 se va a encargar de traernos la información desde la BD y desde la API**<br />

<br /> **primero recuperamos desde la DB**<br />

🟡El  método findAll genera una SELECT consulta estándar que recuperará todas las entradas de la tabla (a menos que esté restringida por algo como una where.<br />
🟡 Documentación de como usar el findAll https://node.manjarr.es/sequelize#:~:text=El%20m%C3%A9todo%20findAll%20permite%20recuperar,que%20tienen%20alg%C3%BAn%20apellido%20P%C3%A9rez.

```bash
const get_DB_dogs = async () => {

  const find__ALL__dogs = await Dog.findAll({

    include: {                 
      model: Temperament,      
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },

  });

```
🟡el "include" indica que la tabla debera respetar los siguientes elementos de la tabla.<br />
🟡en este caso nos devolvera aquellos datos que se incluyan en el model Temperament.<br />
🟡La opción attributes permite indicar cuales son los campos que se van a recuperar de cada fila que cumpla el criterio de búsqueda.<br />
🟡en donde tengan el atributo "name", el cual se puede cambiar poniendolo entre [].<br />

🔴Crearemos una función donde nos permita devolver la información recuperar en un formato JSON.<br />
🔴Esta funciones nos va a devolver un json donde se nos va a devolver todos los perros o el nombre del perro que le pasemos.
<br />
<br /> **recuperamos desde la API**<br />

<br /> **funcion map**<br />
🔴Vamos a crear, exportar e importar una funcion mapeadora que nos servira para:<br />
- Devolver el objeto con los atributos que le agregamos<br /> 
- Y que nos devuelva la información de Temperaments dentro de un array aplicando el split. Al igual que desde la DB.<br />

🟡Esto no servira como un helper para las siguientes funciones de get.<br />
🔴Crearemos una carpeta llamada utils, o helper donde crearemos nuestro archivo con la funcion MAP.<br />
<br />
🔴Haremos una peticion con axios a la url y le pasamos nuestra APIKEY.<br />
🟡De la respuesta que nos de axios vamos a manipular data.<br /> 
🔴En caso de que no recibamos la data, enviaremos un error.<br />
🔴Aplicamos la función mapeadora, la cual nos devuelve lo que tenemos dentro de temperaments en un array una cadena de string separados por comas<br />
🔴Y lo retornamos<br />

```bash
const get__API_dogs = async () => {

  const all__API_dogs = (await axios.get(`${ALL_DOGS_URL}?api_key=${API_KEY}`)).data;
  if (!all__API_dogs) throw Error("No se ha podido recuperar la información en este momento.");

  const API__data_dogs = map__thedogs(all__API_dogs);

   return API__data_dogs; // DATA API Dogs
};
```
🔴Por ultimos vamos a guardar la informacion traida desde las dos fuentes externas dentro de un array<br />
🔴Creamos una funcion donde, invocaremos las 2 funciones get, haremos una copia de lo que nos devuelven estas funciones y lo retornaremos dentro de un array.<br />  
```bash
const __getAllDogs = async () => {

  const API__dogs = await get__API_dogs();
  const DB___dogs = await get_DB_dogs();

  // Guardo ambas respuestas en un array
  const allDogs = [...API__dogs, ...DB___dogs];

  return allDogs;
};
```
🔴Exportamos el modulo.<br /><br />    


**🧩 "__getAllTemps" se va encargar de traer los temperamentos de la API y guardarlos en la DB 🧩**<br />


🔴Vamos a requerir la URL y la API KEY desde nuestro archivo .env y vamos a decirle que los lea con el metodo process.<br />  
🔴Vamos a requerir el models Temperaments desde la DB<br />
🔴Y vamos requerir nuestra funcion MAP<br />

```bash
const axios = require("axios");
const { ALL_DOGS_URL, API_KEY } = process.env;
const { Temperaments } = require("../../db")
const { map__thedogs } = require("../utils/map__thedogs");

```
🔴Vamos a hacer la peticion desde la api y capturamos la data ".data"<br /> 
🔴En caso de que no obtengamos data lanzaremos un error.<br />
🔴A nuestra info le aplicaremos nuestro helper MAP.<br />

```bash
const __getAllTemps = async () => {
  const all__API_dogs = (await axios.get(`${ALL_DOGS_URL}?api_key=${API_KEY}`)).data;
  if (!all__API_dogs) throw Error("No se ha podido recuperar la información en este momento.");

  const API_DATA_Dogs = map__thedogs(all__API_dogs);
```


🟡Necesitaremos guardar los temps en un solo array con un solo string<br />
🔴Despues de aplicarler el map, lo que hacemos es aplicarle un split(,) para unir las cadenas de string y que nos que de solo 1 string en un solo array<br />
🗒️Podriamos usar el metodo join(), revisar más tarde.<br />
🗒️Dejo comentado en la linea  15/16.<br />

```bash
  const the_temps = (API_DATA_Dogs.map(dog => dog.temperament).toString()).split(",");
```

🔴Creamos otra funcion, que nos sirve como helper en caso de que nos quede alguna cadena con espacios, borrarlos.<br />
🔴Eliminamos los elementos vacios con otra funcion helper.<br /> 

```bash
  const clean_temps = the_temps.map(temp => {
    if(temp[0] === " ") temp.trim()
    return temp;
  })

  const all__temps = clean_temps.filter((el) => el !== "");

```

🔴Creamos una funcion donde crearemos una tabla con el atributo name el cual contendra los temperaments. <br />
🔴Para esto usaremos el metodo findOrcreate y le pasaremos where para cumpla la condición en caso de no encotrar coincidencia <br />

```bash
 all__temps.forEach(temp =>{
    Temperaments.findOrCreate({ 
      where: { name: temp },
    });

```

🟡El método findOrCreate creará una entrada en la tabla a menos que pueda encontrar una que cumpla con las opciones de consulta. En ambos casos,<br />
- Devolverá una instancia (ya sea la instancia encontrada o la instancia creada) y un booleano que indica si esa instancia fue creada o ya existía.<br /> 
- En caso de tener la opcion "where" se considera para encontrar la entrada y la opcion "default" se utiliza para definir lo que se debe crear en caso de que no se encuentre nada. <br /> 
- Si default no contienen valores para cada columna, Sequelize tomará los valores dados where(si están presentes).    <br />

🔴Por ultimo retornamos un mensaje que diga que se crearon los temperaments y exportamos el modulo.<br />    
<br />  

**🧩 "_getDogById" 🧩**<br />


🔴Vamos a requerir del modulo **__getAllDogs.js**.<br /> 
🔴Creamos una funcion contenedora que para buscar los perros por id.<br /> 
🔴Dentro de la misma haremos una variable que contendra e invocaremos la funcion **__getAllDogs** ejecutada y en caso de recibir un error arrojarlo.<br /> 

🔴Tambien crearemos la funcion que buscara por id. para eso usaremos el metodo find de js.<br /> 
🔴En caso de que nos arroje un error devolveremos el error.<br /> 
🔴Retornamos la funcion contenedora.<br /> 
🔴Y por ultimo exportaremos el modulo.<br /> 
<br /> 

**🧩 "_getDogByName" 🧩**<br />

🔴Requerimos del modulo **__getAllDogs**.<br />
🔴Crearemos la funcion contenedora, la cual recibira por parametro el nombre del perro.<br />
🔴Creamos una variable que contendra la funcion **__getAllDogs** ejecutada y en caso de tener algun error lo arrojaremos.<br />

🔴Creamos la funcion que filtrara por nombre, para eso usaremos el metodo filter de js, pasaremos los string a minuscula, y usaremos el<br />
 metodo include de js para saber si se repite el nombre de nuestro perro.<br />
🔴En caso de tener algun error lo arrojaremos.<br />
🔴Por ultimo retornamos la funcion contenedora y exportamos el modulo.<br />
<br />

## **post**
🔴Dentro de la carpeta post creamos el modulo que contendra la funcion para crear un perro.<br />
🔴Requerimos de nuestros models desde la base de datos.<br />

```bash
const { Dogs, Temperaments } = require("../../db")
```
🔴Crearemos una funcion contenedora y le pasaremos como parametros todos los atributos que contendra el perro.<br />
🔴Creamos la funcion que los creara, para eso usaremos el metodo **.create** de sequelize y le pasaremos por parametro, en un objeto<br />
🟡El metodo create,combina los métodos build y save.
- Aunque un modelo es una clase no hace falta instanciarlo con New, el "build" lo hace directamente pero no se comunica con la BD.<br />
- Para realmente guardar (es decir, conservar) esta instancia en la base de datos, se debe utilizar el metodo "save".<br />
los atributos que le pasamos anteriormente a nuestra funcion contenedora.
<br />

🟡No le pasaremos los temperaments porque se los añadiremos despues.<br />
🔴Luego creamos la funcion contenedora para inyectar los temperaments y usaremos el metodo findAll de sequelize.<br />
🔴Por ultimo exportamos el modulo.
<br />

