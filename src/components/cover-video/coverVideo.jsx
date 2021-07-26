import React from "react";
import "./coverVideo.scss";

function CoverVideo(props) {
    return (
        <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={props.video.coverVideoMp4} type="video/mp4"></source>
                    <source src={props.video.coverVideoWebm} type="webm/mp4"></source>
                    Your browser does not support this video.
                </video>
        </div>
    );
}

export default CoverVideo;