import './App.css';
import React from 'react';
import InputChip from './components/input';
import Test from './components/test';
import Button from './components/Button';

function App() {
	const title = 'AJit';
	return (
		<>
			<Test as="div">
				<Button onClick={() => console.log('hey')} title={title} />
			</Test>
		</>
	);
}

export default App;
