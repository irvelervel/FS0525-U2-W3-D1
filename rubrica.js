// qui dentro inseriremo la logica necessaria per far funzionare la pagina
// "rubrica.html"
// il risultato che voglio ottenere è stampare in console un oggetto
// contenente i dati inseriti nel form nella pagina; questo oggetto
// dovrà venire creato tramite una CLASSE

// classe per creare l'oggetto "contatto telefonico"
class Contact {
  constructor(_firstName, _lastName, _phone) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.phone = _phone
  }
  prefix = '0039'
  favourite = false
}

// cominciamo con il recuperare i riferimenti dei 3 campi input

const firstNameInput = document.getElementById('firstName') // <input />
const lastNameInput = document.getElementById('lastName') // <input />
const phoneInput = document.getElementById('phone') // <input />

// recupero un riferimento al form e lavoro sul suo evento di "submit"
const form = document.getElementById('rubrica-form')
form.addEventListener('submit', (e) => {
  e.preventDefault() // fermo il refresh della pagina
  // ora prendo i 3 VALORI dei campi input al momento del submit del form
  const firstName = firstNameInput.value // sempre .value per gli input
  const lastName = lastNameInput.value
  const phone = phoneInput.value

  // creerò l'oggetto risultante con una CLASSE!
  const contact = new Contact(firstName, lastName, phone) // gli fornisco 3 stringhe
  console.log('GENERATO CONTATTO RUBRICA', contact)
})
