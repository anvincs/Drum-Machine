import Button from "./Button"

const Pad = ({audios , letters , setTrack}) => {

    return(
        <div id="pad-block">
            {
                audios.map((audio,index) => {
                    return(
                        <Button 
                        key={letters[index]}
                        innerText={letters[index]}
                        trackName={audio.name}
                        audSrc={audio.src}
                        setTrack={setTrack}
                    />
                    )
                })
            }
        </div>
        
    )
}

export default Pad