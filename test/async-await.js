async function getNombreAsynchrone1() {/* traitement asynchrone (e.g. appel d’une API HTTP) */ return 1;}
async function getNombreAsynchrone2() {/* traitement asynchrone (e.g. appel d’une API HTTP) */ return 2;}

async function getAdditionAsynchrone() {
 const nombre1 = await getNombreAsynchrone1();
 const nombre2 = await getNombreAsynchrone2();
 return nombre1 + nombre2;
}

console.log("##### Nombre calcul ########");
console.log(getAdditionAsynchrone());
getAdditionAsynchrone().then( (result) => {
    console.log(result);
});
console.log("##### END Nombre calcul ########");


const { promisify } = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

async function lireMonFichier() {
 try {
   console.log("################   LECTURE   ##################");
   const texteDuFichier = await readFileAsync('callback.js', { encoding: 'utf8' });
   console.log('contenu :', texteDuFichier);
   console.log("################ END LECTURE ##################");
 } catch (err) {
   console.log('erreur :', err);
 }
}


lireMonFichier();