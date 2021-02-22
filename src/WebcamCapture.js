import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUnCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useHistory } from "react-router-dom";
import "./WebcamCapture.css";

const videoConstraints = {
	width: 250,
	height: 400,
	facingMode: "user",
};

function WebcamCapture() {
	const webcamRef = useRef(null);
	const dispatch = useDispatch();
	const history = useHistory();
	// const [image, setImage] = useState(null);

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		dispatch(setCameraImage(imageSrc));
		history.push("/preview");
		// console.log(imageSrc);
		// setImage(imageSrc)
	}, [webcamRef]);

	return (
		<div className="webcamCapture">
			<Webcam
				audio={false}
				height={videoConstraints.height}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				width={videoConstraints.width}
				videoConstraints={videoConstraints}
			/>
			<RadioButtonUnCheckedIcon
				className="webcamCapture__button"
				onClick={capture}
				fontSize="large"
			/>

			{/* <img src={image} alt="" /> */}
		</div>
	);
}

export default WebcamCapture;
