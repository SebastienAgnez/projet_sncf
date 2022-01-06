# Projet SNCF : Satisf'Retard

## Accèder au site en ligne
```
https://sebastienagnez.github.io/projet_sncf/
```

## Description projet
Cette application présente les données sur la [satisfaction des clients](https://ressources.data.sncf.com/explore/dataset/barometre-notes-dopinion-sncf-gmv/table/?sort=column_1), la [régularité mensuelle](https://ressources.data.sncf.com/explore/dataset/regularite-mensuelle-tgv-aqst/table/?sort=date) et les [causes de retard](https://ressources.data.sncf.com/explore/dataset/regularite-mensuelle-tgv-aqst/table/?sort=date) des TGV.

Nous récupérons 2 jeux de données de l'API SNCF grâce à des requêtes HTTP avec la librairie Axios. 

Nous utilisons le framework VueJS ([Vue 3](https://v3.vuejs.org/)), la librairie [Vue-Chart 3](https://www.npmjs.com/package/vue-chart-3) pour la visualisation de nos données et le framework [vuetify](https://next.vuetifyjs.com/en/getting-started/installation/) pour créer notre interface utilisateur.

## Project setup
En se mettant dans le dossier du projet à la racine pour installer les dépendances, lancer la commande suivante : 
```
npm install
```

## Compilation et lancement du serveur
Dans le même dossier, lancer cette commande pour démarrer le serveur : 
```
npm run serve
```

## Afficher le site Web
Ouvrir un navigateur à l'adresse suivante : 
```
http://localhost:8080/
```

## Compilation pour la production
Faire tourner l'application en mode production avec la commande :
```
npm run build
```

## Explications visualisation
### Utilisation de la librairie Vue-Chart
#### BarChart
Le BarChart va représenter ici, le retard des trains pour un trajet donné et une année puis va afficher sous forme de bâtons, la moyenne entre le nombre de trains en retard au départ et à l'arrivée divisée par le nombre de circulations prévues.

#### PieChart
Le PieChart va représenter le pourcentage des causes de retard pour un trajet selon 6 causes possibles : causes externes, cause gestion gare, cause gestion trafic, causes infrastructures, cause matériel roulant et cause prise en charge voyageurs.

### Utilisation des icônes de Vuetify
#### Smiley
Ici, le principe est d'afficher la satisfaction des clients selon différents indicateurs et de le représenter sous forme de smiley et d'une note. Pour voir afficher le smiley rouge : 0 < note <= 4; smiley orange : 4 < note <= 6.5; smiley vert : 6.5 < note <= 10.