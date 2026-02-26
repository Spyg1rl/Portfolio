import React from 'react';
import ReactDOM from 'react-dom/client';
import { TamaguiProvider } from '@tamagui/core';
import App from './App';
import tamaguiConfig from './tamagui.config';
import 'boxicons/css/boxicons.min.css';
import '../assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TamaguiProvider config={tamaguiConfig}>
      <App />
    </TamaguiProvider>
  </React.StrictMode>
);
