import React, { forwardRef } from 'react';

const Chip = forwardRef(({ user, handleRemove }, ref) => {
	return (
		<div
			style={{
				width: '100%',
				height: '20px',
				backgroundColor: 'grey',
				borderRadius: '12px',
				padding: '5px',
				margin: '5px',
				textAlign: 'center',
				fontSize: '15px',
				fontWeight: 'bold',
				display: 'flex',
				justifyContent: 'space-evenly',
			}}
			ref={ref}
			id={`Chip ${user?.id}`}
		>
			{user?.firstName}
			<span onClick={() => handleRemove(user)}>❌</span>
		</div>
	);
});

export default function InputChip() {
	const [usersData, setUsersData] = React.useState();
	const [allUsersData, setAllUsersData] = React.useState([]);
	const [isFocus, setIsFocus] = React.useState(false);
	const [chipData, setChipData] = React.useState([]);
	const inputRefs = React.useRef([]);
	const count = React.useRef(0);

	React.useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch('https://dummyjson.com/users');
			const responseData = await response.json();
			setUsersData(responseData?.users?.slice(0, 10));
			setAllUsersData(responseData?.users?.slice(0, 10));
		} catch (err) {
			console.log(err);
		}
	};

	const handleUserClick = (userInfo) => {
		setChipData((prevData) => {
			const updatedData = [...prevData];
			updatedData.push(userInfo);
			return updatedData;
		});
		setUsersData((prevData) => {
			return prevData.filter((user) => user.id !== userInfo?.id);
		});
	};

	const handleRemove = (userInfo) => {
		setChipData((prevData) => {
			return prevData.filter((data) => data.id !== userInfo.id);
		});
		setUsersData((prevData) => {
			const updatedData = [...prevData];
			updatedData.push(userInfo);
			return updatedData;
		});
	};

	const handleTextChange = (event) => {
		if (event.target.value === '') {
			const formattedData = allUsersData.filter(
				(user) => chipData.findIndex((chip) => chip.id === user.id) === -1
			);
			setUsersData(formattedData);
		}
		setUsersData((prevData) => {
			return prevData.filter((data) =>
				data.firstName.toLowerCase().includes(event.target.value.toLowerCase())
			);
		});
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: '60px',
			}}
		>
			<div style={{ display: 'flex', gap: '3px' }}>
				{chipData.map((user, userIndex) => (
					<Chip
						ref={(input) => (inputRefs.current[userIndex] = input)}
						key={user.id}
						user={user}
						handleRemove={handleRemove}
					/>
				))}
			</div>
			<input
				type="text"
				style={{
					width: 'fit-content',
					borderTop: 'none',
					borderLeft: 'none',
					borderRight: 'none',
					minWidth: '50%',
					textDecoration: 'none',
				}}
				onFocus={() => setIsFocus(true)}
				onChange={handleTextChange}
				onKeyDown={(event) => {
					if (event.code === 'Backspace') {
						console.log(inputRefs);

						count.current += 1;

						if (count.current === 2) {
							setChipData((prevData) => {
								return prevData.filter(
									(_, index) => index !== prevData.length - 1
								);
							});

							count.current = 0;
						}
						inputRefs.current[
							inputRefs.current.length - 1
						].style.backgroundColor = 'red';
					}
				}}
			/>

			{isFocus ? (
				<div
					style={{
						width: '50%',
						border: '1px solid black',
						height: 'min-content',
						marginTop: '2px',
						borderRadius: '10px',
						textAlign: 'center',
						scrollBehavior: 'smooth',
					}}
				>
					{usersData.map((user, userIndex) => (
						<div key={user?.id} onClick={() => handleUserClick(user)}>
							<h3>{user?.firstName}</h3>
							{userIndex !== usersData.length - 1 ? (
								<div style={{ borderBottom: '1px solid black' }} />
							) : null}
						</div>
					))}
				</div>
			) : null}
		</div>
	);
}
