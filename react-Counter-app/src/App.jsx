import { useState } from 'react';

import './App.css';

function App() {
	const [count, setCount] = useState(0);
	function addCount() {
		setCount(count + 1);
	}
	function removeCount() {
		setCount(count - 1);
	}
	return (
		<>
			<h1>Welcome to My React Counter</h1>
			<div className='card'>
				<h3>Count is: {count}</h3>
				<button onClick={addCount}>Add Count</button>
				<button onClick={removeCount}>remove Count</button>
			</div>
		</>
	);
}

export default App;
