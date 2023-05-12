import { useState } from 'react'
import './App.css'
import Display from './Display';
import Pad from './Pad';

function App() {

  const audios = [
    {name: "Heater 1" , src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    {name: "Heater 2" , src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {name: "Heater 3" , src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
    {name: "Heater 4" , src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {name: "Clap" , src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {name: "Open-HH" , src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {name: "Kick-n'-Hat" , src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {name: "Kick" , src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {name: "Closed-HH" , src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
  ]

  const letters = ['Q' , 'W' , 'E' , 'A' , 'S' , 'D' , 'Z' , 'X' , 'C']

  const [track, setTrack] = useState("");

  return (
   <div id="drum-machine">
    <Display track={track} />
    <Pad audios={audios} letters={letters} setTrack={setTrack} />
   </div>
  )
}

export default App
