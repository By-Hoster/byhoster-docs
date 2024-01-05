---
sidebar_position: 1
---

# Bien débuter avec votre VPS (Debian/Ubuntu)

Bienvenue sur votre nouveau VPS (Virtual Private Server) ! Ce guide vous aidera à démarrer et à sécuriser votre expérience avec un serveur Debian ou Ubuntu.

## Accéder à votre VPS

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
sudo apt upgrade
```

## Sécurité de base
### Créer un nouvel utilisateur
Évitez d'utiliser le compte root directement. Créez un nouvel utilisateur avec des privilèges sudo.

```bash
sudo adduser votre_nom_utilisateur
sudo usermod -aG sudo votre_nom_utilisateur
```

## Désactiver la connexion root
Modifiez le fichier de configuration SSH pour désactiver la connexion directe en tant que root.

```bash
sudo nano /etc/ssh/sshd_config
```
Assurez-vous que la ligne suivante est présente et commentée (avec un `#` au début) ou supprimez-la :
```
PermitRootLogin no
```
Redémarrez le service SSH pour appliquer les modifications.
```bash
sudo service ssh restart
```

## Pare-feu (firewall)
Utilisez un pare-feu pour contrôler le trafic réseau. `ufw` est un outil convivial.
```bash
sudo apt install ufw
sudo ufw allow ssh
sudo ufw enable
```

## Configuration avancée
### Surveillance du système
Installez des outils de surveillance tels que `htop` pour surveiller les ressources du système.
```bash
sudo apt install htop
htop
```

## Conclusion
**Vous avez maintenant configuré votre VPS avec une base de sécurité solide. Explorez davantage selon vos besoins et assurez-vous de suivre les meilleures pratiques de sécurité**