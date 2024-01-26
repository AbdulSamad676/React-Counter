import { useState } from 'react';

import './App.css';

function App() {
	const [count, setCount] = useState(0);
	function addCount() {
		if (count < 20) {
			setCount(count + 1);
		}
	}
	function removeCount() {
		if (count > 0) {
			setCount(count - 1);
		}
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
