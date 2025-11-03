// in JS, oltre a creare oggetti "a mano" con la notazione letterale, possiamo
// creare una sorta di "fabbrica" di oggetti in modo da limitare gli errori e le sviste
// quando dobbiamo creare TANTI oggetti tutti simili

// invece di fare un oggetto singolo e dopo copincollarlo etc.
const person1 = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  age: 19,
  skills: ['singing'],
  region: 'FVG',
  phone: '1231243242',
  email: 'ste@ste.com',
  showName: function () {
    return 'Io mi chiamo ' + this.firstName + ' ' + this.lastName
    // "this" in JS è un puntatore al contesto di esecuzione corrente
    // se dovete come in questo caso creare un metodo (una f all'interno di un oggetto,
    // è sconsigliato utilizzare le funzioni freccia, perchè non riconoscono il contesto
    // di esecuzione correttamente)
  },
}

person1.lastName // 'Casasola'
person1.showName() // "Io mi chiamo Stefano Casasola"

// ok, funziona. Però come faccio se devo creare altri 5 person, ognuno con dati diversi?
// sarebbe comodo "prendere in prestito" lo stampino obbligatorio in altri linguaggi
// in modo da poter scegliere: se devo creare un solo oggetto lo posso fare al volo
// con la notazione letterale, ma se devo crearne 10 posso utilizzare un "progetto"
// da riutilizzare 10 volte

// CREIAMO UNA FUNZIONE COSTRUTTORE
// la nomenclatura per le funzioni costruttore è PascalCase
const Person = function () {
  // sto creando una FABBRICA di OGGETTI "person"
  // riempio questo "timbro" con tutte le caratteristiche che voglio infondere
  // agli oggetti di tipo Person

  // descrivo tutte le proprietà e i metodi che finiranno poi nei mei oggetti
  // e li inizializzo con valori "vuoti"
  this.firstName = ''
  this.lastName = ''
  this.age = 0
  this.skills = []
  this.region = ''
  this.phone = ''
  this.email = ''
  this.showName = function () {
    return 'Io mi chiamo ' + this.firstName + ' ' + this.lastName
  }
}

// -- FINE CREAZIONE FABBRICA --
// come "accendo" la fabbrica?
const p1 = new Person()
// tutte le proprietà sono presenti, i valori sono tutti vuoti, è un punto di partenza...
p1.firstName = 'Gianni'
p1.lastName = 'Morandi'
p1.age = 99
p1.skills = ['singing']

console.log('P1', p1)

const p2 = new Person()
const p3 = new Person()
const p4 = new Person()
const p5 = new Person()
// questo è un ottimo metodo per generare oggetti in serie
// ho un po' il fastidio di dover arricchire questi oggetti generati in serie
// con dei valori univoci

// come risolviamo questo fastidio?
// potremmo sfruttare il fatto che le FUNZIONI (anche quelle costruttore) possono
// accettare dei PARAMETRI

const NamedPerson = function (
  _firstName,
  _lastName,
  _age,
  _skills,
  _region,
  _phone,
  _email
) {
  // sto creando una FABBRICA di OGGETTI "person"
  // riempio questo "timbro" con tutte le caratteristiche che voglio infondere
  // agli oggetti di tipo Person

  // descrivo tutte le proprietà e i metodi che finiranno poi nei mei oggetti
  // e li inizializzo con valori "vuoti"
  this.firstName = _firstName
  this.lastName = _lastName
  this.age = _age
  this.skills = _skills
  this.region = _region
  this.phone = _phone
  this.email = _email
  this.showName = function () {
    return 'Io mi chiamo ' + this.firstName + ' ' + this.lastName
  }
}

const np1 = new NamedPerson(
  'Claudio',
  'Baglioni',
  97,
  ['singing', 'hosting'],
  'Lazio',
  '31231322',
  'claudio@baglioni.com'
)
console.log('NP1', np1)

const np2 = new NamedPerson(
  'Eros',
  'Ramazzotti',
  60,
  ['singing'],
  'Lazio',
  '23123123',
  'eros@ramazzotti.com'
)
console.log('NP2', np2)
