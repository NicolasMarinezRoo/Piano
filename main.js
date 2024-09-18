import './style.css'
import * as Tone from "tone";


let keys = document.querySelectorAll('.key')

for(let key of keys){
    let noteToPlay = key.getAttribute('data-note')
    key.addEventListener('mousedown', () => playNote(noteToPlay))
    key.addEventListener('mouseup', () => stopNote());
    key.addEventListener('mouseleave', () => stopNote());
}

const synth = new Tone.Synth().toDestination();


function playNote(note){

    synth.triggerAttackRelease(note);

}

function stopNote(){
    synth.triggerRelease(null);
}