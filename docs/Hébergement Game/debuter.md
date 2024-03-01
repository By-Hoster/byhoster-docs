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

![Dashboard](https://media.discordapp.net/attachments/1212812376148156426/1212812448487317595/dashboard.png?ex=65f3329c&is=65e0bd9c&hm=e6be21e240a971b6929d5140f71ba1da2c4475acd81b296462cec4ffabc2922d&=&format=webp&quality=lossless&width=1247&height=671)

Vous appuyerez sur le serveur concerné auquel vous souhaitez accéder puis vous arriverez sur votre console qui devrait ressembler à cela :

![Console](https://media.discordapp.net/attachments/1212812376148156426/1212813705956429824/image.png?ex=65f333c8&is=65e0bec8&hm=09bdd23348c48683e9a0b65c8eb6770f8166c4f6edf66534da656093eb2dc0d0&=&format=webp&quality=lossless&width=1248&height=671)

Dans cette interface, vous aurez la possibilité de démarrer, redémarrer ou arrêter votre serveur/bot. En cas de nécessité, vous pourrez également le forcer à s'arrêter. De plus, au sein de la même interface, vous aurez accès aux informations les plus importantes concernant votre machine, incluant :

- Le pourcentage d'utilisation du CPU (processeur)
- L'utilisation de la RAM et de l'espace disque en Giga-Octets
- L'IP de votre serveur pour effectuer une connexion en jeu (inutile en cas d'utilisation d'un bot)

### Gestionnaire de fichiers
Le gestionnaire de fichiers est accessible depuis le menu latéral gauche du panel. C'est ici que vous configurerez vos plugins, mods, addons, ou autres fichiers nécessaires à votre serveur.

Par exemple, vous pouvez faire des actions simples telles que : **renommer**, **déplacer**, **changer les permissions**, **archiver**, **supprimer**, **désarchiver**, etc.
En bref, ce que vous retrouverez dans un gestionnaire de fichiers classique.

Pour des transferts de fichiers plus rapides, vous pouvez également utiliser FileZilla, accessible ici → [https://filezilla-project.org](https://filezilla-project.org). 

![FileZilla](https://media.discordapp.net/attachments/1212812376148156426/1212828652220456961/image.png?ex=65f341b3&is=65e0ccb3&hm=21f6526da6c37e654db541b24da695c9fa458c3c53c59b094cf78cf32c6ee97e&=&format=webp&quality=lossless&width=1250&height=671)

Pour vous connecter et accéder à votre gestionnaire de fichiers, insérez l'hôte et le nom d'utilisateur que vous retrouverez dans l'onglet "**Paramètres**" du panel : 

![Paramètres](https://media.discordapp.net/attachments/1212812376148156426/1212934611047424022/image.png?ex=65f3a462&is=65e12f62&hm=087c5943392b9bc52ef1680307074b1fac7e2884529b84d3cc0c8cb967b7ff44&=&format=webp&quality=lossless)

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

![Database1](https://media.discordapp.net/attachments/1212812376148156426/1212930984409047060/image.png?ex=65f3a101&is=65e12c01&hm=4da11fdc46c4382088f281b79567a3401d3e30a6877e023cdeb904ee9c6ecf5d&=&format=webp&quality=lossless&width=873&height=671)

- Vous devrez fournir des informations telles que le nom de la base de données et le nom d'utilisateur. Ces informations devraient correspondre à celles que vous avez configurées dans votre base de données auparavant. Le mot de passe de l'utilisateur de la base de données est généré automatiquement de façon sécurisée.

![Database2](https://media.discordapp.net/attachments/1212812376148156426/1212931354740920391/image.png?ex=65f3a15a&is=65e12c5a&hm=df09370767aca52078487eb05c0904b49011ceb13c059e63b17ec13b0a39943d&=&format=webp&quality=lossless)

![Database3](https://media.discordapp.net/attachments/1212812376148156426/1212932846528888864/image.png?ex=65f3a2bd&is=65e12dbd&hm=cd8868972a6c4e2c1302e45126b16d8120e88c868dce1963d160c10c17b3667f&=&format=webp&quality=lossless)

**3. Configurer le serveur pour utiliser la base de données :**

- Une fois la base de données ajoutée, vous devez configurer votre serveur pour l'utiliser. Cela peut impliquer de modifier les fichiers de configuration du serveur pour inclure les informations de connexion à la base de données.
- Assurez-vous que les paramètres de connexion de la base de données dans les fichiers de configuration du serveur correspondent à ceux que vous avez configurés dans le panel.
  
**4. Tester la connexion :**

- Après avoir configuré la base de données dans votre panel et dans les fichiers de configuration du serveur, assurez-vous de tester la connexion pour vous assurer que tout fonctionne correctement. Vous pouvez le faire en essayant de vous connecter au serveur de jeu et en vérifiant s'il peut accéder et utiliser la base de données comme prévu.
  
### Planifications (Schedules)
Les planifications vous permettent de gérer automatiquement des tâches récurrentes telles que les redémarrages du serveur et les sauvegardes, optimisant ainsi les performances et la sécurité de votre serveur.

Les **"planifications"** dans un panel comme le vôtre peuvent être utiles pour la gestion et l'optimisation de votre serveur de jeux. Voici quelques-unes des utilisations principales des planifications sur By'Game pour les serveurs de jeux comme Minecraft, FiveM, Garry's Mod, Rust, etc. :

![Schedules1](https://media.discordapp.net/attachments/1212812376148156426/1212911460234305536/image.png?ex=65f38ed2&is=65e119d2&hm=9ab559c21389c5151a36ab7245f710383fbb23a6284868bfde8334d8dd920d83&=&format=webp&quality=lossless&width=1120&height=671)

![Schedules2](https://media.discordapp.net/attachments/1212812376148156426/1212913604513234995/image.png?ex=65f390d2&is=65e11bd2&hm=bab34422d186d58d33e82d9fb9f2be3de013bf7260c44eee25e3c1667c0da8b4&=&format=webp&quality=lossless&width=1097&height=671)

### Sous-utilisateurs (Subusers)
Si vous travaillez en équipe sur le développement de votre serveur, vous pouvez créer des sous-utilisateurs avec des permissions spécifiques. Cela se fait via la catégorie "Utilisateurs" du panel.
Pour cela, cliquez sur le bouton "Nouvel utilisateur", un formulaire devrait s'ouvrir :   
![Subusers](https://media.discordapp.net/attachments/1212137634722484316/1212925145862111252/23dCs51.png?ex=65f39b91&is=65e12691&hm=d63f95af290ea766e2939d99295c287e956e6c1ac2ead149615f3c5328162292&=&format=webp&quality=lossless&width=755&height=671)

**USER EMAIL** = l'email du compte sous-utilisateur
> Si le compte est déjà existant sur By'Game, l'utilisateur aura directement accès à votre serveur. Sinon, un e-mail lui sera envoyé pour configurer son nouveau compte.

Cochez ensuite les **permissions** que vous souhaitez attribuer à votre sous-utilisateur et cliquez sur le bouton bleu en haut à droite "**INVITE USER**" pour l'inviter.

### Sauvegardes (Backups)
Les sauvegardes sont essentielles pour protéger les données de votre serveur contre les pertes et faciliter la récupération après un incident. Il est recommandé de planifier des sauvegardes régulières.

- **Protection des données des joueurs :** Les sauvegardes permettent d'enregistrer les données du serveur : fichiers, et dossiers. En cas de problème du serveur ou de perte de données, les sauvegardes peuvent être utilisées pour restaurer l'état précédent du jeu et éviter ainsi la perte de progrès des joueurs. (les backups ne se font pas automatiquement à moins que vous ayez fait une planification auparavant)

- **Sécurité et récupération après une catastrophe :** En cas d'incident, tel qu'une panne du serveur ou une erreur de configuration, les sauvegardes permettent de restaurer rapidement le serveur dans un état fonctionnel que vous avez eu auparavant. Cela aide à minimiser les temps d'arrêt et à limiter les pertes de données.

- **Facilitation des tests et des mises à jour :** Avant d'appliquer des mises à jour majeures ou des modifications importantes sur le serveur, il est recommandé de créer une sauvegarde pour pouvoir revenir à un état stable en cas de problème. Les sauvegardes peuvent être utilisées pour tester de nouvelles fonctionnalités sans risquer de perdre l'intégrité des données des joueurs.

- **Prévention de la perte de contenu personnalisé :** Si vous utilisez des mods, des plugins ou d'autres contenus personnalisés sur votre serveur de jeu, les sauvegardes garantissent que ces ajouts ne seront pas perdus en cas de problème. Vous pouvez restaurer une sauvegarde précédente pour récupérer tout contenu qui aurait été supprimé ou endommagé.

![Backups1](https://media.discordapp.net/attachments/1212812376148156426/1212921624744169543/image.png?ex=65f3984a&is=65e1234a&hm=975f128941ae112ffe550d5dacc7ed72092907e0b7582516b0411ce3d8677a37&=&format=webp&quality=lossless&width=940&height=671)

![Backups2](https://media.discordapp.net/attachments/1212812376148156426/1212922499629580338/image.png?ex=65f3991a&is=65e1241a&hm=51d498ef644886baa9348f7800ce0b2599576c855e329aa4c464bcdb362977bb&=&format=webp&quality=lossless&width=1444&height=273)

### Réseau (Network)

La section "Réseau" permet de gérer, de créer, et de supprimer des allocations (ports).
Cela est nécessaire pour par exemple certains plugins sur Minecraft tel que DynMap qui nécessite un différent port que celui primaire.

__Exemple :__   
![Allocations](https://media.discordapp.net/attachments/1212812376148156426/1212933860619456572/image.png?ex=65f3a3af&is=65e12eaf&hm=1b0cd969da58ad4824ae0fe2d54282d1cca1b3ba77af207fbdbf1c43ff8729e3&=&format=webp)


### Démarrage (Startup)
La section "Démarrage" vous permet de configurer la manière dont votre serveur démarre, incluant par exemple le choix de la map (carte), la version du jeu, et d'autres paramètres importants.

__Exemple :__   
![Startup](https://media.discordapp.net/attachments/1212812376148156426/1212931350726713435/image.png?ex=65f3a159&is=65e12c59&hm=b4f99c85f596d4b1b9fc1358a98ae61bbf9973befa8b68024bf591c9bb309a4f&=&format=webp&quality=lossless&width=873&height=671)

*Les variables varient en fonction du type de votre serveur (Minecraft, FiveM, Garry's Mod, Rust, NodeJS, Python, etc.).*

### Paramètres (Settings)
La section "Paramètres" offre diverses options de gestion de votre serveur, incluant vos identifiants SFTP, les informations du serveur, les informations de débogage, et la possibilité de réinstaller le serveur.

Cette section est assez simple, il y a 4 sous-sections différentes qui ont des utilités différentes.

1. **Identifiants SFTP :** Ils servent à accéder à votre gestionnaire de fichiers en utilisant une application externe, comme ce que nous avons vu précédemment dans la documentation.
2. **Informations du serveur :** Vous pouvez consulter les informations de votre serveur sur le panneau, y compris le nom ainsi que sa description.
3. **Informations de Debug :** Nous disposons ici d'informations d'identification telles que le nom du nœud et également connaître l'ID du serveur afin que le support puisse rapidement identifier le serveur concerné en cas d'assistance.
4. **Réinstallation du serveur :** Si vous souhaitez vérifier le serveur parce que vous doutez qu'il manque un fichier de base, vous pouvez effectuer cette vérification en appuyant sur le bouton. Cependant, si vous souhaitez procéder à une réinstallation complète du serveur et le remettre à zéro, vous devez dans un premier temps effectuer une suppression totale de tous vos fichiers et, une fois cela fait, appuyer sur le bouton de réinstallation.

![Settings](https://media.discordapp.net/attachments/1212812376148156426/1212849578190049321/image.png?ex=65f35531&is=65e0e031&hm=12db59005ca02368dc8fa4b0ecbaf843999f5b177a774293edc2fba2bb58bb95&=&format=webp&quality=lossless&width=1216&height=671)

### Activité (Logs)
La section "Activité" fournit un historique complet des actions effectuées sur le panel, vous permettant de suivre qui a fait quoi et quand.

Cette section de l'interface vous offre un accès à un journal détaillé des activités réalisées sur le panel, précisant qui a effectué quelle action et quand. Elle vous permet de vérifier si vous ou un sous-utilisateur avez apporté des modifications à un fichier (et lequel en particulier), redémarré le serveur, entre autres actions.

![Activity](https://media.discordapp.net/attachments/1212812376148156426/1212916508888399902/image.png?ex=65f39386&is=65e11e86&hm=3cca151517b2389dc77fe7149161fc9feaf36ad9d8a8f7271059dfb83e0af72b&=&format=webp&quality=lossless&width=953&height=671)

# Conclusion
Ce guide rapide devrait vous aider à prendre en main votre serveur hébergé sur le panel Pterodactyl par By-Hoster. N'oubliez pas que la communauté est là pour vous aider si vous avez des questions ou rencontrez des problèmes. Vous pouvez également contacter le [support de By-Hoster](https://my.by-hoster.net/contact) pour toute autre question.

Bonne chance et bon jeu !
