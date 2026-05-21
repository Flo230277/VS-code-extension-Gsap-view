// Utilitaire messaging VS Code <=> Webview, usage pro import/export

/**
 * Utilisation côté React :
 * import { vscode, onVSCodeMessage } from "../utils/vscodeMessaging";
 * vscode.postMessage({ type: "EXPORT_PROJECT", payload: {...} });
 * onVSCodeMessage((msg) => { ... });
 */

export const vscode = acquireVsCodeApi();

export type VSCodeMsg = {
  type: string;
  payload?: any;
};

export function postVSCodeMessage(type: string, payload?: any) {
  vscode.postMessage({ type, payload });
}

// Abonnement pro à tous les messages reçus de l’extension
export function onVSCodeMessage(cb: (msg: VSCodeMsg) => void) {
  window.addEventListener("message", (event) => {
    const msg = event.data as VSCodeMsg;
    cb(msg);
  });
}
