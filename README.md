# OBSID‑Studio — Landing & Product Preview

OBSID‑Studio est un prototype de studio créatif local‑first — un cockpit pour rendre l'IA locale puissante, claire et réutilisable. Ce dépôt contient la landing page (preview) qui présente la vision produit et la Founder Preview.

Pourquoi OBSID‑Studio ?
- Parce que l'IA locale est puissante mais fragmentée : modèles, interfaces, scripts et outputs se perdent.
- OBSID organise tes moteurs locaux (ComfyUI, Forge, LM Studio, Ollama, TTS/STT), orchestre des workflows, indexe les outputs et garde une mémoire projet réutilisable.
- ORBYSS est le "living core" : une représentation visuelle et interactive de l'état du studio — utile pour diagnostiquer et décider.

Ce que montre la landing
- Vision produit : cockpit, ORBYSS, modules, Engine Health, Generator Store et agents.
- Parcours créateur : de l'idée au livrable (prompt → moteur → output indexé → packs exportables).
- Roadmap et statut de la Founder Preview.

Contenu du dépôt
- `index.html` — landing page complète, responsive, prête pour GitHub Pages.
- `waitlist-success.html` — page de remerciement locale.
- `404.html` — redirection simple vers la racine.
- `assets/` — images et SVG (favicon, ORBYSS visual, cockpit preview, OG image placeholder).
- `LICENSE` — MIT.

État actuel
- Landing page complète et professionnelle sur la branche `v2-restore-improve`.
- Placeholders visuels remplacés par SVG premium pour un rendu cohérent. Idéalement, remplacez ensuite par exports PNG/WebP optimisés pour OG previews.
- Formulaire waitlist utilise `mailto:` pour ouvrir le client mail (aucune dépendance externe requise).

Prochaines étapes recommandées
1. Remplacer les SVG placeholders par assets graphiques finaux (PNG/WebP) pour OG et images produit (si disponibles).
2. Ajouter une image OG (1200×630 PNG) pour un rendu social optimal.
3. Mettre en place un backend sécurisé (optionnel) ou un service Forms pour capturer automatiquement les inscriptions.
4. Ajouter une page Media/Press kit et assets téléchargeables.

Déploiement
- Hébergement recommandé : GitHub Pages (aucune dépendance externe nécessaire). Le site est compatible et autonome.

Licence
- MIT (fichier `LICENSE` inclus).

Feedback
- Cette branche est destinée à préparation et relecture — je n'ai pas encore ouvert la Pull Request. Remplacez les images si vous avez des versions finales ; je m'occupe ensuite d'ouvrir la PR et d'itérer.
