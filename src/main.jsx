import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  /* Provider에 저장소를 연결! 
    => 앱에서 저장소 읽을 수 있게 됨 */
  <Provider store={store}>
    <App />
  </Provider>
);
