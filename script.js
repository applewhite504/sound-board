const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// loop through each sound 
// create a button for each one
// text on each button will be for the sound each will produce

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    //enable the button sounds to play when clicked
    btn.addEventListener('click', () => {
        stopSongs()
        
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

//make the previously played button stop when another one is played
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById
        (sound)

        song.pause()
        song.currentTime = 0;
    })
}