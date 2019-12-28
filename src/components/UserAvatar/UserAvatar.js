import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge/Badge";

const UserAvatar = ({letters, isOnline}) => {
	return (
		<Badge
			overlap="circle"
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			badgeContent={isOnline ? <span style={{backgroundColor:"#44b700", width:10, height:10, borderRadius:"50%"}}/> : null}
		>
			<Avatar>{letters ? letters.toUpperCase() : null}</Avatar>
		</Badge>
	);
};

export default UserAvatar;
