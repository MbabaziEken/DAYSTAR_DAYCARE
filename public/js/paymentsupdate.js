const updateBtns = document.querySelectorAll(".edit-btn");
updateBtns.forEach((btn) => {
    btn.addEventListener("click",() => {
        const sitterName = btn.parentNode.parentNode.childNodes[0].innerText.replace(" " ,"%20")
        window.location.replace(`/sitterpaymentlist/${sitterName}`);
    })
})