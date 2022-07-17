const d = document;

let x = 0,
    y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();

    switch (e.keyCode) {
        case 37:
            if (limitBall.left > limitsStage.left) {
                e.preventDefault();
                x--;
            }
            break;
        case 38:
            if (limitBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }
            break;
        case 39:
            if (limitBall.right < limitsStage.right) {
                e.preventDefault();
                x++;
            }
            break;
        case 40:
            if (limitBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            break;

        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px , ${y * 10}px)`;
}

export function shortcuts(e) {
    if (e.altKey && e.key === "a") {
        alert("Alert");
    }
    if (e.altKey && e.key === "c") {
        confirm("Alert");
    }
    if (e.altKey && e.key === "p") {
        prompt("Alert");
    }
}
