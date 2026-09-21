const boton = document.getElementById("boton");

boton.addEventListener("click", () => {

    // Crear corazones y pétalos flotando
    for (let i = 0; i < 25; i++) {

        const elemento = document.createElement("div");

        elemento.innerHTML = Math.random() > 0.5 ? "❤️" : "🌻";

        elemento.style.position = "absolute";
        elemento.style.left = Math.random() * 100 + "%";
        elemento.style.bottom = "-30px";
        elemento.style.fontSize = (15 + Math.random() * 20) + "px";
        elemento.style.zIndex = "30";
        elemento.style.pointerEvents = "none";

        document.querySelector(".contenedor").appendChild(elemento);

        const duracion = 3 + Math.random() * 3;

        elemento.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-100vh) rotate(${360 + Math.random() * 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duracion * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            elemento.remove();
        }, duracion * 1000);
    }

    // Cambiar mensaje
    document.querySelector(".mensaje").innerHTML =
        "Eres una persona muy especial para mí ❤️";

    boton.innerHTML = "🌻 Para ti 🌻";
});