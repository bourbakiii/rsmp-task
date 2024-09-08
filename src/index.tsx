import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

async function enableMocking() {
    const {worker} = await import('./mocks/browser');
    return worker.start();
}


enableMocking().then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
});