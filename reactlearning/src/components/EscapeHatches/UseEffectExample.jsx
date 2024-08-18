import { useEffect, useRef, useState } from "react";
import propTypes from "prop-types";
//video player function
function VideoPlayer({ isPlaying, src }) {
  const videoTag = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      videoTag.current.play();
    } else {
      videoTag.current.pause();
    }
  }, [isPlaying]);
  return <video src={src} ref={videoTag} loop></video>;
}
VideoPlayer.propTypes = {
  isPlaying: propTypes.bool,
  src: propTypes.string,
};
//main function
function UseEffectExample() {
  const [play, setPlay] = useState(false);
  let src =
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

  return (
    <div>
      <h3>UseEffect Example</h3>
      <VideoPlayer src={src} isPlaying={play} />
      <button
        onClick={() => {
          play ? setPlay(false) : setPlay(true);
        }}
      >
        play
      </button>
    </div>
  );
}

export default UseEffectExample;
