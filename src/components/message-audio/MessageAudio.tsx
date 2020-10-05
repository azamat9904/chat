import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import { formatTime } from "../../util/helpers/index";

import waveSvg from "../../assets/img/wave.svg";
import playSvg from "../../assets/img/play.svg";
import pauseSvg from "../../assets/img/pause.svg";

type Props = {
  audio: string;
};
const MessageAudio: FunctionComponent<Props> = ({ audio }) => {
  const [playing, setPlaying] = useState(false);
  const [audioTime, setAudioTime] = useState("");
  const [progressState, setProgressState] = useState("0%");
  const audioElement = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timeCal = () => {
      let current_time = audioElement.current?.currentTime;
      let duration = audioElement.current?.duration;
      var result = calculateCurrentValue(current_time!);
      setAudioTime(result);
      let percent = ((current_time! / duration!) * 100).toFixed() + "%";
      setProgressState(percent);
    };

    const calculateCurrentValue = (currentTime: number) => {
      let minutes: number | string = +((currentTime / 60) % 60);
      let seconds: number | string = +(currentTime % 60);
      seconds = formatTime(seconds);
      minutes = formatTime(minutes);
      return minutes + ":" + seconds;
    };

    const calculateTotalValue = (length: number) => {
      let minutes: number | string = Math.floor(length / 60);
      let seconds: number | string = length - minutes * 60;
      minutes = formatTime(minutes);
      seconds = formatTime(seconds);
      return minutes + ":" + seconds;
    };

    const initAudioTime = () => {
      let length = audioElement.current?.duration;
      let totalLength = calculateTotalValue(length!);
      setAudioTime(totalLength);
    };

    audioElement.current?.addEventListener("playing", () => setPlaying(true));

    audioElement.current?.addEventListener("pause", () => setPlaying(false));

    audioElement.current?.addEventListener("ended", () => {
      setPlaying(false);
      setProgressState("0%");
    });

    audioElement.current?.addEventListener("timeupdate", timeCal);

    audioElement.current?.addEventListener("canplay", initAudioTime);
  }, []);

  const onTogglePlay = () => {
    if (playing) {
      audioElement.current?.pause();
      return;
    }

    audioElement.current?.play();
  };

  return (
    <div className="message__audio">
      <audio ref={audioElement} src={audio} preload="auto" />
      <div
        className="message__audio-progress"
        style={{ width: progressState }}
      ></div>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={onTogglePlay}>
            {playing ? (
              <img src={pauseSvg} alt="pauseSvg" />
            ) : (
              <img src={playSvg} alt="playSvg" />
            )}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="waveSvg" />
        </div>
        <span className="message__audio-duration">{audioTime}</span>
      </div>
    </div>
  );
};

export default MessageAudio;
