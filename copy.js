const copyLink = document.querySelectorAll(".clipboard");

copyLink.forEach(elem => {
    elem.addEventListener("click", (e) => {
        const clipText = elem.querySelector(".clip-text");
        const alertMsg = document.querySelector(".alert-msg");
        e.preventDefault();
        if (clipText.id == "phone") {
            navigator.clipboard.writeText("905-483-6811");
            
        } else {
            navigator.clipboard.writeText(clipText.innerText);  
        }
        alertMsg.style.display = "block";
        setTimeout(function () { alertMsg.style.display = 'none'; }, 1000);  
        
    })
});