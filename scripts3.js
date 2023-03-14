/**
 * Crea un semplice form di registrazione con un input field in cui l'utente possa inserire il proprio nome.
 * A fianco di questo input field crea due pulsanti: uno salvera il valore in localStorage, uno rimuovera il
 * valore precedentemente salvato (se presente).
 * Mostra sopra l'input field il valore precedentemente salvato, se presente.
 * => non riesco a salvare più coppie chiave/valore all'interno di localStorage, infatti ogni volta che salvo 
 * un valore dall'input field questo sovrascrive il valore precedente
 */

let inputName = document.querySelector('#name'); //creo una referenza all'elemento input
let listWrapper = document.querySelector('#usersWrapper ul');

window.addEventListener("DOMContentLoaded", () => {  
   let btnSave = document.querySelector('#btnSave');
   let btnDelete = document.querySelector('#btnDelete');

   createListItem();

   btnSave.onclick = saveName;      //al click su button:Save eseguo saveName
   btnDelete.onclick = deleteName;  //al click su button:Delete eseguo deleteName
});

// Fn che salva nel localStorage la coppia chiave/valore
const saveName = function(){
   localStorage.setItem("name", inputName.value); //salvo in localStorage la coppia chiave/valore name:inputName.value
   createListItem();
   resetInputValue();
}

// Fn che cancella dal localStorage l'ultimo valore inserito
const deleteName = function(){
   localStorage.removeItem("name"); //elimino dal localStorage l'ultima coppia chiave/valore
   removeListItem();
}

// Fn che resetta il valore dell'input field
const resetInputValue = function(){
   inputName.value = "";
}

// Fn che crea un listItem contenente il valore appena salvato nel localStorage
const createListItem = function(){
   if(localStorage.length){
      let listItem = document.createElement('li');
      let textListItem = document.createTextNode(localStorage.getItem("name"));

      listItem.appendChild(textListItem);
      listWrapper.appendChild(listItem);
   }
}

// Fn che elimina l'ultimo listItem inserito
const removeListItem = function(){
   if(listWrapper.childElementCount > 0){
      listWrapper.lastElementChild.remove();
   }
}