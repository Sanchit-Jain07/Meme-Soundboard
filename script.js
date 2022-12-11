const sounds = ['Ae Band Kar!', 'Happy Diwali!', 'Khatam Tata Goodbye', 'Kuch Bhi!', 'Nahane Ja Nahane!', 'Waah Modiji Waah', 'Toh Karna!', 'Ruko Zara', 'Ha Bhai', 'Thik Hai Bhai Mai Chalta Hu', 'OHHHHHHHHHHHH', 'Koi Sense', 'Are You Comedy Me', 'Aukaat', 'Bahut Tez Ho Rahe', 'Chabi Kaha Hai', 'Maro Mujhe', 'Durgs Do', 'Goli Beta', 'He He Boi', 'Jaldi Bol', 'Once More', 'Pagal Aurat', 'Paisa Barbaad BC', 'Waah Waah Waah', 'Scam 1992 Theme (Requested By Arnav)']

const sound_ids = [
"Band-Kar",
"Happy-Diwali",
"Khatam-Tata",
"Kuch-Bhi",
"Nahane-Ja",
"Waah-Modiji",
"Karna",
"Ruko-Zara",
"Aur-bhai",
"Chalta-Hu",
"Oh-Thug", 
"Koi-Sense",
"Are-You-Comedy",
"Aukaat",
"Bahut-Tez",
"Chabi",
"Maro-Mujhe",
"Drugs-Do",
"Goli-Beta",
"He-He-Boi",
"Jaldi-Bol",
"Once-More",
"Pagal-Aurat",
"Paisa-Barbaad",
"Waah",
"Theme"
]


sounds.forEach((sound, idx) => {
    const btn = document.createElement('button')

    const download = document.createElement('a')
    download.href = `Sound/${sound_ids[idx]}.mp3`
    download.download = `${sound}.mp3`

    btn.classList.add('btn')

    const download_icon = document.createElement('i')
    download_icon.classList.add('fa','fa-arrow-circle-down')

    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound_ids[idx]).play()
    })

    download.appendChild(download_icon)
    btn.appendChild(download)

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sound_ids.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}


const stopbtn = document.getElementById('stop')
stopbtn.addEventListener('click', () => {
    stopSongs()
})