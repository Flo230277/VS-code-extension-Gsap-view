# VS Code Extension GSAP Studio

Cette extension permet de créer et prévisualiser visuellement des animations GSAP dans un éditeur intégré à Visual Studio Code.

## Fonctionnalités principales
- Éditeur visuel drag-and-drop pour créer des animations GSAP
- Support des plugins GSAP : ScrollTrigger, Draggable, MorphSVG, MotionPath, etc.
- Exportation des animations en HTML et JavaScript
- Interface React embarquée dans une Webview

## Structure du projet

```
vscode-gsap-studio/
├── .vscode/
│   └── launch.json
├── src/
│   ├── extension.ts
│   ├── webview/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── components/
│   │   │   └── Editor.tsx
│   │   └── utils/
│   │       └── export.ts
├── package.json
├── webpack.config.js
├── tsconfig.json
├── README.md
└── out/
```

## Installation, build et lancement

1. Installer les dépendances :
    ```bash
    npm install
    ```
2. Compiler la webview React :
    ```bash
    npm run build
    ```
3. Depuis VS Code, lancer la commande `GSAP Studio: Open Animation Editor`.

## Ajouter/modifier du code React côté webview
- Le point d’entrée React est `src/webview/App.tsx`.
- Les composants personnalisés sont placés dans `src/webview/components/`.
- Les outils d’export dans `src/webview/utils/`.

## Développement de l’éditeur React
Le composant `Editor` propose une base pour jouer une animation simple. Étends-le selon tes besoins pour avoir le drag-and-drop, la timeline ou d’autres contrôles.

## Export HTML/JS
La fonction d’export `exportHtmlJs` génère un extrait HTML/JS minimal pour l’animation GSAP. À enrichir selon la logique de ton éditeur.

---

Pour toute extension, modifie simplement les fichiers dans `src/webview/`, adapte le Webpack ou les composants et relance la commande de build.
