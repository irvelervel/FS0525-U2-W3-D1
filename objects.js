// In JS, come in tanti altri linguaggi di programmazione, le risorse si trasmettono
// gerarchicamente delle proprietà e caratteristiche tramite meccanismi di EREDITARIETÀ.
// Nei linguaggi tradizionalmente legati alla OOP questo avviene tramite le CLASSI,
// mentre in JS (che è un linguaggio "ibrido") questo avviene grazie ai PROTOTIPI.

// In JS si dice che "tutto è un oggetto" in quanto anche i tipi primitivi, come stringhe
// e numeri derivano da prototipi (fatti a oggetto) che ne trasmettono caratteristiche come
// lunghezza o capacità come mettersi in maiuscolo/minuscolo etc.

// Una delle differenza principali tra JS e linguaggi tradizionali OOP è la sua capacità
// di poter creare oggetti "al volo", senza aver bisogno di uno "stampino" alla base.
// In JS infatti esiste la cosiddetta "notazione letterale":

const dog = {
  // in JS un oggetto è fornito di COPPIE chiave:valore, separate da virgola
  name: 'Fido',
  age: 5,
  furColor: 'black',
  // queste coppie possono essere definite PROPRIETÀ (se includono delle caratteristiche)
  // oppure possono essere definite METODI (se includono delle capacità)
  bark: function () {
    console.log('BAU')
  },
}

dog.bark() // eseguo il metodo "bark" di "dog"

// in altri linguaggi come C# e Java NON SI PUÒ creare un oggetto al volo, non esiste
// una "notazione letterale". Per poter creare anche un SINGOLO oggetto, lì c'è bisogno
// di avere a monte una "classe", una "fabbrica", uno "stampino", un "progetto" etc.

// JS ha la comodità di poter creare oggetti "al volo"...
// ...però, come tante cose in JS, alle volte questa cosa ci si ritorce contro!

// specialmente quando abbiamo la necessità di creare TANTI oggetti in serie
// tutti dello stesso tipo!

const dog2 = {
  name: 'Fufy',
  age: 3,
  furColor: 'white',
  bark: function () {
    console.log('BAO')
  },
}

const dog3 = {
  name: 'Gianni',
  age: 10,
  furColor: 'brown',
  bark: function () {
    console.log('BAO')
  },
}

const dog4 = {
  name: 'Pluto',
  age: '4',
  colorFur: 'black',
  bark: function () {
    console.log('BAO')
  },
}

const dog5 = {
  name: 'Fido',
  age: 10,
  furColor: 'brown',
  bark: function () {
    console.log('BAO')
  },
}

// il fatto che JS ci permetta di creare oggetti al volo senza una struttura
// ci dà la possibilità anche di sbagliare!

// vediamo come sia possibile ANCHE in JS creare uno "stampino!"
// andiamo nel file "constructor.js"
