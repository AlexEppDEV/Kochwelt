// Basiswerte in einem Objekt speichern
let ingredients = {
  thunfisch: { crowd: 2, unit: "Dosen", weightUnit: 185 , outputId: "thunfisch", decimalPlaces: 1 },
  zwiebel: { crowd: 1, unit: "rote Zwiebel", outputId: "zwiebel", decimalPlaces: 1 },
  tomaten: { crowd: 2, unit: "aromatische Tomaten", outputId: "tomaten", decimalPlaces: 1 },
  paprikaschoteGrün: { crowd: 1, unit: "Paprikaschote, grün", outputId: "paprikaschoteGrün", decimalPlaces: 1 },
  paprikaschoteRot: { crowd: 1,unit: "Paprikaschote, rot", outputId: "paprikaschoteRot", decimalPlaces: 1 },
  petersilie: { crowd: 15, unit: "g glatte Petersilie", outputId: "petersilie", decimalPlaces: 1 },
  olivenöl: { crowd: 4, unit: "El Olivenöl", outputId: "olivenöl", decimalPlaces: 1 },
  balsamico: { crowd: 2, unit: " TL weißer Balsamico-Essig", outputId: "balsamico", decimalPlaces: 1 },
  zitronensaft: { crowd: 0.5, unit: " TL frischer Zitronensaft", outputId: "zitronensaft", decimalPlaces: 1 },
  zitronenschalen: { crowd: 0.5, unit: " TL Zitronenschalen Abrieb", outputId: "zitronenschalen", decimalPlaces: 1},
  meersalz: { crowd: 1, unit: " TL Meersalz", outputId: "meersalz" , decimalPlaces: 1 },
  
};

// berechnung zutaten 

function calculationIngredients() {
  let portionNumber = document.getElementById("portionNumber").value;
  let basicPositions = 4; // basis wert
  
  for (let ingredientLoop in ingredients) {
    let newCrowd = (ingredients[ingredientLoop].crowd / basicPositions) * portionNumber;
    let decimalPlaces = ingredients[ingredientLoop].decimalPlaces;
    let formattedAmount;
    
    // Überprüfe, ob die berechnete Menge eine ganze Zahl ist
    if (Number.isInteger(newCrowd)) {
      formattedAmount = newCrowd; // Zeigt 1 anstelle von 1.0
    } else {
      // Bei Kommazahlen formatieren
      formattedAmount = newCrowd.toFixed(decimalPlaces).replace('.', ','); 
    }
    
    let outputString = formattedAmount + " " + ingredients[ingredientLoop].unit;

    if (ingredients[ingredientLoop].weightUnit) {
      let newWeight = newCrowd * ingredients[ingredientLoop].weightUnit;
      outputString += " (" + newWeight.toFixed(0) + " g) Thunfisch im eigenen Saft";
    }
    
    document.getElementById(ingredients[ingredientLoop].outputId).textContent = outputString;
  }
}

// IDs der HTML-Elemente abrufen
let myButton = document.getElementById('myButton');

// Event Listener für den Klick-Event
myButton.addEventListener('click', function() {
  // Anstatt den Wert auszugeben, wird Berechnungsfunktion aufgerufen
  calculationIngredients();
});

