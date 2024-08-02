---
sidebar_position: 1
---

# Bien débuter avec votre VPS (Debian/Ubuntu)

Bienvenue sur votre nouveau VPS (Virtual Private Server) ! Ce guide vous aidera à démarrer et à sécuriser votre expérience avec un serveur Debian ou Ubuntu.

## Accéder à votre VPS

### Obtenir un VPS
Vous n'avez pas encore de VPS ? Vous souhaitez en obtenir un de qualité à moindre coûts ?
Choisissez By-Hoster ! Nous proposons des offres VPS disponibles sur notre boutique : https://client.by-hoster.net/store/vps

### Connexion SSH

Utilisez SSH pour vous connecter à votre VPS. Remplacez `utilisateur` et `ip` par vos informations.
> Sur les VPS By-Hoster, l'utilisateur par défaut est : ``root``

```bash
ssh utilisateur@ip
```

## Mises à jour du système
Mettez à jour régulièrement votre système pour bénéficier des dernières fonctionnalités et correctifs de sécurité.

```bash
sudo apt update
sudo apt full-upgrade -y
```
