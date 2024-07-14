import React from 'react';

export const AvatarList = ({
	avatarList,
	handleAvatarClick,
	animationClassName,
	selectedAvatar,
}) => {
	return (
		<div className={`avatar-list-container ${animationClassName} `}>
			<div className="sub-container">
				{avatarList.map((item) => (
					<img
						key={item.id}
						src={item.url}
						alt="name"
						height="100px"
						width="100px"
						className={`avatar-img ${
							item.id === selectedAvatar.id && 'selected-image'
						}`}
						onClick={(event) => {
							event.stopPropagation();
							handleAvatarClick(item);
						}}
					/>
				))}
			</div>
		</div>
	);
};
