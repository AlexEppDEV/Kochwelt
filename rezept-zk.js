function updateIngredientsZimtkuchen() {
  let servings = document.getElementById("portionen-zimtkuchen").value;

  
  if (servings < 0) {
    servings = 0;
    document.getElementById("portionen-zimtkuchen").value = 0; 
  }
  if (servings > 20) {
    servings = 20;
    document.getElementById("portionen-zimtkuchen").value = 20; 
  }

  const ingredients = document.querySelectorAll("#zutatenliste-zimtkuchen td");

  ingredients.forEach(item => {
    const baseAmount = item.getAttribute("data-menge"); 
    if (baseAmount) {
      const text = item.innerText.split(" ");
      const unitAndName = text.slice(1).join(" ");
      let newAmount = baseAmount * servings;

      let formatted = newAmount.toFixed(2);
      formatted = parseFloat(formatted).toString();
      formatted = formatted.replace('.', ',');

      item.innerText = formatted + " " + unitAndName;
      
      window.onload = function() {
        updateIngredients();
      };
    }
  });
}

function toggleMenu() {
  const menu = document.getElementById("burgerMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";

  function toggleMenu() {
    const menu = document.getElementById("burgerMenu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
}

