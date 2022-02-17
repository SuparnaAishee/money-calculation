// Input value
function getInputValue(inputId) {
  const inputField = document.querySelector(inputId);
  const inputValue = parseInt(inputField.value);
  return inputValue;
}

// Total Spending value
function getTotalMineExpenses() {
  const foodCost = getInputValue("#input-food");
  const rentCost = getInputValue("#input-rent");
  const clotheCost = getInputValue("#input-clothe");
  const totalMineExpensesField = document.getElementById("total-expenses");
  const totalExpenses = foodCost + rentCost + clotheCost;
  if (
    isNaN(foodCost) ||
    isNaN(rentCost) ||
    isNaN(clotheCost) ||
    foodCost < 0 ||
    rentCost < 0 ||
    clotheCost < 0
  ) {
    alert("Please Enter a valid input");
    totalMineExpensesField.innerText = "";
  } else {
    return totalExpenses;
  }
}

document.getElementById("calculation-btn").addEventListener("click", () => {
  const totalIncome = getInputValue("#input-income");
  const totalExpenses = getTotalMineExpenses();
  //Error Handling
  if (totalIncome <= 0) {
    alert("Please enter a valid amount");
  } else if (isNaN(totalIncome) || totalExpenses == undefined) {
    alert("Please enter a valid amount");
  } else if (totalIncome < totalExpenses) {
    alert("You can't spend more than you Earn");
  } else {
    if (typeof totalExpenses !== "number") {
    } else {
      //Update total spending expenses
      const totalMineExpensesField = document.getElementById("total-expenses");
      totalMineExpensesField.innerText = totalExpenses;

      //Update New balance
      const newBalance = totalIncome - totalExpenses;
      const newBalanceField = document.getElementById("new-balance");
      newBalanceField.innerText = newBalance;
    }
  }
});

document.getElementById("savings-btn").addEventListener("click", () => {
  //New Balance
  const newBalanceField = document.getElementById("new-balance");
  const newBalance = parseInt(newBalanceField.innerText);
  const totalIncome = getInputValue("#input-income");
  const totalMineExpensesField = document.getElementById("total-expenses");
  const totalExpenses = parseInt(totalMineExpensesField.innerText);

  // savings
  const savingParcent = getInputValue("#parcent");
  const savingAmount = totalIncome * (savingParcent / 100);

  // ultimate Ammount
  const ultimateAmmount = newBalance - savingAmount;

  //Error handling for Savings
  if (savingParcent < 0) {
    alert("Please enter a valid input");
  } else if (totalIncome < savingAmount) {
    alert("Input number is not valid");
  } else if (isNaN(totalIncome) || isNaN(savingParcent) || isNaN(totalExpenses)) {
    alert("Please fill the above field");
  } else if (ultimateAmmount < 0) {
    alert("Input number is not valid");
  } else {
    const savingField = document.getElementById("total-savings");
    savingField.innerText = savingAmount;
    const ultimateAmmountField = document.getElementById("ultimate-ammount");
    ultimateAmmountField.innerText = ultimateAmmount;
  }
});
