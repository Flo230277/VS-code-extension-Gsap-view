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

      // Injection du contenu HTML/JS dans le panneau (GSAP chargé par Webpack/local, pas de CDN)
      panel.webview.html = getWebviewContent(panel);

      // === MESSAGING BIDIRECTIONNEL WEBVIEW <=> EXTENSION ===
      panel.webview.onDidReceiveMessage(
        async message => {
          switch (message.type) {
            case 'EXPORT_PROJECT': {
              // Logique d'export, par exemple écrire sur le disque
              log('Export de projet demandé');
              vscode.window.showInformationMessage('Export projet (mock): ' + JSON.stringify(message.payload));
              break;
            }
            case 'IMPORT_PROJECT': {
              // Logique d'import, par exemple ouvrir un fichier, renvoyer à la webview
              log('Import de projet demandé');
              const uris = await vscode.window.showOpenDialog({ canSelectMany: false, filters: { 'JSON': ['json'] } });
              if (uris && uris.length > 0) {
                const fileUri = uris[0];
                const fileData = await vscode.workspace.fs.readFile(fileUri);
                const json = fileData.toString();
                panel.webview.postMessage({ type: 'IMPORT_PROJECT_DATA', payload: json });
              }
              break;
            }
            case 'LOG': {
              log(message.payload);
              break;
            }
            default:
              log('Message reçu inconnu: ' + message.type);
          }
        },
        undefined,
        context.subscriptions
      );
    })
  );
}

/**
 * Génère le contenu HTML affiché dans la WebView.
 * Injection sobre : GSAP importé localement par Webpack (import { gsap } from "gsap") dans React, pas de <script cdn>
 */
function getWebviewContent(panel: vscode.WebviewPanel): string {
  // Pour la sécurité, on peut générer un nonce unique et l'utiliser pour le bundle (optionnel)
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GSAP Animation Studio</title>
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
 * Logger central VSCode
 */
function log(msg: string) {
  vscode.window.showInformationMessage(`[GSAP Studio] ${msg}`);
}

/**
 * Désactivation
 */
export function deactivate() {
  // Rien à nettoyer pour l'instant
}
