import React from 'react';
import './styles.css';

export default function Kanban() {
	const [inputValue, setInputValue] = React.useState('');
	const [tasks, setTasks] = React.useState([]);
	const ref = React.useRef(0);

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleEnter = (event) => {
		if (event.which === 13) {
			const task = [...tasks];
			task.push({
				name: event.target.value,
				id: `tasks${ref.current}`,
			});
			setTasks(task);
			setInputValue('');
			ref.current += 1;
		}
	};

	const handleDragStart = (event) => {
		event.dataTransfer.setData('text/plain', event.target.id);
	};

	const handleDelete = (e) => {
		const targetId = e.target.id;
		const element = document.getElementById(e.target.id);

		const filteredData = [...tasks].filter((ele) => ele.id !== targetId);

		document
			.getElementById(element.closest('div .todo-container').id)
			.removeChild(element.closest('div div'));
		// setTasks(filteredData);
	};
	console.log(tasks);

	return (
		<>
			<div className="input-box">
				<input
					className="input"
					name="task-input"
					onChange={handleChange}
					onKeyDown={handleEnter}
					value={inputValue}
				/>
			</div>
			<div className="main-container">
				<div
					id="todo"
					className="todo-container"
					onDrop={(event) => {
						event.preventDefault();
						const element = event.dataTransfer.getData('text/plain');
						document
							.getElementById('todo')
							.appendChild(document.getElementById(element));
					}}
					onDragOver={(event) => event.preventDefault()}
				>
					<h2>TODO</h2>
					{tasks.map((task, ind) => {
						return (
							<div
								draggable
								key={`task${ind}`}
								style={{ display: 'flex', gap: '5px' }}
								id={`task${ind}`}
								onDragStart={handleDragStart}
							>
								<div className="drag-card">{task.name}</div>
								<button
									id={`tasks${ind}`}
									onClick={(event) => handleDelete(event, ind)}
								>
									Delete
								</button>
							</div>
						);
					})}
				</div>

				<div
					id="in-progress"
					className="todo-container"
					onDragOver={(event) => event.preventDefault()}
					onDrop={(event) => {
						event.preventDefault();

						const element = event.dataTransfer.getData('text/plain');
						document
							.getElementById('in-progress')
							.appendChild(document.getElementById(element));
					}}
				>
					<h3>IN-PROGRESS</h3>
				</div>

				<div
					id="done"
					className="todo-container"
					onDragOver={(event) => event.preventDefault()}
					onDrop={(event) => {
						event.preventDefault();
						const element = event.dataTransfer.getData('text/plain');
						document
							.getElementById('done')
							.appendChild(document.getElementById(element));
					}}
				>
					<h3>DONE</h3>
				</div>
			</div>
		</>
	);
}
