import React, { useState, useEffect } from "react";
import styles from "../styles/components/Music.module.css"

declare global {
  interface Window { mobileCheck: any; }
  interface Window { opera: any; }
}

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
    
    window.addEventListener('blur',() => {
      setPlaying(false);
    });
    
    window.addEventListener('focus',() => {
      setPlaying(true);
    });
    
    window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

    window.mobileCheck() ? setPlaying(false) : setPlaying(true);

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