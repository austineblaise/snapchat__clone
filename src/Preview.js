import React from "react";
import { useSelector } from "react-redux";
import {selectCameraImage} from "./features/cameraSlice"
import "./Preview.css";

function Preview() {
	const cameraImage = useSelector(selectCameraImage);

	return (
		<div className="preview">
            <h2>This is a beautiful preview page
                
            </h2>
			<img src={cameraImage} alt="" />
		</div>
	);
}

export default Preview;
