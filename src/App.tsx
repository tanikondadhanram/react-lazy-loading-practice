import React, { Suspense, lazy } from 'react';

import './App.css';

const SampleComponent = lazy(() => import('./components/SampleComp'));

function App() {
	return (
		<Suspense fallback={<div>loading....</div>}>
			<SampleComponent />
		</Suspense>
	);
}

const greetingMessage = 'welcome';

export default App;
