const { createApp } = Vue;

createApp({
  data() {
    return {
      // Esercizio 1
      nome: "Matteo",
      cognome: "pavoni",
      citta: "Torino",

      // Esercizio 2
      nomeProdotto: "Laptop",
      prezzoProdotto: 999.99,

      // Esercizio 3
      immagine: true,

      // Esercizio 4
      messaggioTooltip: "Questo è un tooltip dinamico!",
      

      // già presenti nella tua bozza
      urlImmagine: "https://vuejs.org/images/logo.png",
      urlSitoUfficiale: "https://vuejs.org",
      classeCss: "box"
    };
  }
}).mount("#app");
