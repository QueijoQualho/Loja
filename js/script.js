var abrir = true;

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");

    menu.addEventListener("click", function () {
        const ul = document.querySelector(".mobile ul");

        if (abrir) {
            ul.style.display = "block";
            abrir = false;
        } else {
            ul.style.display = "none";
            abrir = true;
        }

        menu.textContent = (!abrir)? "close" : "menu";
        menu.style.color = (!abrir)? "#C43302" : "#fff";

    });
});

