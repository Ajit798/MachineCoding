import React from 'react';

const mockData = [
	{
		type: 'multiple',
		difficulty: 'easy',
		category: 'General Knowledge',
		question: 'Earth is located in which galaxy?',
		correct_answer: 'The Milky Way Galaxy',
		incorrect_answers: ['The Mars Galaxy', 'The Galaxy Note', 'The Black Hole'],
	},
	{
		type: 'multiple',
		difficulty: 'easy',
		category: 'General Knowledge',
		question: 'How tall is the Burj Khalifa?',
		correct_answer: '2,722 ft',
		incorrect_answers: ['2,717 ft', '2,546 ft', '3,024 ft'],
	},
	{
		type: 'multiple',
		difficulty: 'easy',
		category: 'General Knowledge',
		question: 'What zodiac sign is represented by a pair of scales?',
		correct_answer: 'Libra',
		incorrect_answers: ['Aries', 'Capricorn', 'Sagittarius'],
	},
	{
		type: 'multiple',
		difficulty: 'easy',
		category: 'General Knowledge',
		question: 'Waluigi&#039;s first appearance was in what game?',
		correct_answer: 'Mario Tennis 64 (N64)',
		incorrect_answers: [
			'Wario Land: Super Mario Land 3',
			'Mario Party (N64)',
			'Super Smash Bros. Ultimate',
		],
	},
	{
		type: 'multiple',
		difficulty: 'easy',
		category: 'General Knowledge',
		question: 'Red Vines is a brand of what type of candy?',
		correct_answer: 'Licorice',
		incorrect_answers: ['Lollipop', 'Chocolate', 'Bubblegum'],
	},
	{
		type: 'multiple',
		difficulty: 'easy',
		category: 'General Knowledge',
		question:
			'The likeness of which president is featured on the rare $2 bill of USA currency?',
		correct_answer: 'Thomas Jefferson',
		incorrect_answers: [
			'Martin Van Buren',
			'Ulysses Grant',
			'John Quincy Adams',
		],
	},
	{
		type: 'multiple',
		difficulty: 'easy',
		category: 'General Knowledge',
		question: 'Which of the following is not an Ivy League University?',
		correct_answer: 'Stanford',
		incorrect_answers: ['University of Pennsylvania', 'Harvard', 'Princeton'],
	},
	{
		type: 'multiple',
		difficulty: 'easy',
		category: 'General Knowledge',
		question:
			'According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?',
		correct_answer: 'Plum',
		incorrect_answers: ['Apple', 'Peach', 'Pear'],
	},
	{
		type: 'multiple',
		difficulty: 'easy',
		category: 'General Knowledge',
		question: 'Which restaurant&#039;s mascot is a clown?',
		correct_answer: 'McDonald&#039;s',
		incorrect_answers: ['Whataburger', 'Burger King', 'Sonic'],
	},
	{
		type: 'multiple',
		difficulty: 'easy',
		category: 'General Knowledge',
		question: 'What does a funambulist walk on?',
		correct_answer: 'A Tight Rope',
		incorrect_answers: ['Broken Glass', 'Balls', 'The Moon'],
	},
];

export default function QuizApp() {
	const [quizData, setQuizData] = React.useState(mockData);
	const [count, setCount] = React.useState(0);
	const [attemptedAnswer, setAttemptedAnswer] = React.useState([]);
	const [scoreSummary, setScoreSummary] = React.useState({
		unAnswered: 0,
		correct: 0,
		incorrect: 0,
		isSubmitted: false,
	});

	React.useEffect(() => {
		if (quizData.length > 0) {
			const mappedData = quizData.map((ele) => ({
				question: '',
				selectedAnswer: '',
				unAnswered: true,
				initialColor: false,
			}));
			setAttemptedAnswer(mappedData);
		}
	}, [quizData]);

	const handleOptionSelect = (question, answer, ind) => {
		const updatedData = [...attemptedAnswer];
		updatedData[ind].selectedAnswer = answer;
		updatedData[ind].question = question;
		updatedData[ind].unAnswered = false;
		updatedData[ind].initialColor = true;
		setAttemptedAnswer(updatedData);
		if (count < quizData.length - 1) {
			setCount(count + 1);
		}
	};

	const handleSubmit = () => {
		const reducedOutput = attemptedAnswer.reduce(
			(acc, curr) => {
				if (curr.unAnswered) {
					acc['unAnswered'] += 1;
				} else {
					const findAnswer = quizData.find(
						(e) => e.correct_answer === curr.selectedAnswer
					);
					if (findAnswer) {
						acc['correct'] += 1;
					}
					acc['incorrect'] += 1;
				}
				return acc;
			},
			{
				unAnswered: 0,
				correct: 0,
				incorrect: 0,
			}
		);
		console.log('reduced', reducedOutput);
		setScoreSummary({ ...reducedOutput, isSubmitted: true });
	};

	const handleColor = (answer) => {
		if (!answer.initialColor) return '';
		if (answer.initialColor && answer.unAnswered) return 'red';

		return 'green';
	};

	return (
		<div style={{ marginLeft: '30%', display: 'flex', alignItems: 'center' }}>
			<div>
				{quizData?.map((quizItem, index) => {
					return index === count ? (
						<div key={index}>
							<h2>Question -{index + 1}</h2>
							<h2>{quizItem.question}</h2>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: '20px',
								}}
							>
								{[...quizItem.incorrect_answers, quizItem.correct_answer].map(
									(option, ind) => {
										return (
											<div
												style={{
													backgroundColor: 'white',

													width: '70%',
													padding: '5px',
													color: 'black',
													border: '1px solid black',
													cursor: 'pointer',
												}}
												key={ind}
												onClick={() =>
													handleOptionSelect(quizItem.question, option, index)
												}
											>
												{option}
											</div>
										);
									}
								)}
							</div>
						</div>
					) : null;
				})}

				<div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
					<button
						onClick={() => {
							if (count > 0) {
								setCount(count - 1);
							}
						}}
						disabled={count === 0}
					>
						Previous
					</button>
					{count === quizData.length - 1 ? (
						<button onClick={handleSubmit}>Submit</button>
					) : (
						<button
							onClick={() => {
								const data = [...attemptedAnswer];
								data[count].initialColor = true;
								setAttemptedAnswer(data);
								if (count < quizData.length - 1) {
									setCount(count + 1);
								}
							}}
							disabled={count === quizData.length - 1}
						>
							Next
						</button>
					)}
				</div>
			</div>
			<div style={{ display: 'flex', gap: '10px' }}>
				{attemptedAnswer.map((ele, idx) => {
					return (
						<div
							key={idx}
							style={{
								width: '50px',
								height: '50px',
								borderRadius: '50%',
								border: '1px solid black',
								backgroundColor: handleColor(ele),
							}}
						/>
					);
				})}
			</div>
			{scoreSummary.isSubmitted ? (
				<div>
					<h2>Incorrect Answers-{scoreSummary.incorrect}</h2>
					<h2>Correct Answers-{scoreSummary.correct}</h2>
					<h2>UnAnswered-{scoreSummary.unAnswered}</h2>
				</div>
			) : null}
		</div>
	);
}
