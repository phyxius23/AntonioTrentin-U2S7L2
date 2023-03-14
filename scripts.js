/**
 * Crea un semplice form di registrazione con un input field in cui l'utente possa inserire il proprio nome.
 * A fianco di questo input field crea due pulsanti: uno salvera il valore in localStorage, uno rimuovera il
 * valore precedentemente salvato (se presente).
 * Mostra sopra l'input field il valore precedentemente salvato, se presente.
 */

let inputName = document.querySelector('#name'); //creo una referenza all'elemento input
let listWrapper = document.querySelector('#usersWrapper ul');

console.log(localStorage.length);

window.addEventListener("DOMContentLoaded", () => {
   const btnSave = document.querySelector('#btnSave');
   const btnDelete = document.querySelector('#btnDelete');

   if (localStorage.length) {
      for (let i = 1; i <= localStorage.length; i++) {
         createListItem(i);
      }
   }

   btnSave.onclick = saveName;      //al click su button:Save eseguo saveName
   btnDelete.onclick = deleteName;  //al click su button:Delete eseguo deleteName
});

// Fn che crea un listItem contenente il valore appena salvato nel localStorage
const createListItem = function (index) {
   let listItem = document.createElement('li');
   let textListItem = document.createTextNode(localStorage.getItem(index));

   listItem.appendChild(textListItem);
   listWrapper.appendChild(listItem);
}

// Fn che salva nel localStorage la coppia chiave/valore
const saveName = function () {
   let indexLocalStorage = localStorage.length + 1;
   localStorage.setItem(indexLocalStorage, inputName.value); //salvo in localStorage la coppia chiave/valore name:inputName.value
   createListItem(indexLocalStorage);
   resetInputValue();
}

// Fn che cancella dal localStorage l'ultimo valore inserito
const deleteName = function () {
   localStorage.removeItem(localStorage.length); //elimino dal localStorage l'ultima coppia chiave/valore
   removeListItem();
}

// Fn che resetta il valore dell'input field
const resetInputValue = function () {
   inputName.value = "";
}

// Fn che elimina l'ultimo listItem inserito
const removeListItem = function () {
   if (listWrapper.childElementCount > 0) {
      listWrapper.lastElementChild.remove();
   }
}