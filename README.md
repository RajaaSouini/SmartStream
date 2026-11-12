
# Smart Stream
## Contexte du projet 

Smart Stream souhaite déployer sa nouvelle plateforme web d'IPTV et de TV en direct. L'équipe UX/UI a validé l'interface principale : un panneau latéral de navigation pour les chaînes à gauche et une zone de prévisualisation/affichage à droite.  

## Palette de couleur 

Fond de la page #0B0F1A
Panneaux , barre latérale , cartes #0F1523
Champs de recherche #151C2E
#1B2338
#1E2740
#26314D
#6A4BF0
#8F77FF
#B7A6FF
#C9BEFF
#6A4BF0
texte principale #E8ECF5
texte secondaire #A3ADC2
texte sur fond coloré #FFFFFF

## Structure du projet 

SmartStream/
├── assets/ **Images and icons**
│   └── images/
│   └── icons/
├── src/       **code source js de l'application** 
│   ├── services/   **Les données**
│   │   ├── api.js   **getchannels() fetch api**
│   │   └── storage.js **Sauvegarde et lecture localStorage**
│   ├── ui/          **Affichage**
│   │   ├── channelList.js   **Affichage de laa liste des chaines       groupés par catégorie**
│   │   └── countryList.js **Affiche la liste des pays dans le sidebar**
|   |   └── error.js **Affiche et cache le msg d erreur**
|   |   └── loader.js **Affiche et cache loader**
|   |   └── preview.js **afffiche le nom le numero l image de la chaine active**
|   |
│   ├── utils/
│   │   ├── filter.js **fltrer par nom et number**
│   │   └── groupBy.js **group channels by category**
│   ├── main.js **chef d orchestre des fichiers js**
│   └── config.js **appel de l api**
├── data/
│   └── data.json  **data table of objects**
├── dist/
├   └── output.css **css généré par tailwind**
├── .gitignore **Fichier à ne pas pusher en github**
├── package.json
└── README.md   **Documentation du projet**
└── node_modules/ **Package de tailwind**
└── input.css
└── index.html  **la page html principale**
└── package-lock.json



config.js (le lien)  =>  api.js (fetch)  =>  main.js (reçoit la liste)  =>  affichage
## Technologies utiliser 

HTML5 , Tailwind , Javascript , 
## Links 
Lien du repot github : https://github.com/RajaaSouini/SmartStream.git

Lien du site heberger :

Lien de la plannification sur Jira : https://rajaasouini.atlassian.net/jira/software/projects/SS/boards/68/backlog?atlOrigin=eyJpIjoiNmQxYjY2OTAyNGZkNDAxODg3YWQxMWJiNzMyNTgwNzEiLCJwIjoiaiJ9

## Stratégie Git : 

main : version stable.
develop : branche d'intégration.
Branches fonctionnelles : 
docs/readme 
feature/mockapi-service
feature/preview-ui
feature/search

Dans ce brief j'ai utilisé pull request , qui consiste à pusher dans le branch selon la fonctionnalités développé , puis je demande un pull request du branch develop , qui sera accepté ou decliné dans cette branch , et enfin je push le tout dans main qui est la branche principale. 


## Explication du déroulement du projet 

1 - La page créer en html tailwind , responsive , contient un sidebar dont lequel il y a les pays , qu on clique sur un pays , il nous donne les chaines de ce dernier groupé par catégorie . 

2 - On a créer un data.json , et dans mockapi j 'ai créer l'api avec laquelle je vais travailler , 

3 - link de l 'api est dans le fichier config.js 
4 - dans api.js j'ai fetcher data , et assurer quelle se récupère 
5 - un spinner qui se roule avant affichage de data créer en html tailwind et s'affiche et se disparu avec des fonctions js 
6 - Un message d'erreur s'affiche si un problème se produit , pour que l'utilisateur sait son type 


# Les concepts acquis

## git  et github

git init 
git add . 
git commit -m ""
git branch : lister les branches 
git branch nom : créer une branche 
git checkout -b nom : créer et basculet vers une branche en meme temps 
git pull : récupérer les modifications distant 
git push : pousser du local vers le repot distant 
.gitignore : un fichier dans lequel on écrit les fichiers ou dossier à ignorer lors du push 
git checkout nom : basculer vers une branche 
git merge : pour merger les branches dans une 
git rebase : comme git merge 

la différenec entre git merge et git rebase , c'est que la première moins clair car les commits se push mélanger dans la branche princiale , mais avec rebase ils sont plus clair

git clone url : cloner un repot distant 
git branch -m nomNew : rennomer une branche 
git fetch + git merge = git pull 

git log : l arbre des commits (comprendre l'évolution globale du projet )
git diff : comparaison locale 
git reflog : historique chronologique des actions git 


## HTML / DOM / webApi

● Pourquoi on utilise event.preventDefault ?
pour stoper le comportement par défaut du navigateur 
● StopPropagation
stoper la propagation d'un événement fils à un parent 
● addEventListener
un écouteur d'événement
● callback function
une fonction qui est comme paramètre d'une autre fonction

● remove element from DOM
supprimer un élément du dom .remove()
● C'est quoi htmlCollection ?
quand on utilise getElementBy.. return HTMLCollection
● setAttribute et getAttribute en DOM
setAttribute() prend deux parametre , le premier est l attribut et le deuxieme sa valeur , et s affecte à un élément 
getAttribute pour recuperer un attribut d un element
● Comment obtenir le type d'une variable ?
typeOf
● trim()
supprimer les espaces au début et à la fin 
● isNaN()
c est à dire is not a number
● Fetch API en JS et then
fetch api pour recuperer un data et then pour dire quoi faire avec , par exemple on la transforme par la suite à la forme json 
● setTimeout()

## Js base et logique

● Quelle est la différence entre var et const ?
var est changeable mais const non
● Async function ?
example : 

async function getUserData() {
  try {
    // Execution pauses here until the network request finishes
    const response = await fetch('https://example.com');
    
    // Execution pauses here until the data converts to JSON
    const data = await response.json(); 
    
    console.log(data);
    console.log("Done!");
  } catch (error) {
    // If anything fails above, execution jumps straight here
    console.error("Something went wrong:", error);
  }
}

● Quelle est la différence entre les méthodes map et forEach ?
forEach parcourt les éléments d'un tableau 
mais avec map on les parcourts et on met un changement
● forEach vs for
forEach parcourt les éléments , avec for on choisi parcourer par les elements ou indexes
● Quelle est la différence entre les boucles for..in et for..of ?
for in parcourt les indices , mais for of les elements 


● L’avantage d’utiliser template literal ?
pour écrire du texte et des variables en meme temps `Hello ${var}`
## JavaScript Tableau(array)

● Quelles sont les array functions utilisées pour trouver un élément ?
find() , indexOf() 
● slice(), push(), pop(), length, forEach
slice() :  extrait une portion d'un array
push() : ajouter à la fin
pop() : supprimer de la fin
length : la taille du tableau
forEach() : parcourir le tableau


● array.unshift() : ajouter au début
● array.shift() : supprimer du premier
● array.splice() : Ajoute, supprime ou remplace des éléments à n'importe quel indice dans le tableau.

JavaScript
● Pourquoi on utilise localStorage ? Citez ses méthodes.
pour sauvegarder localement des données si on a pas une base de données , et la récupéré 

example : 

const panier = ['Livre', 'Stylo', 'Cahier'];

// 1. Convertir en texte pour enregistrer
localStorage.setItem('monPanier', JSON.stringify(panier));

// 2. Reconvertir en tableau pour utiliser les données
const panierRecupere = JSON.parse(localStorage.getItem('monPanier'));
console.log(panierRecupere[0]); // 'Livre'

● regex pattern

on utilise regex pour dire à l'utilisateur quoi entrer exactement , alors on gère l'input avec 