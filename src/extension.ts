// Import des modules VS Code nécessaires
import * as vscode from 'vscode';

/**
 * Cette fonction est appelée lorsque l'extension est activée.
 * Elle enregistre une commande permettant d'ouvrir l'éditeur GSAP.
 */
export function activate(context: vscode.ExtensionContext) {
  // Commande enregistrée dans le fichier package.json sous "contributes.commands"
  context.subscriptions.push(
    vscode.commands.registerCommand('gsapStudio.openEditor', () => {
      // Création d'un panneau WebView
      const panel = vscode.window.createWebviewPanel(
        'gsapStudio', // Identifiant de WebView
        'GSAP Animation Studio', // Titre de l'onglet
        vscode.ViewColumn.One, // Position de l'affichage
        {
          enableScripts: true, // Permet l'exécution de scripts dans la WebView
          retainContextWhenHidden: true, // Garde le contexte lors du changement d'onglet
        }
      );

      // Injection du contenu HTML/JS dans le panneau
      panel.webview.html = getWebviewContent();
    })
  );
}

/**
 * Cette fonction génère le contenu HTML affiché dans la WebView.
 * Le fichier injecte également le bundle React (compilé via Webpack).
 */
function getWebviewContent(): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GSAP Animation Studio</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        #app {
          display: flex;
          width: 100vw;
          height: 100vh;
        }
      </style>
    </head>
    <body>
      <div id="app"></div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `;
}

/**
 * Cette fonction est appelée lorsque l'extension est désactivée.
 */
export function deactivate() {
  // Nettoyage des ressources si nécessaire
}