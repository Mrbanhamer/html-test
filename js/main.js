
document.querySelectorAll(".item .title").forEach(title => {
    title.addEventListener("click", function () {
        const item = this.parentElement;
        item.classList.toggle("active");
    });
});