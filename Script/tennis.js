const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");

openBtn.addEventListener("click",() => {
    popup.style.display = "block";
});

closeBtn.addEventListener("click",() => {
    popup.style.display = "none";
});

window.addEventListener("click",(e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});