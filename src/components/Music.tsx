import React, { useState, useEffect } from "react";
import styles from "../styles/components/Music.module.css"

const iconPause = <div className={styles.bars}>
                    <div className={styles.dots}>
                    <div className={styles.dot__1}></div>
                    <div className={styles.dot__2}></div>
                    <div className={styles.dot__3}></div>
                    <div className={styles.dot__4}></div>
                    <div className={styles.dot__5}></div>
                    <div className={styles.dot__6}></div>
                  </div>
                  <div className={styles.dots}>
                    <div className={styles.dot__1r}></div>
                    <div className={styles.dot__2r}></div>
                    <div className={styles.dot__3r}></div>
                    <div className={styles.dot__4r}></div>
                    <div className={styles.dot__5r}></div>
                    <div className={styles.dot__6r}></div>
                  </div>
                </div>;

const iconPlay = <div className={styles.bars}>
                        <svg aria-label="Play" focusable="false" data-prefix="fas" data-icon="play" className={styles.play__icon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#F8F8F820" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                        <div className={styles.dots}>
                          <div className={styles.dot__1p}></div>
                          <div className={styles.dot__2p}></div>
                          <div className={styles.dot__3p}></div>
                          <div className={styles.dot__4p}></div>
                          <div className={styles.dot__5p}></div>
                          <div className={styles.dot__6p}></div>
                      </div>
                  </div>;


const useAudio = url => {
  
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));
  const [playing, setPlaying] = useState(true);

  let vol = 0.1;
  const interval = 60;

  const toggle = () => {
    setPlaying(!playing)
  }

  useEffect(() => {
    
    if (playing) {

      // #FIX não iniciar a musica novamente quando se troca de página
      const play = audio.play();

      if (play !== undefined) {
        play.then(_ => {
          audio.play()
        }).catch(error => {
          setPlaying(false)
        });
      }

      let fadein = setInterval(
        function() {
          if (vol < 1) {
            audio.volume=vol;
            vol += 0.1;
          }
          else {
            clearInterval(fadein);
          }
        }, interval);
      
    } else {

      let fadeout = setInterval(
        function() {
          if (vol > 0) {
            audio.volume=vol;
            vol -= 0.01;
          }
          else {
            audio.pause();
            clearInterval(fadeout);
          }
        }, interval);

    }
    }
    ,
    [playing]
  );

  useEffect(() => {

    audio.addEventListener('ended', () => audio.play());
    audio.volume=0;
    
    // // ativar navamente quando tiver mais conteúdo no site
    // window.addEventListener('blur',() => {
    //   setPlaying(false);
    // });
    
    // window.addEventListener('focus',() => {
    //   setPlaying(true);
    // });
  
    console.log('render: ' + playing);

  }, []);

  return (
    <div>
        <button aria-label='play pause button' className={styles.buttonPlay} onClick={toggle}>{playing ? iconPause : iconPlay}</button>
    </div>
  )
};

const Player = ({ url }) => {
  const button = useAudio(url);

  return button;
};


export default Player;