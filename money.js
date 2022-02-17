// Input value
function getInputValue(inputId) {
  const inputField = document.querySelector(inputId);
  const inputValue = parseInt(inputField.value);
  return inputValue;
}

// Total Spending value
function getTotalSpendings() {
  const foodCost = getInputValue("#input-food");
  const rentCost = getInputValue("#input-rent");
  const clotheCost = getInputValue("#input-clothe");
  const totalSpendingsField = document.getElementById("total-spendings");
  const totalSpending = foodCost + rentCost + clotheCost;
  if (
    isNaN(foodCost) ||
    isNaN(rentCost) ||
    isNaN(clotheCost) ||
    foodCost < 0 ||
    rentCost < 0 ||
    clotheCost < 0
  ) {
    alert("Please Enter a valid input");
    totalSpendingsField.innerText = "";
  } else {
    return totalSpending;
  }
}

document.getElementById("calculation-btn").addEventListener("click", () => {
  const totalIncome = getInputValue("#input-income");
  const totalSpending = getTotalSpendings();