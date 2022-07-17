const d = document,
    ls = localStorage;

export default function darkMode(btn, className) {
    const $btn = d.querySelector(btn);

    let moon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-inherit" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>`,
        sun = `<svg xmlns="http://www.w3.org/2000/svg" class="h-inherit w-inherit" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>`;

    const lightMode = () => {
        d.body.classList = "bg-neutral-100 text-neutral-800";
        $btn.innerHTML = moon;
        ls.setItem("theme", "light");
    };
    const darkMode = () => {
        d.body.classList = className;
        $btn.innerHTML = sun;
        ls.setItem("theme", "dark");
    };

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
            // isDark = !isDark;
            // console.log("no");

            ls.getItem("theme") === "light" ? darkMode() : lightMode();
        }
    });

    d.addEventListener("DOMContentLoaded", (e) => {
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");

        if (ls.getItem("theme") === "light") lightMode();
        if (ls.getItem("theme") === "dark") darkMode();
    });
}
