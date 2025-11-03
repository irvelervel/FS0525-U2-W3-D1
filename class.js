// con le più recenti evoluzioni di JS è stata introdotta una nuova sintassi
// per la creazioni di funzioni costruttore tramite la nuova parola chiave "class"

// questo al fine di uniformare la sintassi anche con i linguaggi propriamente OOP
// e facilitare la transizione di molti sviluppatori "non web"

// rifacciamo la funzione costruttore NamedPerson come CLASS:
class Singer {
  constructor(_firstName, _lastName, _age, _skills, _region, _phone, _email) {
    // il costruttore assegna alle proprietà dei futuri oggetti
    // i valori dei parametri _firsName, _lastName etc.
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.skills = _skills
    this.region = _region
    this.phone = _phone
    this.email = _email
    // nel costruttore si mettono solamente le assegnazioni delle proprietà
    // i cui valori derivano dai parametri
  }

  // poichè showName NON deriva dai parametri ma è "fissa" per ogni oggetto
  // che si andrà a creare, non la inserisco nel constructor ma finisce qui all'interno
  // della classe
  showName = function () {
    return 'Io mi chiamo ' + this.firstName + ' ' + this.lastName
  }

  canSing = true
  //   notate come queste proprietà/metodi indicati nel corpo della classe (e che quindi
  // avranno lo stesso valore iniziale per ogni oggetto creato) NON vengano inizializzate
  // con let/const ma neanche "this"
}

const np4 = new Singer(
  'Al',
  'Bano',
  99,
  ['Felicità'],
  'Puglia',
  '23123123',
  'al@bano.com'
)

console.log('np4', np4)

// un oggetto creato con uno "stampino" a classe viene definito ISTANZA
// classe -> fabbrica
// istanza -> oggetto generato dalla fabbrica

// la sintassi delle classi ci permette una cosa particolare: la possibilità
// di ESTENDERE LE CLASSI

class HumanBeing {
  constructor(_name, _age, _eyeColor, _gender, _height) {
    this.name = _name
    this.age = _age
    this.eyeColor = _eyeColor
    this.gender = _gender
    this.height = _height
  }

  greet = function () {
    return `Ciao, io mi chiamo ${this.name} e sono alto ${this.height}cm.`
  }
}

const gino = new HumanBeing('Gino', 67, 'brown', 'male', 170)
console.log('GINO', gino)

class Developer extends HumanBeing {
  // si dice che Developer è una SOTTOCLASSE di HumanBeing
  constructor(_name, _age, _eyeColor, _gender, _height, _YoE, _languages) {
    // per PRIMA COSA utilizzo i primi 5 parametri per creare uno HumanBeing
    // così come "fondo" non avrò un oggetto vuoto, ma avrò già un'istanza di
    // HumanBeing
    // per farlo invoco il COSTRUTTORE di HumanBeing
    super(_name, _age, _eyeColor, _gender, _height)
    // ora che ho creato un essere umano, gli aggiungo le caratteristiche
    // che lo rendono Developer
    this.YoE = _YoE
    this.languages = _languages
  }
}

const giangiorgio = new Developer('Giangiorgio', 20, 'azure', 'male', 175, 2, [
  'JS',
  'Java',
])
