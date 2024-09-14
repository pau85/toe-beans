import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './app/App';

const root =
  document.getElementById('root');

if (root) {
  const reactRoot = createRoot(root);

  reactRoot.render(
    <React.StrictMode>
      <div className="project-container">
        <App />
      </div>
    </React.StrictMode>
  );
}
