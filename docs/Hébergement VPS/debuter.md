---
sidebar_position: 1
---

# Bien débuter avec votre VPS (Debian/Ubuntu)

Bienvenue sur votre nouveau VPS (Virtual Private Server) ! Ce guide vous aidera à vous connecter et à sécuriser votre expérience avec un serveur Debian ou Ubuntu.

## Accéder à votre VPS

### Obtenir un VPS
Vous n'avez pas encore de VPS ou vous cherchez une offre à moindre coût ? Découvrez les solutions proposées par By-Hoster, accessibles depuis leur boutique : [By-Hoster VPS](https://client.by-hoster.net/store/vps).

### Connexion SSH

La manière la plus courante d'accéder à un VPS est d'utiliser **SSH (Secure Shell)**, un protocole sécurisé pour se connecter à distance. Voici les étapes pour vous connecter à votre serveur VPS via SSH :

#### 1. Ouvrir votre terminal
Sur Linux ou macOS, vous pouvez utiliser le terminal intégré. Sur Windows, vous pouvez utiliser un outil comme **PuTTY** ou bien **Windows PowerShell** (CMD).

#### 2. Commande de connexion

Dans le terminal, tapez la commande suivante en remplaçant `utilisateur` par le nom d'utilisateur (par exemple, `root` sur les VPS By-Hoster) et `ip` par l'adresse IP de votre serveur.

```bash
ssh utilisateur@ip
```

Par exemple, si vous vous connectez en tant que `root` à un serveur ayant l'IP `89.213.144.X` :

```bash
ssh root@89.213.144.X
```

#### 3. Accepter la clé SSH

La première fois que vous vous connectez à votre VPS, vous recevrez un message vous demandant d'accepter la clé SSH. Tapez "yes" pour continuer.

#### 4. Saisir le mot de passe

Ensuite, vous devrez entrer le mot de passe de l'utilisateur. Tapez-le (même si les caractères ne s'affichent pas à l'écran) et appuyez sur **Entrée**.

Vous voilà connecté à votre VPS !

## Mises à jour du système

Pour sécuriser votre serveur, il est essentiel de le mettre à jour régulièrement. Une fois connecté à votre VPS, exécutez les commandes suivantes pour installer les dernières mises à jour :

```bash
sudo apt update
sudo apt full-upgrade -y
```

Ces commandes vont :
- Mettre à jour la liste des paquets disponibles (`apt update`)
- Installer les mises à jour des paquets et du noyau (`apt full-upgrade`)

Après cela, votre serveur sera à jour et prêt à être utilisé !
