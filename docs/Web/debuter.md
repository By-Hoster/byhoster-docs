---
sidebar_position: 1
---

# Bien débuter dans l'hébergement Web

## Commander chez By-Hoster

### Obtenir son hébergement web
Bienvenue chez **By-Hoster** ! Si vous recherchez une solution simple et fiable pour héberger votre site web, avec une garantie d'accès continu 24/7, vous êtes au parfait endroit. Nous offrons une expérience d'hébergement web de premier plan, caractérisée par :

- **Performance Élevée** : Nos serveurs sont équipés de **RAM DDR4** et de **SSD NVMe**, vous garantissant une rapidité et une efficacité exceptionnelles.
- **Gestion Facile** : Bénéficiez d'un panel intuitif pour une gestion complète de votre site. Installez des CMS tels que **Wordpress** en toute simplicité, avec un simple clic !
- **Sécurité Optimale** : Nous offrons la possibilité de générer gratuitement un **certificat SSL**, renforçant la sécurité et la fiabilité de votre site.

Découvrez nos offres compétitives sur notre boutique en ligne : [Offres Hébergement Web](https://my.by-hoster.net/store/web). Rejoignez-nous et vivez l'expérience d'un hébergement web de qualité supérieure adapté à vos besoins spécifiques.

### Configurer son nom de domaine
Un nom de domaine est une adresse internet facile à mémoriser, utilisée pour accéder à des sites web. Il s'agit d'une suite de caractères alphanumériques qui remplace une adresse IP numérique, beaucoup plus complexe à retenir pour un humain. Le nom de domaine fonctionne comme une sorte de raccourci qui pointe vers l'adresse IP d'un serveur hébergeant un site web, facilitant ainsi son accès. Par exemple, au lieu de taper une série de chiffres comme 192.168.1.1, on peut simplement écrire "exemple.com". Ce système rend la navigation sur Internet beaucoup plus intuitive et conviviale.

Sur By-Hoster, vous avez 2 possibilités :
- Soit vous possédez déjà un nom de domaine :
    Vous avez juste a créé une redirection via votre serveur DNS (exemple: [Cloudflare](https://cloudflare.com))
    Pour ce faire :
    1. Accéder au panel de gestion de zones DNS de votre nom de domaine
    2. Supprimer (si elles existent) les redirections **www** et **@ / votredomaine.com**
    3. Créer une nouvelle redirection de type CNAME sans proxy (DNS Uniquement) pour "``@``" (ou votre domaine racine) pointant vers l'adresse : ``web.byh.fr``, faites pareil pour **www.**.
    4. Cliquez sur "Enregistrer" / "Sauvegarder" pour enregistrer ces nouvelles redirections
    5. Le délai de propagation des zones peut durer jusqu'à 5 minutes, veuillez patienter que votre domaine redirige vers ByWeb

- Si vous n'avez pas encore de nom de domaine :
    Ce n'est pas un soucis chez By-Hoster, nous fournissons gratuitement des sous-domaines de type :
        - votresite.byh.fr
        - votresite.by-h.fr
        - votresite.by-h.cloud
    *Ou si vous souhaitez bénéficer de votre propre nom de domaine de type : votresite.fr, votresite.com, votresite.net, etc. ; nous pouvons vous en vendre à prix fixe :* [Nous contacter](mailto:contact@by-hoster.com?subject=Achat nom de domaine)

### Les bases de ByWeb
ByWeb est notre panel de gestion de site web accessible à l'adresse : https://web.byh.fr

Si vous avez déjà un service d'hébergement web By-Hoster, vous avez dù recevoir par email vos identifiants de connexion *(Vérifiez vos SPAMS)*.
Auquel cas, vous avez aussi dans la gestion de votre service sur l'espace client un bouton "Connexion automatique" pour simplifier l'authentification au panel en un clic.

Une fois connecté sur ByWeb, pour gérer votre site rendez-vous dans l'onglet "**Sites Web & Domaines**" du menu de gauche et sélectionné votre site.

Vous devriez aperçevoir une page qui ressemble à celle-ci :
![Aperçu Panel ByWeb | Interface - Gestion de site](https://media.discordapp.net/attachments/693203267009904680/1193652376993808404/image.png)
