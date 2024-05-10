import React from 'react';

export default function ConnectFour() {
	const [gameData, setGameData] = React.useState([]);
	const [playerTurn, setPlayerTurn] = React.useState(true);
	const [playerWon, setPlayerWon] = React.useState('');

	React.useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		const result = [];
		for (let i = 0; i < 7; i++) {
			result.push(Array(6).fill(null));
		}
		setGameData(result);
	};

	const handleDrop = (columnIndex) => {
		const resultData = [...gameData];
		const findLastIndex = resultData[columnIndex].findLastIndex(
			(ele) => ele === null
		);
		if (findLastIndex !== -1) {
			resultData[columnIndex][findLastIndex] = playerTurn ? 1 : 2;
		}

		setPlayerTurn((prevTurn) => !prevTurn);
		setGameData(resultData);
		handleWinner();
	};

	const handleWinner = () => {
		let count1;
		for (let i = 0; i < gameData.length; i++) {
			const data = gameData[i];
			for (let j = 0; j < data.length; j++) {
				if (data[j] === 1) {
					if (data[j + 1] === 1 && data[j + 2] === 1 && data[j + 3] === 1) {
						count1 = 'player1';
					}
					if (gameData[i][j] === 1) {
						if (
							gameData?.[i + 1]?.[j] === 1 &&
							gameData?.[i + 2]?.[j] === 1 &&
							gameData?.[i + 3]?.[j] === 1
						) {
							count1 = 'player1';
						}
					}
				}
				if (data[j] === 2) {
					if (data[j + 1] === 2 && data[j + 2] === 2 && data[j + 3] === 2) {
						count1 = 'player2';
					}
					if (gameData[i][j] === 2) {
						if (
							gameData?.[i + 1]?.[j] === 2 &&
							gameData?.[i + 2]?.[j] === 2 &&
							gameData?.[i + 3]?.[j] === 2
						) {
							count1 = 'player2';
						}
					}
				}
			}
		}
		setPlayerWon(count1);
	};

	if (playerWon) {
		return (
			<div>
				<h2>Congratulations {playerWon} won the game</h2>
				<button
					onClick={() => {
						setPlayerWon('');
						getData();
						setPlayerTurn(true);
					}}
				>
					PlayAgain
				</button>
			</div>
		);
	}

	return (
		<div
			style={{ flexDirection: 'column', display: 'flex', alignItems: 'center' }}
		>
			<h1>Connect Four games</h1>
			<div style={{ display: 'flex' }}>
				{gameData.map((row, rowIndex) => (
					<div
						key={rowIndex}
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						<button onClick={() => handleDrop(rowIndex)}>Drop</button>
						{row.map((point, columnIndex) => (
							<div
								key={columnIndex}
								style={{
									width: '50px',
									height: '50px',
									border: '1px solid black',
									backgroundColor: 'white',
								}}
							>
								{point !== null ? (point === 1 ? '✅' : '❌') : null}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
