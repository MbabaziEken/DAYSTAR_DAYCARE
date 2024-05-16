const updateBtns = document.querySelectorAll(".edit-btn");
updateBtns.forEach((btn) => {
    btn.addEventListener("click",() => {
        const babyName = btn.parentNode.parentNode.childNodes[0].innerText.replace(" " ,"%20")
        window.location.href=`/babbies/${babyName}`;
    })
})