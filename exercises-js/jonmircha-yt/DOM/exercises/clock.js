const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
    let clockTime;

    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay) || e.target.matches(`${btnPlay} *`)) {
            clockTime = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `
                <h3>${clockHour}</h3>
                `;
            }, 1000);

            d.querySelector(btnPlay).disabled = true;
        }

        if (e.target.matches(btnStop) || e.target.matches(`${btnStop} *`)) {
            clearInterval(clockTime);
            d.querySelector(clock).innerHTML = ``;
            d.querySelector(btnPlay).disabled = false;
        }
    });
}
export function alarm(sound, btnPlay, btnStop) {
    let alarmTime;
    const $alarm = d.createElement("audio")
    $alarm.src = sound
    $alarm.loop = true;

    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            alarmTime = setTimeout(() => {
                $alarm.play()
            }, 200);
            e.target.disabled = true
        }
        if (e.target.matches(btnStop)) {
            $alarm.pause()
            $alarm.currentTime = 0
            d.querySelector(btnPlay).disabled = false
        }
    });
}
