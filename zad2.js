document.addEventListener("click", function (event) {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
            const subcategories = dropdown.querySelector(".subcategories");
            subcategories.style.display = "none";
        }
    });
});
