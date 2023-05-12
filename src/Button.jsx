

const Button = ({innerText , trackName , audSrc , setTrack}) => {

    return(
        <button className="drum-pad" id={trackName} onClick={(e) => {
            let audio = new Audio(audSrc)
            audio.play()
            setTrack(trackName)
            console.log(trackName)
        }} >
            <audio id={innerText} className="clip" src={audSrc}></audio>
            {innerText}
        </button>
    )
}

export default Button