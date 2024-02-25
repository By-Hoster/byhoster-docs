---
sidebar_position: 1
---

# Générer un certificat SSL gratuitement

## Qu'est ce qu'un SSL ? A quoi sert-t-il ?
Le SSL (*Secure Sockets Layer*) est un protocole de sécurité essentiel pour les sites web. Il crée une connexion cryptée entre un serveur web et un navigateur, garantissant que toutes les données transmises restent privées et sécurisées. Ce protocole est crucial pour protéger les informations sensibles telles que les détails de carte de crédit, les identifiants d'utilisateur et les mots de passe. Il permet également d'accéder à un site web, en utilisant le protocole **HTTPS** (*Hyper Text Transfer Protocol Secure*) au lieu de HTTP classic. En outre, il renforce la confiance des utilisateurs grâce à l'icône de cadenas dans la barre d'adresse du navigateur, et améliore le référencement du site sur les moteurs de recherche.

## Comment en générer un gratuitement sur ByWeb ?
Sur ByWeb, vous pouvez générer un certificat __Let's Encrypt__ en un clic gratuitement.

Voici comment procéder étape par étape :
    - Rendez vous sur l'interface de la gestion de votre site sur [ByWeb](https://web.byh.fr)
    - Dans la catégorie "**Sécurité**", cliquez sur le bouton "**Certificats SLL/TLS**"
    ![Aperçu Panel ByWeb | Interface - SSL](https://github.com/By-Hoster/byhoster-docs/assets/69022745/d2dcc854-22d7-4897-9a2c-641c605d310c)
    - Assurez vous d'avoir bien configuré votre nom de domaine (redirection DNS), si ce n'est pas fait, veuillez regarder notre tutoriel : [**Bien héberger son site web**](./debuter.md)
    - Une fois sur cette page, cliquez sur "**Installer**" dans la première option pour générer un certificat SSL fourni gratuitement par __Let's Encrypt__
    ![Aperçu Panel ByWeb | Générer SSL - Let's Encrypt - Menu](https://github.com/By-Hoster/byhoster-docs/assets/69022745/7be4f91d-f5a5-4c74-b409-de74ca8a60e5)
    - Ensuite, sur le côté gauche de l'écran, vous trouverez un formulaire pour générer un certificat. Le champ "Adresse mail" correspond à votre adresse e-mail de contact. Par défaut, ByWeb remplit automatiquement ce champ avec votre e-mail client chez [By-Hoster](https://by-hoster.net). Concernant les options de redirection listées ci-dessous, choisissez celles qui correspondent à vos besoins et qui sont cohérentes avec les configurations DNS que vous avez établies précédemment. Il n'est pas recommandé de sélectionner toutes les options, mais uniquement celles qui sont enregistrées dans vos zones DNS. Pour un site web standard, il est conseillé de sélectionner la racine de votre domaine (par exemple, de type : mondomaine.com ou mondomaine.byh.fr) et, si configuré, le sous-domaine "**www.**". Quant à l'option "*" ou aux serveurs de messagerie, cochez-les selon vos besoins d'hébergement. Toutefois, assurez-vous que vos redirections DNS sont correctement configurées pour éviter toute erreur lors de la génération du certificat. Une fois que vous avez correctement rempli les champs et effectué les sélections nécessaires, cliquez sur le bouton bleu "**Obtenir gratuitement**" pour générer votre certificat SSL automatiquement et patientez le temps que __Let's Encrypt__ génère et installe votre certificat sur votre site
    ![Aperçu Panel ByWeb | Générer SSL - Let's Encrypt - Formulaire](https://github.com/By-Hoster/byhoster-docs/assets/69022745/5df433b0-f809-4d3a-88e3-e51784464e02)
    
Si vous êtes redirigé sur cette page, et qu'il y a bien marqué la mention "**Sécurisé**" dans les composants que vous avez sélectionné précédement, tout est bon, votre site est protégé et crypté ✅ !
    ![Aperçu Panel ByWeb | Générer SSL - Let's Encrypt - OK](https://github.com/By-Hoster/byhoster-docs/assets/69022745/b906062f-6134-4663-a154-e3bd47b445f3)

