import React, {useEffect, useState} from 'react';
import List from '@material-ui/core/List';
import MessageItem from "../MessageItem";
import {connect} from "react-redux";
import {getMessages} from '../../store/actions/message'
import Skeleton from "@material-ui/lab/Skeleton";
import SkeletonMessage from "../SkeletonMessage";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";

const MessageList = (props) => {

	const {getMessages, messages} = props;
	const {items, total, page} = messages;
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		(async () => {
			await getMessages();
			setIsLoading(false);
		})()
	},[]);

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
					) : <ListItem>No messages....</ListItem>}

					{items.length > 0 && items.map((msg) => {
						return <MessageItem key={msg._id} msg={msg}/>
					})}
				</>
			)}

		</List>
	);
};

const mapStateToProps = ({messages}) => {
	return {
		messages
	}
}

export default connect(
	mapStateToProps,
	{getMessages}
)(MessageList);
