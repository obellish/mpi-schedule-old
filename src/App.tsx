import { type FC, useState } from 'react';

export const App: FC = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Big List</h1>
			<div>
				<button onClick={() => setCount((c) => c + 1)}>Increase count: {count}</button>
			</div>
		</div>
	);
};

App.whyDidYouRender = true;

App.displayName = 'App';

export default App;
