/**
 * Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. Aggiornando la pagina 
 * il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve 
 * aggiornarsi ad ogni secondo.
 */

document.addEventListener('DOMContentLoaded', () => {
   let showCounter = document.querySelector('#counter');
   let counter = parseInt(sessionStorage.getItem("counter")) || 0;

   setInterval(() => {
      counter++;
   
      sessionStorage.setItem("counter", counter);

      showCounter.innerHTML = counter;
   }, 1000)
   
})