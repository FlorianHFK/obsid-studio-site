# OBSID-Studio — site statique V1

Site vitrine statique prêt pour NAS, Netlify, GitHub Pages ou autre hébergement simple.

## Fichiers

- `index.html`
- `assets/styles.css`
- `assets/app.js`
- `assets/favicon.svg`
- `assets/obsid-studio-look.png` si l’image fournie était disponible
- `netlify.toml`
- `404.html`
- `robots.txt`

## Déploiement NAS

Copier le contenu du dossier `obsid-studio-site-v1` dans le répertoire web de ton NAS.

Exemples :
- Synology Web Station : dossier `web/obsid-studio`
- Nginx/Apache : racine du vhost
- Serveur local : ouvrir `index.html`

## Déploiement Netlify

Méthode simple :
1. Aller sur Netlify.
2. Add new site → Deploy manually.
3. Glisser-déposer le dossier `obsid-studio-site-v1` ou le ZIP.
4. Le formulaire waitlist peut être capturé par Netlify Forms grâce à `data-netlify="true"`.

## Déploiement GitHub Pages

1. Créer un repo, par exemple `obsid-studio-site`.
2. Uploader tout le contenu du dossier.
3. Settings → Pages.
4. Source : Deploy from branch.
5. Branch : `main`, folder `/root`.

Note : GitHub Pages ne gère pas les formulaires dynamiques. Il faudra connecter Formspree, Netlify Forms, Tally, Google Forms, ou remplacer par un mailto.

## À modifier avant publication sérieuse

- Remplacer `contact@obsid-studio.com` dans `assets/app.js` si besoin.
- Ajouter un vrai domaine.
- Ajouter mentions légales / politique confidentialité avant capture publique sérieuse.
- Ajouter une vraie vidéo démo 60–90 secondes quand disponible.
- Remplacer/compléter les visuels par captures finales validées.

## Doctrine

Le site ne vend pas une licence finale aujourd’hui. Il sert à :
- expliquer OBSID en 10 secondes ;
- montrer une vision claire ;
- soutenir dossier financement ;
- capter des leads / early adopters ;
- préparer la Founder Preview.
