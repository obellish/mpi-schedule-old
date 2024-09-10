import { type FC } from 'react';

export const App: FC = () => {
	return <div>Hello, world!</div>;
};

App.whyDidYouRender = true;

App.displayName = 'App';

export default App;
