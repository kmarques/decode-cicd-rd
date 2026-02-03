# TPs

## TP1 : Git hooks

Le TP consiste, à partir d'un projet Symfony/PHP, à ajouter des hooks Git pour automatiser la validation du code avant chaque commit (pre-commit) et à valider le format des commits (commit-msg).

Pour la validation du code, vous pouvez utiliser des outils comme PHP_CodeSniffer ou PHP-CS-Fixer pour vérifier le style de code et PHPStan pour l'analyse statique du code.

Pour la validation des messages de commit, vous pouvez utiliser commitlint avec une configuration adaptée à la Conventional Commit Standard.

## TP2 : Intégration Continue avec GitHub Actions

Le TP consiste à configurer un workflow GitHub Actions pour automatiser le processus d'intégration continue (CI) pour un projet Symfony/PHP.
Le workflow doit inclure les jobs suivants :

- Linting : Utiliser PHP_CodeSniffer pour vérifier le style de code et PHPStan pour l'analyse statique du code.
  
- Tests Healthcheck : Vérifier que l'application répond correctement aux requêtes HTTP.
- Tests unitaires : Exécuter les tests unitaires avec PHPUnit.
- Tests d'intégration : Exécuter les tests d'intégration avec PHPUnit.
- Tests e2e : Utiliser Cypress pour exécuter les tests e2e.

- Notify : Afficher un message de succès ou d'échec à la fin du workflow.