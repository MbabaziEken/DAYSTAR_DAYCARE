const updateBtns = document.querySelectorAll(".update-btn");
updateBtns.forEach((btn) => {
    btn.addEventListener("click",() => {
        const sitterName = btn.parentNode.parentNode.childNodes[0].innerText.replace(" " ,"%20")
        window.location.href=`/sitters/${sitterName}`;
    })
})