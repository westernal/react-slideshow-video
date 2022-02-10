import { useEffect, useState } from "react";

const SlideShow = (props) => {

    const [image , SetImage] = useState();
    const [isPlaying , SetIsPlaying] = useState();
    const [duration , SetDuration] = useState(1000);

    useEffect(() => {
        if (props.duration) {
            SetDuration(props.duration)
        }
    },[])

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    async function playSlideshow() {
        SetIsPlaying(true)

        for (let index = 0; index < props.images.length; index++) {
            await sleep(duration)
            SetImage(props.images[index].src)
        }
    }

    function pauseSlideshow() {
        SetIsPlaying(false)
    }

    return ( <div className="slideshow-container">
        <img src={image} alt="slide show" />
        {!isPlaying && <button onClick={playSlideshow}>play</button>}
        {isPlaying && <button onClick={pauseSlideshow}>pause</button>}
    </div> );
}
 
export default SlideShow;