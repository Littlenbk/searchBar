const data = [
    {
        celular: "A05s",
        pelscompativeis: "POCO C65, SAM A05, RM 13C, REALME NOTE 50, REALME C51, RM A3"
    },
    {
        celular: "A05",
        pelscompativeis: "POCO C65, RM 13C, REALME NOTE 50, REALME C51, RM A3"
    }
];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = data => {
    cardContainer.innerHTML = "";
    data.forEach(e => {
        cardContainer.innerHTML += `
        <div class="card">
            <h3>${e.celular}</h3>
            <p>${e.pelscompativeis}</p>
        </div>
        `
    })
}

searchInput.addEventListener("keyup", (e) => {
    const search = data.filter(i => i.celular.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);
})

window.addEventListener("load", displayData.bind(null, data));