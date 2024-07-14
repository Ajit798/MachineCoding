import React from 'react';
import './styles.css';
import { AvatarList } from './components/AvatarList';
import { mockData } from './mocks/avatarData';

export const AvatarPicker = () => {
	const [selectedAvatar, setSelectedAvatar] = React.useState(mockData[0]);
	const [isAvatarListVisible, setIsAvatarListVisible] = React.useState(null);
	const ref = React.useRef(null);

	React.useEffect(() => {
		window.addEventListener('click', (event) => {
			if (ref.current) {
				if (!event.target.classList.contains(ref.current.className)) {
					setIsAvatarListVisible(false);
				} else {
					setIsAvatarListVisible(true);
				}
			}
		});

		return () => {
			window.removeEventListener('click', () => {});
		};
	}, [isAvatarListVisible]);

	const handleAvatarClick = (avatarDetails) => {
		setSelectedAvatar(avatarDetails);
	};

	return (
		<div className="main-container">
			<img
				src={selectedAvatar?.url}
				alt="name"
				height="100px"
				width="100px"
				style={{ cursor: 'pointer' }}
				className="avatar-default"
				onClick={(event) => {
					event.stopPropagation();
					setIsAvatarListVisible((prev) => !prev);
				}}
				ref={ref}
			/>

			<AvatarList
				avatarList={mockData}
				handleAvatarClick={handleAvatarClick}
				animationClassName={isAvatarListVisible ? 'visible' : ''}
				selectedAvatar={selectedAvatar}
			/>
		</div>
	);
};
