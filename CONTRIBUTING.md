# 🤝 Contribuer à OBSID-Studio

Merci de votre intérêt pour contribuer à **OBSID-Studio** ! 
Toute contribution est la bienvenue, que ce soit pour signaler un bug, proposer une fonctionnalité ou améliorer la documentation.

---

## 📌 **Code de Conduite**

En participant à ce projet, vous acceptez de respecter notre [Code de Conduite](CODE_OF_CONDUCT.md).

---

## 🚀 **Comment contribuer**

### 1️⃣ **Signaler un Bug**

Si vous trouvez un bug, merci de :
1. Vérifier que le bug n'a pas déjà été signalé dans les [Issues](https://github.com/FlorianHFK/obsid-studio-site/issues).
2. Créer une nouvelle issue en utilisant le template **[Bug Report](.github/ISSUE_TEMPLATE/bug-report.yml)**.
3. Fournir autant de détails que possible (étapes pour reproduire, logs, captures d'écran).

### 2️⃣ **Proposer une Fonctionnalité**

Pour proposer une nouvelle fonctionnalité :
1. Vérifier que la fonctionnalité n'a pas déjà été suggérée.
2. Créer une nouvelle issue avec le label `enhancement`.
3. Expliquer clairement le besoin et l'impact attendu.

### 3️⃣ **Contribuer au Code**

#### 🍴 **Fork et Branche**
1. Forker le dépôt sur GitHub.
2. Cloner votre fork localement :
   ```bash
   git clone https://github.com/VOTRE_UTILISATEUR/obsid-studio-site.git
   cd obsid-studio-site
   ```
3. Créer une nouvelle branche pour votre contribution :
   ```bash
   git checkout -b feature/ma-fonctionnalité
   ```

#### 🔧 **Développement**
1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```
   > Le site sera disponible sur [http://localhost:5173](http://localhost:5173).

3. Faire vos modifications.

#### ✅ **Commiter vos Changements**
1. Ajouter vos modifications :
   ```bash
   git add .
   ```
2. Commiter avec un message clair :
   ```bash
   git commit -m "feat: ajouter une nouvelle section Beta Test"
   ```
   > Utilisez les préfixes conventionnels :
   > - `feat:` pour une nouvelle fonctionnalité
   > - `fix:` pour une correction de bug
   > - `docs:` pour la documentation
   > - `style:` pour les changements cosmétiques
   > - `refactor:` pour du refactoring de code
   > - `perf:` pour les optimisations de performance
   > - `test:` pour les tests

3. Pousser sur votre fork :
   ```bash
   git push origin feature/ma-fonctionnalité
   ```

#### 📤 **Ouvrir une Pull Request**
1. Allez sur [GitHub](https://github.com/FlorianHFK/obsid-studio-site) et ouvrez une **Pull Request** depuis votre branche.
2. Remplissez le template de PR avec une description claire de vos changements.
3. Attendez la review et les éventuels commentaires.

---

## 📁 **Structure du Projet**

```
obsid-studio-site/
├── index.html              # Page principale
├── assets/
│   ├── css/
│   │   └── main.min.css    # CSS minifié
│   ├── js/
│   │   └── main.min.js     # JS minifié
│   └── images/             # Images optimisées
│       ├── favicon.svg
│       ├── obsid-mark.svg
│       └── ...
├── sw.js                   # Service Worker
├── sitemap.xml            # Sitemap pour le SEO
├── .github/
│   └── ISSUE_TEMPLATE/     # Templates pour les issues
├── CONTRIBUTING.md        # Ce fichier
├── README.md               # Documentation principale
└── package.json            # Dépendances npm
```

---

## 🎨 **Conventions de Code**

### HTML
- Utilisez des **balises sémantiques** (`<section>`, `<article>`, `<nav>`, etc.).
- Ajoutez des **attributs `alt`** descriptifs pour toutes les images.
- Utilisez `loading="lazy"` pour les images hors de la vue initiale.

### CSS
- Utilisez les **variables CSS** définies dans `:root`.
- Privilégiez les **Flexbox/Grid** pour les layouts.
- Évitez les `!important`.
- Utilisez des **noms de classes clairs** (ex: `.btn-primary`, `.card-feature`).

### JavaScript
- Utilisez **ES6+** (arrow functions, template literals, etc.).
- Évitez les **variables globales** (utilisez des modules si nécessaire).
- Ajoutez des **commentaires** pour les parties complexes.
- Gérez les **erreurs** de manière gracieuse.

---

## 🧪 **Tests**

Pour l'instant, le projet n'a pas de suite de tests automatisés, mais vous pouvez :
1. Tester manuellement sur différents navigateurs (Chrome, Firefox, Safari, Edge).
2. Vérifier le **responsive design** (mobile, tablette, desktop).
3. Utiliser [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) pour auditer les performances.

---

## 📚 **Ressources**

- [Documentation Vite](https://vitejs.dev/guide/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

---

## 🙏 **Remerciements**

Merci à tous les contributeurs qui aident à faire de OBSID-Studio un produit exceptionnel !

---

## 📧 **Contact**

Pour toute question, vous pouvez :
- Ouvrir une **issue** sur GitHub.
- Nous contacter via [Twitter @FlorianHFK](https://twitter.com/FlorianHFK).
- Envoyer un email à `hachefk23@gmail.com`.
