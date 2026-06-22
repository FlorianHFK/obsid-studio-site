# OBSID‑Studio — Landing & Preview

Projet : landing page pour OBSID‑Studio — studio créatif local‑first pour moteurs IA.

Live demo

- Site publié via GitHub Pages : https://florianhfk.github.io/obsid-studio-site/

Résumé rapide

OBSID‑Studio est une landing page (prototype V2 IMPACT) qui présente la vision d'un studio local pour la création assistée par IA : détection de moteurs, orchestration de flux, indexation d'outputs, mémoire de prompts, et "ORBYSS" comme cœur visuel vivant.

Contenu du dépôt

- `index.html` — page principale (CSS embarqué pour déploiement simple)
- `waitlist-success.html` — page de remerciement locale
- `404.html` — redirection vers la racine
- `robots.txt`
- `assets/` — images et icônes (favicon, og-image, cockpit preview svg)
- `LICENSE` — MIT

Pourquoi cette licence ?

Vous m'avez demandé de protéger l'idée/projet : la licence MIT protège la réutilisation du code en exigeant que le copyright et la licence restent attachés, sans interdire la publication. Si vous préférez une licence plus restrictive (ex: All Rights Reserved ou Creative Commons non commerciale), dites-le.

Formulaire et collecte des inscriptions

- Le formulaire de la page utilise un comportement local : il ouvre votre client mail avec un message pré-rempli (mailto:). Cela évite d'exposer des services externes et respecte votre souhait de ne pas utiliser Netlify.
- Pour un stockage automatique et professionnel (base de données, notifications), nous pouvons connecter un backend ou utiliser un service Forms à l'avenir.

Mises à jour proposées / prochaines étapes

- Ajouter une vraie image OG (1200×630) en PNG/WebP pour un rendu optimal sur réseaux sociaux — j'ai ajouté une SVG placeholder (`assets/og-image.svg`) que vous pouvez remplacer par une export PNG.
- Intégrer un petit backend (optionnel) pour capturer les e-mails de la waitlist. Sans backend, le mailto est fiable mais demande aux utilisateurs d'envoyer manuellement.
- Ajouter une page de presse / media kit et un lien de contact pour partenaires.

Metadonnées GitHub & conseils

- Dans la page Settings du repo, mettez :
  - Description courte : "Landing — OBSID‑Studio — Local AI Creative Studio"
  - Website / homepage : https://florianhfk.github.io/obsid-studio-site/
  - Topics : obsid, local-ai, studio, orbyss, creative

Licence

- Licence ajoutée : MIT. Le code est protégé par la licence ; l'idée conceptuelle restant générale ne peut pas être complètement « volée » par licence, mais le code et les ressources le sont.

Si vous voulez que je :
- remplace l'image OG SVG par un PNG exporté (je peux générer un SVG amélioré ou vous pouvez fournir un PNG),
- ajoute un workflow GitHub Actions pour vérifier la présence d'assets et build,
- créer une branche PR au lieu de pousser sur main — dites le mot.

Merci — j'ai appliqué les améliorations de contenu et ajouté la licence MIT. Si vous voulez un rendu encore plus professionnel (animations, microinteractions, A/B wording pour CTA, copywriting de vente), je peux faire plusieurs variantes et tests A/B.
