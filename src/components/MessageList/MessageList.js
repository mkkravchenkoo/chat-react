import React, {useEffect, useState} from 'react';
import List from '@material-ui/core/List';
import MessageItem from "../MessageItem";
import {connect} from "react-redux";
import {getMessages} from '../../store/actions/message'
import SkeletonMessage from "../SkeletonMessage";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import io from "socket.io-client";
import axios from "axios";
import {updateOnlineUsers} from "../../store/actions/user";

const MessageList = (props) => {

	const {getMessages, messages, user, updateOnlineUsers} = props;
	const {items, total, page} = messages;
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	const {isAuthenticated, _id, onlineUsers} = user;
	useEffect(() => {
		setIsLoading(true);
		(async () => {
			await getMessages();
			setIsLoading(false);
		})()
	},[]);

	useEffect(() => {

		const socket = io(axios.defaults.baseURL);
		socket.on('connect', function(){
			socket.emit('online user', isAuthenticated ? _id : null);
		});

		socket.on('online users', (data) => {
			updateOnlineUsers(data.online);
		});

	}, [user.isAuthenticated]);

	const loadMore = async () => {
		setIsLoadingMore(true);
		await getMessages(page+1);
		setIsLoadingMore(false)
	}

	return (
		<List>
			{isLoading ? (
				<>
					<SkeletonMessage/>
					<SkeletonMessage/>
					<SkeletonMessage/>
					<SkeletonMessage/>
					<SkeletonMessage/>
				</>
			) : (
				<>
					{(items.length < total) ? (
						<ListItem>
							{isLoadingMore ? <div style={{display: "flex",width: "100%",justifyContent: "center"}}><CircularProgress color="secondary" /></div> : (
								<Button variant="contained"
										color="primary"
										style={{margin:"0 auto"}}
										onClick={() => loadMore()}
								>
									Get older
								</Button>
							)}

						</ListItem>
					) : null}

					{items.length > 0 && items.map((msg) => {
						return <MessageItem key={msg._id} msg={msg} onlineUsers={onlineUsers}/>
					})}
				</>
			)}

		</List>
	);
};

const mapStateToProps = ({messages}) => {
	return {
		messages,
	}
}

export default connect(
	mapStateToProps,
	{getMessages, updateOnlineUsers}
)(MessageList);
