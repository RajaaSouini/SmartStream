
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
