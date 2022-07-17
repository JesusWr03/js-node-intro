const d = document

export default function burguerMenu(btnCTA, menu,menu_link) {

    d.addEventListener("click", (e) => {

        if(e.target.matches(btnCTA) || e.target.matches(`${btnCTA} *`)){
            document.querySelector(btnCTA).classList.toggle("is-active")

            document.querySelector(menu).classList.toggle("translate-x-0")
        }
        if(e.target.matches(menu_link)){
            document.querySelector(btnCTA).classList.remove("is-active")

            document.querySelector(menu).classList.remove("translate-x-0")
        }

    });
}
