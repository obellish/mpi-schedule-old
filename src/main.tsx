import './setup';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.tsx';

const App = React.lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
