import React, { useState, useEffect } from "react";

const iconPlay = <svg aria-label="Play" focusable="false" data-prefix="fas" data-icon="play" className="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#F8F8F870" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>;

const iconPause = <svg aria-label="Pause" focusable="false" data-prefix="fas" data-icon="pause" className="svg-inline--fa fa-pause fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#F8F8F870" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>;

const useAudio = url => {
  // let sound = new Audio(url);
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    setPlaying(true);

    audio.addEventListener('ended', () => audio.play());
    
    window.addEventListener('onblur',() => {
      audio.pause();
      setPlaying(false);
    });

  }, []);

  return (
    <div>
        <button style={{'width': '2rem', 'height': 'auto', 'background': 'transparent', 'border': 'none', 'fill':'#F8F8F70' }} onClick={toggle}>{playing ? iconPause : iconPlay}</button>
    </div>
  )
};

const Player = ({ url }) => {
  const button = useAudio(url);

  return button;
};


export default Player;