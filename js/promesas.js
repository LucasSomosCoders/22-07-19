// Ejemplo de callback hell
const lugaresVisitados = [];

function pasear(){
  setTimeout(function(){
    lugaresVisitados.push('Cordoba');
    setTimeout(function(){
      lugaresVisitados.push('Rio Negro');
      setTimeout(function(){
        lugaresVisitados.push('Andorra');
        setTimeout(function(){
          lugaresVisitados.push('Rota');
          console.log(lugaresVisitados.toString())
        }, 4000);
      }, 1000);
    }, 3000);
  }, 2000);
};


pasear();

// Ejemplo 1 promesas

const data = ['json']

// sincronico
const getDataSync = () => {
  return data
}

// asincrono con promesas

const getDataAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('que esta todo bien')
    }, 3000)
  })
}

// metodo then() es propio de la clase Promise
function estaTodoBien(input) {
  console.log('La data es: ' + input)
}
// llamada a la funciona tradicional
getDataAsync().then(estaTodoBien);
// llamado con una arrow function por parametros
// getDataAsync().then(input => console.log('La data es: ' + input));

function devuelvePromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let todoBien = false
      if (todoBien) {
        resolve('todo salio bien')      
      }
      else {
        reject('algo salio mal')
      }
    }, 1000)
  })
}

// funcion de exito
function exito(mensaje) {
  console.log('Exito: ' + mensaje)  
}

// funcion en caso que salga mal
function fracaso(error) {
  console.log('Fracaso: ' + error)
}

// llamado a la funcion que retorna una promasa y lo  capturo en una variable
const objetoPromesa = devuelvePromesa()
// aplico los metodos then y catch del objeto promesa
objetoPromesa.then(exito)
objetoPromesa.catch(fracaso)
// mismo ejemplo pero escrito de manera mas sintetica
devuelvePromesa()
  .then(exito)
  .catch(fracaso)
// console.log(objetoPromesa)