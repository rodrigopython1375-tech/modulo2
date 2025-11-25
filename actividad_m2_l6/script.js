$("li").css("color", "red");

$("#addElement").click(function () {
    const lista = $("#lista");
    const cantidad = $("#lista li").length;
    const texto = "Elemento " + (cantidad + 1);

    lista.append($("<li>").text(texto));
});

$("#removeElement").click(function () {
    const lista = $("#lista");
    $("#lista li").last().remove();
});

$("#show").click(function () {
    $("#lista").fadeToggle();

    if ($("#show").text() == "Ocultar lista") {
        $("#show").text("Mostrar lista");
    } else {
        $("#show").text("Ocultar lista");
    }
});

// scrip para elminar warning de modal en chrome
window.addEventListener("hide.bs.modal", (event) => {
    event.target.inert = true;
});
window.addEventListener("show.bs.modal", (event) => {
    event.target.inert = false;
});
