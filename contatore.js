/**
 * Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. Aggiornando la pagina 
 * il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve 
 * aggiornarsi ad ogni secondo.
 * 1. salvo i secondi trascorsi dal 1970 ad ora in session storage
 * 2. salvo i secondi trascorsi dal ad ora ogni 1000ms in una variabile che per differenza mi restituisce i 
 * secondi trascorsi dall'avvio del timer
 * 3. questo sopra lo faccio tramite setInterval
 */

const todayLocal = new Date();
const secondsTodayLocal = Date.parse(todayLocal);
localStorage.setItem("secondsNow", secondsTodayLocal);

setInterval(function () {
   const today = new Date();
   let test = Date.parse(today);

   sessionStorage.setItem("secondsNow", test);
   console.log((sessionStorage.getItem("secondsNow") - localStorage.getItem("secondsNow"))/1000);
}, 1000);