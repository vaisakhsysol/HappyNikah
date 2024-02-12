window.addEventListener('load', () => {
    let breakLine = document.getElementById("breakLine");
    let screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        breakLine.remove();
    }
});