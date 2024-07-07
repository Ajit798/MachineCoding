import React, { useState } from 'react';
import './style.css';

export const TrelloBoard = () => {
	const [inputTaskValue, setInputTaskValue] = useState('');
	const [pendingTasks, setPendingTasks] = useState([]);
	const [inProgressTasks, setInProgressTasks] = useState([]);
	const [doneTasks, setDoneTasks] = useState([]);

	const taskStatus = {
		pending: 'Pending',
		inProgress: 'InProgress',
		done: 'Done',
	};

	const handleInputChange = (event) => {
		setInputTaskValue(event.target.value);
	};

	const addTask = () => {
		setPendingTasks([...pendingTasks, { taskName: inputTaskValue }]);
		setInputTaskValue('');
	};

	const handleDragStart = (event, item) => {
		event.dataTransfer.setData('text/plain', item.taskName);
		event.dataTransfer.dropEffect = 'move';
	};

	const handleDrop = (event, taskStatus) => {
		const itemData = event.dataTransfer.getData('text/plain');
		switch (taskStatus) {
			case 'Pending':
				setPendingTasks((prevData) => [...prevData, { taskName: itemData }]);
				setInProgressTasks((prevData) =>
					prevData.filter((item) => item.taskName !== itemData)
				);
				setDoneTasks((prevData) =>
					prevData.filter((item) => item.taskName !== itemData)
				);
				break;
			case 'InProgress':
				setInProgressTasks((prevData) => [...prevData, { taskName: itemData }]);
				setPendingTasks((prevData) =>
					prevData.filter((item) => item.taskName !== itemData)
				);
				setDoneTasks((prevData) =>
					prevData.filter((item) => item.taskName !== itemData)
				);
				break;
			case 'Done':
				setDoneTasks((prevData) => [...prevData, { taskName: itemData }]);
				setInProgressTasks((prevData) =>
					prevData.filter((item) => item.taskName !== itemData)
				);
				setPendingTasks((prevData) =>
					prevData.filter((item) => item.taskName !== itemData)
				);
				break;
			default:
				return null;
		}
	};
	return (
		<main className="main__container">
			<div>
				<h2 className="main__container-title">Trello Board</h2>
				<input
					name="task-input"
					className="main__container-addTask"
					onChange={handleInputChange}
					value={inputTaskValue}
				/>
				<button className="main__container-cta" onClick={addTask}>
					Add Task
				</button>
			</div>

			<div className="progress__container">
				<div
					className="tasks tasks-pending"
					onDrop={(event) => handleDrop(event, taskStatus.pending)}
					onDragOver={(event) => event.preventDefault()}
				>
					<h2 className="tasks__pending-title">Pending Tasks</h2>
					<div className="tasksList">
						{pendingTasks.map((item) => (
							<div
								key={item?.taskName}
								className="task-item"
								draggable
								onDragStart={(event) => handleDragStart(event, item)}
							>
								{item.taskName}
							</div>
						))}
					</div>
				</div>
				<div
					className="tasks tasks-progress"
					onDrop={(event) => handleDrop(event, taskStatus.inProgress)}
					onDragOver={(event) => event.preventDefault()}
				>
					<h2 className="tasks__progress-title">In-Progress</h2>
					<div className="tasksList">
						{inProgressTasks.map((item) => (
							<div
								key={item.taskName}
								className="task-item progress"
								draggable
								onDragStart={(event) => handleDragStart(event, item)}
							>
								{item.taskName}
							</div>
						))}
					</div>
				</div>
				<div
					className="tasks tasks-done"
					onDrop={(event) => handleDrop(event, taskStatus.done)}
					onDragOver={(event) => event.preventDefault()}
				>
					<h2 className="tasks__done-title">Done</h2>
					<div className="tasksList">
						{doneTasks.map((item) => (
							<div
								key={item.taskName}
								className="task-item done"
								draggable
								onDragStart={(event) => handleDragStart(event, item)}
							>
								{item.taskName}
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};
