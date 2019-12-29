import React from 'react';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import UserAvatar from "../UserAvatar";

const MessageItem = ({msg, onlineUsers}) => {
	const {user, message, date} = msg;
	const {email} = user;
	const msgDate = new Date(date);

	const idx = onlineUsers.findIndex((item) => item.userId === user._id);

	const dateStr = `${msgDate.getFullYear()}-${msgDate.getMonth() < 10 ? `0${msgDate.getMonth()}` : msgDate.getMonth()}-${msgDate.getDate() < 10 ? `0${msgDate.getDate()}` : msgDate.getDate()}, 
	${msgDate.getHours() < 10 ? `0${msgDate.getHours()}` : msgDate.getHours()}:${msgDate.getMinutes() < 10 ? `0${msgDate.getMinutes()}` : msgDate.getMinutes()}:${msgDate.getSeconds() < 10 ? `0${msgDate.getSeconds()}` : msgDate.getSeconds()}`;
	return (
		<>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<UserAvatar letters={`${email[0]}${email[1]}`} isOnline={idx !== -1}/>
				</ListItemAvatar>
				<ListItemText
					primary={
						<div style={{display:"flex", justifyContent:"space-between"}}>
							<Typography component="span" variant="body2" color="textPrimary">
								{email}
							</Typography>
							<Typography component="span" variant="body2" color="textPrimary">
								{dateStr}
							</Typography>

						</div>
					}
					secondary={
						<React.Fragment>
							<Typography
								component="span"
								variant="body2"
								color="textPrimary"
							>

							</Typography>
							{message}
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
		</>
	);
};

export default MessageItem;
