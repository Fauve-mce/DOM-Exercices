
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