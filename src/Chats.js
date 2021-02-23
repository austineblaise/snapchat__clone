import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Chats.css";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "./firebase";
import Chat from "./Chat";
import { selectUser } from "./features/appSlice";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { useHistory } from "react-router";
import { resetCameraImage } from "./features/cameraSlice";

function Chats() {
	const [posts, setPosts] = useState([]);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const takeSnap = () => {
		dispatch(resetCameraImage())
		history.push("/");
	};

	return (
		<div className="chats">
			<div className="chats__header">
				<Avatar
					src={user.profilePic}
					onClick={() => auth.signOut()}
					className="chats__avatar"
				/>
				<div className="chats__search">
					<SearchIcon className="chats__chatIcon"/>
					<input placeholder="Friends" type="text" />
				</div>

				<ChatBubbleIcon className="chats__chatIcon" />
			</div>

			<div className="chats__posts">
				{posts.map(
					({
						id,
						data: { profilePic, username, timestamp, imageUrl, read },
					}) => (
						<Chat
							key={id}
							id={id}
							username={username}
							timestamp={timestamp}
							imageUrl={imageUrl}
							read={read}
							profilePic={profilePic}
						/>
					)
				)}
			</div>

			<RadioButtonCheckedIcon
				className="chats__takePicIcon"
				onClick={takeSnap}
				fontSize="large"
			/>
		</div>
	);
}

export default Chats;
