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

  //Error Handling
  if (totalIncome <= 0) {
    alert("Please enter a valid amount");
  } else if (isNaN(totalIncome) || totalSpending == undefined) {
    alert("Please enter a valid amount");
  } else if (totalIncome < totalSpending) {
    alert("You can't spend more than you Earn");
  } else {
    if (typeof totalSpending !== "number") {
    } else {
      //Update total spending
      const totalSpendingsField = document.getElementById("total-spendings");
      totalSpendingsField.innerText = totalSpending;

      //Update New balance
      const newBalance = totalIncome - totalSpending;
      const newBalanceField = document.getElementById("new-balance");
      newBalanceField.innerText = newBalance;
    }
  }
});