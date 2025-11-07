const shareBtn = document.getElementById("shareBtn");
const sharePopup = document.getElementById('sharePopup');

shareBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    sharePopup.classList.toggle("active");
    shareBtn.classList.toggle("active");
});

document.addEventListener('click', (event) => {
    if(!sharePopup.contains(event.target) && !shareBtn.contains(event.target));
    sharePopup.classList.remove("active");
    shareBtn.classList.remove("active");
});
