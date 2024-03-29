---
sidebar_position: 1
---

# Guide de démarrage pour bien utiliser By'Game 🎮

Bienvenue sur votre nouveau serveur hébergé sur le panel Pterodactyl par By-Hoster (appelé By'Game). Ce guide vous aidera à démarrer et à vous familiariser avec l'interface de gestion.

## Commencer avec votre serveur

### Acheter un serveur
Si vous n'avez pas encore de serveur ou de bot et cherchez une option abordable et fiable, choisissez By-Hoster. Nous offrons une variété de serveurs (Minecraft, FiveM, Garry's Mod, Rust, etc.) et de bots Discord (Node.js et Python) disponibles à l'achat sur notre boutique en ligne : [https://my.by-hoster.net/store/jeux](https://my.by-hoster.net/store/jeux).

### Connexion au panel
Accédez à votre espace client sur le panel Pterodactyl via [https://ptero.by-hoster.net](https://ptero.by-hoster.net) en utilisant les identifiants envoyés par e-mail lors de l'achat ou de la création de votre compte.

## Navigation sur le panel

### Tableau de bord (Dashboard)
Une fois connecté, vous serez accueilli par le tableau de bord affichant vos serveurs. Sélectionnez le serveur souhaité pour accéder à sa console, qui vous permettra de démarrer, redémarrer, arrêter ou effectuer un arrêt d'urgence de votre serveur/bot. Vous y trouverez également des informations essentielles telles que l'utilisation du CPU, de la RAM, de l'espace disque, et l'IP du serveur.

Dans un premier temps, lorsque vous arrivez sur votre panel, vous aurez accès à un tableau de bord comme celui-ci : 

![Dashboard](https://i.imgur.com/MLBauD9.png)

Vous appuyerez sur le serveur concerné auquel vous souhaitez accéder puis vous arriverez sur votre console qui devrait ressembler à cela :

![Console](https://i.imgur.com/FYpJH5f.png)

Dans cette interface, vous aurez la possibilité de démarrer, redémarrer ou arrêter votre serveur/bot. En cas de nécessité, vous pourrez également le forcer à s'arrêter. De plus, au sein de la même interface, vous aurez accès aux informations les plus importantes concernant votre machine, incluant :

- Le pourcentage d'utilisation du CPU (processeur)
- L'utilisation de la RAM et de l'espace disque en Giga-Octets
- L'IP de votre serveur pour effectuer une connexion en jeu (inutile en cas d'utilisation d'un bot)

### Gestionnaire de fichiers
Le gestionnaire de fichiers est accessible depuis le menu latéral gauche du panel. C'est ici que vous configurerez vos plugins, mods, addons, ou autres fichiers nécessaires à votre serveur.

Par exemple, vous pouvez faire des actions simples telles que : **renommer**, **déplacer**, **changer les permissions**, **archiver**, **supprimer**, **désarchiver**, etc.
En bref, ce que vous retrouverez dans un gestionnaire de fichiers classique.

Pour des transferts de fichiers plus rapides, vous pouvez également utiliser FileZilla, accessible ici → [https://filezilla-project.org](https://filezilla-project.org). 

![FileZilla](https://i.imgur.com/E5UnRkI.png)

Pour vous connecter et accéder à votre gestionnaire de fichiers, insérez l'hôte et le nom d'utilisateur que vous retrouverez dans l'onglet "**Paramètres**" du panel : 

![Paramètres](https://i.imgur.com/C5LjJjQ.png)

__Exemple :__
```
Hote : sftp://nodex.by-h.fr:2024   
Nom d'utilisateur : ----------330.fbe3d3b5   
Mot de passe : [Le même mot de passe que vous avez pour votre connexion au panel]
```


Guide d'utilisation de FileZilla : [https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_(fr)](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_(fr))

### Bases de données
#### À quoi servent-elles ?

Une base de données est extrêmement utile pour un serveur de jeux comme Minecraft, FiveM, Garry's Mod, Rust, etc., pour plusieurs raisons comme par exemple :

- **Stockage des données des joueurs :** Une base de données peut stocker les données des joueurs, telles que leurs profils, leurs inventaires, leurs progrès dans le jeu, leurs paramètres, etc. Cela permet de sauvegarder les progrès des joueurs et de les restaurer en cas de besoin.

- **Gestion des utilisateurs et des autorisations :** Les bases de données peuvent être utilisées pour gérer les utilisateurs et leurs autorisations sur le serveur. Par exemple, elles peuvent stocker les informations d'identification des joueurs, leurs rôles (administrateur, modérateur, joueur), et les autorisations qui leur sont accordées (accès à certaines zones, capacité à effectuer certaines actions, etc.).

#### Comment créer une base de données ?

Suivez les instructions du panel pour configurer et lier une base de données à votre serveur, ce qui implique la configuration du serveur pour utiliser la base de données et le test de la connexion.

*Vous pouvez gérer facilement les tables de votre base de données via phpMyAdmin : [https://ptero.by-hoster.net/pma](https://ptero.by-hoster.net/pma)*

**1. Configurer la base de données (database) :**
  
- Assurez-vous que votre base de données est correctement configurée et fonctionnelle. Cela implique de créer une base de données.

**2. Ajouter une base de données sur votre serveur :**
  
- Dans le menu latéral, recherchez l'onglet "Bases de données". Suivez les instructions pour ajouter une nouvelle base de données.

![Database1](https://i.imgur.com/MtRa3SX.png)

- Vous devrez fournir des informations telles que le nom de la base de données et l'hôte pour s'y connecter. Ces informations devraient correspondre à celles que vous avez configurées dans votre base de données auparavant. Le mot de passe de l'utilisateur de la base de données est généré automatiquement de façon sécurisée.

![Database2](https://i.imgur.com/JC1K3QT.png)

![Database3](https://i.imgur.com/oZqdqiU.png)

**3. Configurer le serveur pour utiliser la base de données :**

- Une fois la base de données ajoutée, vous devez configurer votre serveur pour l'utiliser. Cela peut impliquer de modifier les fichiers de configuration du serveur pour inclure les informations de connexion à la base de données.
- Assurez-vous que les paramètres de connexion de la base de données dans les fichiers de configuration du serveur correspondent à ceux que vous avez configurés dans le panel.
  
**4. Tester la connexion :**

- Après avoir configuré la base de données dans votre panel et dans les fichiers de configuration du serveur, assurez-vous de tester la connexion pour vous assurer que tout fonctionne correctement. Vous pouvez le faire en essayant de vous connecter au serveur de jeu et en vérifiant s'il peut accéder et utiliser la base de données comme prévu.
  
### Planifications (Schedules)
Les planifications vous permettent de gérer automatiquement des tâches récurrentes telles que les redémarrages du serveur et les sauvegardes, optimisant ainsi les performances et la sécurité de votre serveur.

Les **"planifications"** dans un panel comme le vôtre peuvent être utiles pour la gestion et l'optimisation de votre serveur de jeux. Voici quelques-unes des utilisations principales des planifications sur By'Game pour les serveurs de jeux comme Minecraft, FiveM, Garry's Mod, Rust, etc. :

![Schedules1](https://i.imgur.com/e0G5YjE.png)

![Schedules2](https://i.imgur.com/VDPzpeb.png)

### Sous-utilisateurs (Subusers)
Si vous travaillez en équipe sur le développement de votre serveur, vous pouvez créer des sous-utilisateurs avec des permissions spécifiques. Cela se fait via la catégorie "Utilisateurs" du panel.
Pour cela, cliquez sur le bouton "Nouvel utilisateur", un formulaire devrait s'ouvrir :   
![Subusers](https://i.imgur.com/PlZkXko.png)

**USER EMAIL** = l'email du compte sous-utilisateur
> Si le compte est déjà existant sur By'Game, l'utilisateur aura directement accès à votre serveur. Sinon, un e-mail lui sera envoyé pour configurer son nouveau compte.

Cochez ensuite les **permissions** que vous souhaitez attribuer à votre sous-utilisateur et cliquez sur le bouton bleu en haut à droite "**INVITE USER**" pour l'inviter.

### Sauvegardes (Backups)
Les sauvegardes sont essentielles pour protéger les données de votre serveur contre les pertes et faciliter la récupération après un incident. Il est recommandé de planifier des sauvegardes régulières.

- **Protection des données des joueurs :** Les sauvegardes permettent d'enregistrer les données du serveur : fichiers, et dossiers. En cas de problème du serveur ou de perte de données, les sauvegardes peuvent être utilisées pour restaurer l'état précédent du jeu et éviter ainsi la perte de progrès des joueurs. (les backups ne se font pas automatiquement à moins que vous ayez fait une planification auparavant)

- **Sécurité et récupération après une catastrophe :** En cas d'incident, tel qu'une panne du serveur ou une erreur de configuration, les sauvegardes permettent de restaurer rapidement le serveur dans un état fonctionnel que vous avez eu auparavant. Cela aide à minimiser les temps d'arrêt et à limiter les pertes de données.

- **Facilitation des tests et des mises à jour :** Avant d'appliquer des mises à jour majeures ou des modifications importantes sur le serveur, il est recommandé de créer une sauvegarde pour pouvoir revenir à un état stable en cas de problème. Les sauvegardes peuvent être utilisées pour tester de nouvelles fonctionnalités sans risquer de perdre l'intégrité des données des joueurs.

- **Prévention de la perte de contenu personnalisé :** Si vous utilisez des mods, des plugins ou d'autres contenus personnalisés sur votre serveur de jeu, les sauvegardes garantissent que ces ajouts ne seront pas perdus en cas de problème. Vous pouvez restaurer une sauvegarde précédente pour récupérer tout contenu qui aurait été supprimé ou endommagé.

![Backups1](https://i.imgur.com/UpeLIO9.png)

![Backups2](https://i.imgur.com/q5n2PWm.png)

### Réseau (Network)

La section "Réseau" permet de gérer, de créer, et de supprimer des allocations (ports).
Cela est nécessaire pour par exemple certains plugins sur Minecraft tel que DynMap qui nécessite un différent port que celui primaire.

__Exemple :__   
![Allocations](https://i.imgur.com/p4XTIHL.png)


### Démarrage (Startup)
La section "Démarrage" vous permet de configurer la manière dont votre serveur démarre, incluant par exemple le choix de la map (carte), la version du jeu, et d'autres paramètres importants.

__Exemple :__   
![Startup](https://i.imgur.com/A4ernm8.png)

*Les variables varient en fonction du type de votre serveur (Minecraft, FiveM, Garry's Mod, Rust, NodeJS, Python, etc.).*

### Paramètres (Settings)
La section "Paramètres" offre diverses options de gestion de votre serveur, incluant vos identifiants SFTP, les informations du serveur, les informations de débogage, et la possibilité de réinstaller le serveur.

Cette section est assez simple, il y a 4 sous-sections différentes qui ont des utilités différentes.

1. **Identifiants SFTP :** Ils servent à accéder à votre gestionnaire de fichiers en utilisant une application externe, comme ce que nous avons vu précédemment dans la documentation.
2. **Informations du serveur :** Vous pouvez consulter les informations de votre serveur sur le panneau, y compris le nom ainsi que sa description.
3. **Informations de Debug :** Nous disposons ici d'informations d'identification telles que le nom du nœud et également connaître l'ID du serveur afin que le support puisse rapidement identifier le serveur concerné en cas d'assistance.
4. **Réinstallation du serveur :** Si vous souhaitez vérifier le serveur parce que vous doutez qu'il manque un fichier de base, vous pouvez effectuer cette vérification en appuyant sur le bouton. Cependant, si vous souhaitez procéder à une réinstallation complète du serveur et le remettre à zéro, vous devez dans un premier temps effectuer une suppression totale de tous vos fichiers et, une fois cela fait, appuyer sur le bouton de réinstallation.

![Settings](https://i.imgur.com/CrFay44.png)

### Activité (Logs)
La section "Activité" fournit un historique complet des actions effectuées sur le panel, vous permettant de suivre qui a fait quoi et quand.

Cette section de l'interface vous offre un accès à un journal détaillé des activités réalisées sur le panel, précisant qui a effectué quelle action et quand. Elle vous permet de vérifier si vous ou un sous-utilisateur avez apporté des modifications à un fichier (et lequel en particulier), redémarré le serveur, entre autres actions.

![Activity](https://i.imgur.com/QMDExH3.png)

## Conclusion
Ce guide rapide devrait vous aider à prendre en main votre serveur hébergé sur le panel By'Game. N'oubliez pas que la communauté est là pour vous aider si vous avez des questions ou rencontrez des problèmes. Vous pouvez également contacter le [support de By-Hoster](https://my.by-hoster.net/contact) pour toute autre question.

Bonne chance et bon jeu !
