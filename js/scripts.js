const modalButton = document.getElementById("modal-button");
const closeButton = document.getElementById("close-button");
const overlay = document.getElementById("overlay");

modalButton.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "block";
});

overlay.addEventListener("click", function () {
    overlay.style.display = "none";
});

closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
});
