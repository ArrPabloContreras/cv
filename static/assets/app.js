fetch("navbar.html")
    .then((res) => res.text())
    .then((html) => {
        document.getElementById("navbar-placeholder").innerHTML = html;
        marcarLinkActivo();
    })
    .catch((err) => console.error("Error cargando la navbar:", err));

function marcarLinkActivo() {
    // Obtiene el nombre del archivo actual (ej: "contacto.html")
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Clases que se aplican al link ACTIVO
    const activeClasses = [
        "text-secondary",
        "bg-secondary/10",
        "rounded-xl",
        "p-xs",
        "active:scale-95",
    ];

    // Clases que tienen los links INACTIVOS (para quitarlas del activo y ponerlas en los demás)
    const inactiveClasses = [
        "text-on-surface-variant/60",
        "active:scale-90",
        "hover:text-secondary/80",
    ];

    const links = document.querySelectorAll("#navbar-placeholder nav a");

    links.forEach((link) => {
        const linkPage = link.getAttribute("href");

        // Quita cualquier clase de estado que pudiera tener
        link.classList.remove(...activeClasses, ...inactiveClasses);

        if (linkPage === currentPage) {
            link.classList.add(...activeClasses);
        } else {
            link.classList.add(...inactiveClasses);
        }
    });
}