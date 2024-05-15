const updateBtns = document.querySelectorAll(".update-btn");
updateBtns.forEach((btn) => {
    btn.addEventListener("click",() => {
        const sitterName = btn.parentNode.parentNode.childNodes[0].firstChild
        // .replace(" " ,"%20")
        console.log(typeof sitterName)
    })
})