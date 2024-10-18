HEAD

// #region PARCOURIR LE DOM

// const cont = document.querySelector(".container");

// Pour accéder aux parents :
// console.log('the parent node is:',cont.parentNode);
// console.log('the parent element is:',cont.parentElement.parentElement); // on obtient le même réultat que le précédent. Mais si on rajoute un 2eme .parentElement on remonte d'un parent et on arrive au body.

// Ppour accéder aux enfants :
// console.log(cont.childNodes); 
// on obtient NodeList(7) [text, h1, text, p, text, ul, text]
// les textes sont les sauts de ligne et c'est pas ouf de saisir ca.
// Donc on utilise autre chose.
// console.log(cont.children); // on obtient HTMLCollection(3) [h1, p, ul]

// Pour accéder à l'element suivant :
// console.log('container next sibling is:',cont.nextSibling); // cela nous donne encore une fois #text qui est un sauts à la ligne. Pour changer cela on préfère utiliser nextElementSibling.

// const part1 = document.querySelector('.part-1');
// console.log('h1 next element sibling is:',part1.nextElementSibling);

// /!\ il considère un element qui porte une class si le prochain element na pas de class il ne l'affiche pas.

// Pour accéder à l'element précédant :
// const part2 = document.querySelector('.part-2');
// console.log('section previous element sibling is:',part2.previousElementSibling);

// const part2 = document.querySelector('.part-2');
// part2.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';
//previousElementSibling vas cibler le part1, querySelector vas chercher intéroge tout ce qu'il y à l'intérieur de part1 le ('p') et on vient ajouter un text.

// #endregion

// #region EXERCICE 1
// const bold = document.querySelector("b");

// console.log(bold.parentNode.parentElement.parentElement.parentElement.style.background = "beige");
// bold.style.color = "red";
// console.log(bold.parentNode.parentElement.parentElement.style.background = "darkblue");
// console.log(bold.parentNode.parentElement.parentElement.style.color = "white");
// console.log(bold.parentNode.nextElementSibling.style.color = "pink");
// console.log(bold.parentNode.parentElement.parentElement.previousElementSibling.querySelector('ul').style.color = "orange");
// console.log(bold.parentNode.parentElement.parentElement.previousElementSibling.querySelector('a').style.color = "green");
// console.log(bold.parentNode.parentElement.parentElement.previousElementSibling.querySelector('h1').style.textTransform = "upperCase");

// #endregion

// #region EXERCICE 2

//Fonction pour créer et ajouter les boutons après un délai de 2 secondes
// setTimeout(function() {
//     //Modifier le texte du h1
//     document.querySelector('h1').textContent = "There are a lot of buttons here!";

//     //Récupérer le container div
//     const container = document.querySelector('.container');

//     //Générer 100 boutons
//     for (let i = 1; i <= 100; i++) {
//         //Créer un bouton
//         const button = document.createElement('button');

//         //Ajouter le texte au bouton
//         button.textContent = `Je suis le bouton ${i}`;

//         //Ajouter le bouton au container
//         container.appendChild(button);
//     }
//     //Délai de 2 secondes
// }, 2000); 

// #endregion

// #region EXERCICE 3

// // Sélectionne tous les li
// const listItems = document.querySelectorAll('ul li');

// // Récupère indices éléments de classe 'highlight'
// const highlightedIndexes = [];
// listItems.forEach((li, index) => {
//     if (li.classList.contains('highlight')) {
//         highlightedIndexes.push(index); // Stocker l'index
//         li.classList.remove('highlight'); // Enlever la classe 'highlight'
//     }
// });

// // Récupère indices éléments qui n'ont pas la classe 'highlight'
// const nonHighlightedIndexes = [];
// listItems.forEach((li, index) => {
//     if (!highlightedIndexes.includes(index)) {
//         nonHighlightedIndexes.push(index); // Stocker l'index des éléments sans 'highlight'
//     }
// });

// // Réaffecter la classe 'highlight' aux nouveaux éléments (indices inversés)
// nonHighlightedIndexes.forEach((index, i) => {
//     listItems[index].classList.add('highlight'); // Ajouter la classe 'highlight'
// });

// #endregion

// #region EXERCICE 4

// Sélectionner le conteneur
// const container = document.querySelector('.container');

// // Boucle pour créer les images de Pokémon
// for (let i = 1; i <= 151; i++) {
//     // Créer un élément <img>
//     const img = document.createElement('img');
    
//     // Définir l'attribut src de l'image avec l'URL du Pokémon correspondant
//     img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

//     // Ajouter l'image au conteneur
//     container.appendChild(img);
// }

// #endregion

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

// Rename Repos
bed240973a5a2a80a302d71a5b3660f7d16ced0f
