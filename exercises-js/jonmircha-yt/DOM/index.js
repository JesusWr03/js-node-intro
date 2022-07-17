import burguerMenu from "./exercises/burguer_menu.js";

// import { digitalClock, alarm } from "./exercises/clock.js";
import { moveBall, shortcuts } from "./exercises/keyboard.js";
import countdown from "./exercises/countdown.js";
import scrollTopButton from "./exercises/button_scroll.js";
import darkMode from "./exercises/dark_mode.js";
import responsiveMedia from "./exercises/responsive_object.js";
import responsiveTester from "./exercises/test_responsive.js";
import userDeviceInfo from "./exercises/user_agent.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    burguerMenu("#btnCTA", "#menu", "#menu a");
    // digitalClock("#clock", "#start-clock", "#stop-clock");
    // alarm("./assets/alarm.wav", "#start-alarm", "#stop-alarm");
    countdown("countdown", "Jan 01, 2023 00:00:00", "Happy New Year 🎉");
    scrollTopButton(".scroll-top-btn");

    responsiveMedia(
        "youtube",
        "(min-width:1024px)",
        `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener">Watch Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width:1024px)",
        `<a href="https://goo.gl/maps/SAFhTgEs6yaKGWWP6" target="_blank" rel="noopener">Watch Map</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99439.32313858288!2d-72.6273690764643!3d-13.153500519261728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9a5f89555555%3A0x3a10370ea4a01a27!2sMachu%20Picchu!5e0!3m2!1sen!2sca!4v1657950018386!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );

    responsiveTester("responsive-tester")
    userDeviceInfo()
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkMode(".dark-mode-btn", "bg-neutral-900 text-neutral-300");
