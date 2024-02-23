
# Projet BAC

Une solution pour la gestion des déchets d’une ville dans leurs centres de traitement.

## Démarrage

Ces instructions vous permettront d'obtenir une copie du projet en cours d'exécution sur votre machine locale à des fins de développement et de test. Voir déploiement pour des notes sur la façon de déployer le projet sur un système actif.

### Prérequis

Ce dont vous avez besoin pour installer le logiciel et comment les installer.

[Docker](https://docs.docker.com/)
[Docker-Compose](https://docs.docker.com/compose/install/)
[Git](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git)


### Installation

- Cloner le projet
```bash
git clone https://github.com/Maxenceboo/BAC.git
```

- Se rendre dans le dossier du projet
```bash
cd projet-bac
```

- Lancer le projet
```bash
docker-compose up
```

## Utilisation

Bien penser a modifier le fichier alarm.js pour la clef de l'API et les emails de réception et d'envoi.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](LICENSE) pour plus de détails.
