contador = document.getElementById("contador");

function sumar() {
    valor = contador.textContent;
    contador.textContent = parseInt(valor) + 1;
}

ofertas = document.getElementById("ofertas");

function boton() {
    valor = ofertas.textContent;
    let cards = document.querySelectorAll("[data-image-group='on']");

    if (valor == "Ofertas") {
        cards.forEach((card) => (card.style.display = "none"));
        ofertas.textContent = "Todo";
    } else {
        cards.forEach((card) => (card.style.display = "block"));
        ofertas.textContent = "Ofertas";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".btn-like");

    likeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.closest(".producto");
            const productId = productElement.getAttribute("data-product-id");
            const countElement = productElement.querySelector(".count-like");

            handleLike(productId, countElement);
        });
    });
});

function handleLike(productId, countElement) {
    let currentLikes = parseInt(countElement.textContent);
    currentLikes++;
    countElement.textContent = currentLikes;
}
function loadColor() {
    var color = localStorage.getItem("colorvar");
    if (color === null) {
        document.body.classList.add("light");
    } else {
        if (color === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.add("light");
        }
    }
}
function changeColor() {
    var color = localStorage.getItem("colorvar");
    var modo = document.getElementById("modo");
    if (color === "dark") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("colorvar", "light");
        modo.textContent = "Modo oscuro";
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("colorvar", "dark");
        modo.textContent = "Modo claro";
    }
}

document.getElementById("link1").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("section1").scrollIntoView({ behavior: "smooth" });
});
