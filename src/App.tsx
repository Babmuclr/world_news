import React from "react";
import "./index.css";

// ここで他のコンポーネントやスタイルシートをインポートできます
// import AnotherComponent from './components/AnotherComponent';
// import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
      </header>
      <main>
        <p>This is a simple React application using TypeScript.</p>
        {/* ここで他のコンポーネントをレンダリングできます */}
        {/* <AnotherComponent /> */}
      </main>
    </div>
  );
};

export default App;
