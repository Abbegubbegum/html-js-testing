let img = document.getElementById("capybara");
let countLabel = document.getElementById("capybara-count");
let cpsLabel = document.getElementById("capybara-per-seconds");
let farmerButton = document.getElementById("farmer-button");
let farmButton = document.getElementById("farm-button");
let capyCount = 170;
let farmerCount = 0;
let farmerCost = 10;
let farmCount = 0;
let farmCost = 100;

setInterval(FarmProduce, 1000);

Update();

img.addEventListener("mousedown", function (e) {
  e.preventDefault();
  capyCount += 1 + farmerCount;
  this.setAttribute("class", "clicked");
  Update();
});

img.addEventListener("mouseup", function (e) {
  this.setAttribute("class", "hovered");
});

img.addEventListener("mouseover", function (e) {
  this.setAttribute("class", "hovered");
});

img.addEventListener("mouseout", function (e) {
  this.setAttribute("class", "");
});

farmerButton.addEventListener("click", function (e) {
  if (capyCount >= farmerCost) {
    capyCount -= farmerCost;
    farmerCount++;
    farmerCost = Math.floor(farmerCost * 1.3);
    Update();
  } else {
    alert("no money");
  }
});

farmButton.addEventListener("click", function (e) {
  if (capyCount >= farmCost) {
    capyCount -= farmCost;
    farmCount++;
    farmCost = Math.floor(farmCost * 1.5);
    Update();
  } else {
    alert("no money");
  }
});

function Update() {
  //  console.log(CountLabel.innerHTML)
  countLabel.innerHTML = "Capybara Count: " + capyCount;
  farmerButton.innerHTML = `Buy Farmer for ${farmerCost}, Count: ${farmerCount}`;
  farmButton.innerHTML = `Buy Farm for ${farmCost}, Count: ${farmCount}`;
  cpsLabel.innerHTML = `${farmCount * 10} Cps`;
}

function FarmProduce() {
  capyCount += farmCount * 10;
  Update();
}
