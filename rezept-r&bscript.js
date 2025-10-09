function updateIngredients() {
  const servings = document.getElementById("portionen").value;
  const ingredients = document.querySelectorAll("#zutatenliste td");

  ingredients.forEach(item => {
    const baseAmount = parseFloat(item.getAttribute("data-menge")); 
    if (baseAmount) {
      const text = item.innerText.split(" ");
      const unitAndName = text.slice(1).join(" ");
      let newAmount = baseAmount * servings;

      let formatted = parseFloat(newAmount.toFixed(2)).toString();
      formatted = formatted.replace('.', ',');

      item.innerText = formatted + " " + unitAndName;
    }
  });
}
 window.onload = updateIngredients;


function toggleMenu() {
  const menu = document.getElementById("burgerMenu");
  menu.classList.toggle("open");
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

