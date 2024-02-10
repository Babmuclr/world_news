import React from "react";
import "./index.css"; // グローバルスタイルシート（必要に応じて）
import App from "./App"; // App コンポーネントのインポート

// React 18以降の新しいルートAPIを使用している場合
import { createRoot } from "react-dom/client";

// DOMにAppコンポーネントをレンダリング
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!); // 'rootElement!' は rootElement が null でないことを確認するための TypeScript の非 null アサーション演算子です

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
