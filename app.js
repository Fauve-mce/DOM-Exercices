// #region GET ELEMENTS BY ID

// const mainHeading = document.getElementById("main-heading");
// mainHeading.style.color = "red";
// #endregion


// #region GET ELEMENTS BY CLASSNAME, ARRAY? FOR LOOP

// var lis = document.getElementsByClassName('list-item');

// console.log(Array.isArray(lis)); // Array.isArray(lis) ceci vas nous return false ou true. On tchek si c'est une Array.
// console.log(Array.isArray(Array.from(lis))); // Ici on converti lis à une Array.

// lis.forEach(function(item){
//     console.log(item);
// })  
//nous avons une erreur lis forEach n'est pas une fonction. car ce n'est pas vrmt une arrray c'est une collection de courrier.
// cela ressemble très fort a une array c'est comme une array mais on ne peux pas utiliser des méthodes array.

// Array.from(lis).forEach(function(item){
//     console.log(item);
// }) 


// in the console :

//chose que l'on peut faire après avoir récupérer des élements. 
//imagine tu veux interroger le DOM pour tous les elements de la class list-item
// et les stylisez d'une manière particulière, on a besoin de parcourir tous ces elements.
// si on stylise cela peux transformer le look de la page et parfois on veux transformer que deux elements.
//donc on urilise un for loop.
// for(i=0; i < lis.length; i++){ console.log(lis[i])
// } Enter-->


//first methode how to retrieve (récupérer) a collection of elements based on the class of them
// var lis =document.getElementsByClassName('list-item') Enter -->
// undefined
// lis Enter -->
// HTMLCollection(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-item4: li.list-itemlength: 5[[Prototype]]: HTMLCollection
// lis[3] Enter -->
// <li class=​"list-item">​::marker​"Annie Hall"</li>​
// #endregion


// #region GET ELEMENTS BY TAGNAME

//second methode is get elements by tag name if you want to return a collection of elements that all have the same tag
// var lis = document.getElementsByTagName('li') Enter -->
// undefined
// lis Enter -->
// HTMLCollection(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-item4: li.list-itemlength: 5[[Prototype]]: HTMLCollection
// lis[4] Enter -->
// <li class=​"list-item">​::marker​"Goodfellas"</li>​
// #endregion


// #region THE QUERY SELECTOR = SELECTEUR DE REQUETE

// const main = document.querySelector('#main-heading');
// console.log(main);

// const cont = document.querySelector('#container li:nth-child(2).list-item');
// console.log(cont);

// var cont = document.querySelector('#container li.list-item');
// console.log(cont);

// cont = document.querySelectorAll('#container li.list-item');
// console.log(cont);

// Array.from(cont).forEach(function(cont){
//     console.log(cont);
// });
// #endregion


// #region DOM CREER/AJOUTER/SUPP DES ELEMENTS
// const myList = document.querySelector("ul");
// const myItem = document.createElement("li");

// myList.appendChild(myItem);
// myItem.remove();
// #endregion


// #region CHENGING TEXT & HTML CONTENT

// var cont = document.querySelectorAll('#container li.list-item');

// la propriété text.Content vas récupérer le texte dans l'élément. 
// Array.from(cont).forEach(function(cont){
//     console.log(cont.textContent)
// });

// pour changer le text.Content (Remplacer)
// Array.from(cont).forEach(function(cont){
//     cont.textContent = 'test';
// });

// pour changer le text.Content (Ajouter)
// Array.from(cont).forEach(function(cont){
//     cont.textContent += ' test';
// });

// Array.from(cont).forEach(function(cont){
//     cont.textContent += '(film title)';
// });

//Mettre à jour le code HTML
// const cont = document.querySelector('#container');
// console.log(cont.innerHTML);

// const cont = document.querySelector('#container');
// cont.innerHTML = '<h2> Films and more films...</h2>';
// cont.innerHTML += '<p> This is how you add HTML</p>';

// #endregion


// #region 04.DOM_ELEMENT_CONTENT.MD

// var cont = document.querySelector('#container');
// console.log(cont.innerHTML);

// var ulList =document.querySelector('ul');

// ulList.innerHTML += '<li>The Godfather</li>';

// for(i=0; i < ulList.length; i++){ console.log(ulList[i])
// }
// ulList.style.color = "purple";

// const cont = document.querySelector('#container li:nth-child(6)');
// cont.style.color = "gold";

// const span = document.querySelector('#container li:nth-child(4).list-item');
// span.innerHTML = '<li> Annie <span>Hall</span> </li>';

// const spanColor = document.querySelector('#container li span');
// spanColor.style.color = "red";

//#endregion
