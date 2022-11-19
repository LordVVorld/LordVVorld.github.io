let buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        new Audio(`/sounds/${button.getAttribute("tag")}`).play();
    })
});

document.addEventListener("keydown", event => {
    buttons.forEach(button => {
        if (event.code == `Key${button.textContent.toUpperCase()}`) {
            new Audio(`/sounds/${button.getAttribute("tag")}`).play();
        }
    })
})