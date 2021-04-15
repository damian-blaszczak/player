import { useState, useEffect } from "react";

const useAudioPlayer = () => {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState();

  const audio = document.getElementById("audio");

  useEffect(() => {
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }

    const setAudioTime = () => setCurTime(audio.currentTime);

    if (audio) {
      audio.addEventListener("loadeddata", setAudioData);
      audio.addEventListener("timeupdate", setAudioTime);
      playing ? audio.play() : audio.pause();
      if (time && time !== curTime) {
        audio.currentTime = time;
        setTime(null);
      }
      return () => {
        audio.removeEventListener("loadeddata", setAudioData);
        audio.removeEventListener("timeupdate", setAudioTime);
      }
    }
  }, [time, curTime, playing, audio]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setTime
  }
}

export default useAudioPlayer;
