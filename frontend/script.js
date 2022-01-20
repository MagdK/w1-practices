/* const data = [
    "Gergely Kiss",
    "Krisztian Bui",
    "Bucko Balazs",
    "Andras Varga",
    "Borbala Terez Kovacs"
];
 */

const data = [
    {
        name: "Gergely Kiss",
        favoriteFood: "csirke/rizs"
    },
    {
        name: "Andras Varga",
        favoriteFood: "brassoi"
    },
    {
        name: "Balazs Bucko",
        favoriteFood: "kolbaszos rajas pizza"
    },
    {
        name: "Krisztian Bui",
        favoriteFood: "banan"
    },
    {
        name: "Borbala Terez Kovacs",
        favoriteFood: "avokado"
    },
    {
        name: "Benett Viszokai",
        favoriteFood: "alma"
    },
    {
        name: "Krisztian Porneszi",
        favoriteFood: "almaspite"
    },
]
function loadEvent() {
    console.log("My page is loaded")
    
    const root = document.querySelector("#root")

    for (const frontendStudent of data) {
       root.insertAdjacentHTML("beforeend", `
            <section>
                <h1>${frontendStudent.name}</h1>
                <p>${frontendStudent.favoriteFood}</p>
            </section>
        `) 
    }
}
window.addEventListener("load", loadEvent )