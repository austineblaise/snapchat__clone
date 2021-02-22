import { Avatar } from "@material-ui/core";
import  StopRoundedIcon  from "@material-ui/icons/StopRounded";
import React from "react";

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
	return (
		<div>
			<Avatar src={profilePic} />
			<div className="chat__info">
				<h4>{username}</h4>
				<p>Tap to view - {new Date(timestamp?.toDate()).toUTCString()}</p>
			</div>
            {!read && <StopRoundedIcon className="chat__readIcon"/>}
		</div>
	);
}

export default Chat;
