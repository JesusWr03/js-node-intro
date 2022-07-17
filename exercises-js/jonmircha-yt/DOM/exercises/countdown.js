const d = document;

export default function countdown(id, limitDate, message) {
    const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime();

    let countdownTime = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hours = (
                "0" +
                Math.floor(
                    (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
            ).slice(-2),
            minutes = (
                "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
            ).slice(-2),
            seconds = (
                "0" + Math.floor((limitTime % (1000 * 60)) / 1000)
            ).slice(-2);

        $countdown.innerHTML = `<h3>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</h3>`;

        if (limitTime < 0) {
            clearInterval(countdownTime);
            $countdown.innerHTML = `</h3>${message}</h3>`;
        }
    }, 1000);
}
