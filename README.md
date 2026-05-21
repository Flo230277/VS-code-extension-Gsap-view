# GSAP Animation Studio (VS Code Extension)

Studio visuel industrialisé pour créer, prévisualiser et exporter des animations GSAP directement dans VS Code (expérience Webflow/AfterEffects-like, full React).

---

## 🚀 Caractéristiques PRO

- Visual Builder drag-and-drop ⬇️📦 pour timeline, canevas, layers (architecture scalable, 100% React, 100% locale)
- GSAP local embarqué (aucun CDN, build Webpack, performance & sécurité)
- Import/export de projets, messaging bidirectionnel pro (webview <=> extension VS Code)
- Logger centralisé, gestion d’erreurs prête pour debug/monitoring
- Packaging VSIX, scripts build/test/watch standard
- Prêt pour enrichissement Webflow-like (zoom, assets, interactions...)

---

## 🏗️ Structure du projet (PRO)

```
VS-code-extension-GSap-view/
├── .vscode/
│   └── launch.json
├── src/
│   ├── extension.ts
│   ├── webview/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── components/
│   │   │   ├── Canvas.tsx           # Preview animé GSAP
│   │   │   ├── Editor.tsx           # Panel édition
│   │   │   ├── Toolbar.tsx
│   │   │   ├── PropertiesPanel.tsx
│   │   │   ├── LayerList.tsx
│   │   │   └── Timeline.tsx         # Timeline visuelle (modèle Webflow)
│   │   └── utils/
│   │       └── vscodeMessaging.ts
├── package.json
├── webpack.config.js
├── tsconfig.json
├── README.md
├── out/
```

---

## ✨ Installation et lancement PRO

1. **Clone le repo**  
   ```bash
   git clone https://github.com/Flo230277/VS-code-extension-GSap-view.git
   cd VS-code-extension-GSap-view
   ```
2. **Installe les dépendances (gsap, React, etc.)**  
   ```bash
   npm install
   ```
3. **Build le frontend React + GSAP embarqué**  
   ```bash
   npm run build
   ```
4. **Watch pour dev UI React**  
   ```bash
   npm run watch
   ```
5. **Lance ou debug l’extension dans VS Code**  
   - Ouvre ce dossier dans VS Code
   - F5 (ou run "Extension" config debug)
   - Palette de commandes → "Ouvrir GSAP Animation Studio"

---

## 🟩 Utilisation & test GSAP local

- Le composant Canvas propose une animation GSAP locale (aucun CDN), preuve immédiate du build pro.
- À chaque éditeur/preview : GSAP 100% local, pilotable live par la Timeline (architecture extensible).

---

## 🗃️ Architecture et code (Webflow-like)

- **Point d’entrée frontend :** `src/webview/index.tsx`
- **Composant principal :** `App.tsx`
- **Timeline (modèle Webflow) :** `components/Timeline.tsx`
- **Layer manager :** `components/LayerList.tsx`
- **Panneau propriétés :** `components/PropertiesPanel.tsx`
- **Preview (Canvas) :** `components/Canvas.tsx`
- **Messaging VS Code :** `utils/vscodeMessaging.ts`

> 👉 Chaque brique est prête à être étendue : position, easing, drag-drop keyframe, zoom, multi-layer...

---

## 🛣️ Roadmap “Timeline Webflow-like”

Fonctionnalités visées (en cours/prochainement) :
- Drag & drop horizontal des keyframes/intervalles
- Zoom & scroll horizontal
- Ajout/suppression layers
- Sélection multiple, group editing
- Easing, courbes custom
- Undo/Redo
- Preview live synchronisé (scrub, play/pause)
- Timeline scalable (layer folders/groups, nesting si besoin)
- Import/export JSON/YAML projet
- Sauvegarde locale disque (via messaging extension)
- Logger & tests e2e

---

## 👨‍💻 Contribution

- Fork/branch = welcome !
- Ajoute tes briques dans tout le dossier webview/components/, plug & play
- Respecte l’architecture messaging pour tout échange front <=> VS Code
- Clear code: typage TS, pro, documentation & exemples

---

## 🛡️ Sécurité/Déploiement

- Aucun bundle CDN/externe, tout est packagé (GSAP local).
- Packaging facile VSIX :
    ```bash
    npm run package
    ```
- License : MIT

---

> Pour toute suggestion, bug ou PR, utilise les issues GitHub ou la contrib directe !

🎉 Crée ton “Webflow” GSAP pour VS Code – projet ouvert, pro, et documenté 🚀
