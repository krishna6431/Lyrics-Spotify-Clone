import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  if (isPlaying && activeSong.title === song.title) {
    return (
      <FaPauseCircle
        size={35}
        className="text-gray-300"
        onClick={handlePause}
      ></FaPauseCircle>
    );
  } else {
    return (
      <FaPlayCircle
        size={35}
        className="text-gray-300"
        onClick={handlePlay}
      ></FaPlayCircle>
    );
  }
};

export default PlayPause;
