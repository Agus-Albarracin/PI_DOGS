const server = require("./src/app");                           //______________________________¶¶
const PORT = 3001;                                             //________¶____________________¶__¶
const { conn } = require('./src/db.js');                       //________¶¶___________________¶_¶_¶
conn.sync({ force: true }).then(() => {                        //_________¶¶_¶______________¶___¶__¶
server.listen(PORT, () =>{                                     //________¶_¶¶_¶¶____________¶_¶__¶__¶
    console.log(`Server iniciado en el puerto ${PORT}`)        //________¶__¶___¶__________¶__¶__¶__¶
})                                                             //________¶¶_¶¶___¶_________¶__¶¶¶¶__¶
 });                                                           //________¶¶__¶____¶,,,,,,,¶___¶¶_¶__¶_
                                                               //______¶¶___________________________¶
                                                               //______¶___________________________¶¶                  
                                                               //____¶_¶¶¶_________¶¶¶¶____________¶
                                                               //____¶___¶_______¶____¶___________¶
                                                               //____¶¶_¶_¶______¶__¶¶¶___________¶
                                                               //____¶_¶¶¶________¶¶¶¶¶___________¶                 
                                                               //__¶¶¶¶____________________________¶
                                                               //_¶¶¶¶¶¶¶__________________________¶
                                                               //__¶¶¶¶¶_________¶¶________________¶¶
                                                               //___¶¶_________¶¶__________________¶¶¶
                                                               //____¶¶¶¶¶¶¶¶¶¶___________________¶¶__¶
                                                               //_____¶¶¶¶______________________¶¶¶____¶
                                                               //_______¶¶_____________________¶¶¶______¶
                                                               //___________¶¶_______________¶¶¶_________¶
                                                               //___________¶¶¶¶¶__________¶¶¶¶__________¶
                                                               //__________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__________¶¶
                                                               //_________¶¶________¶¶¶¶¶¶¶¶¶__________¶¶
                                                               //_________¶¶___________¶¶¶____________¶¶  