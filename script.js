
function toggleMenu() {
  const menu = document.getElementById("burgerMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xwprkpdv", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}