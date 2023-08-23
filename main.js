let income = 0;
let expense = 0;
let calcBtn = document.querySelector("#calc_btn");
let inputAmount = document.querySelector("#income_amount");
let incomAccrued = document.querySelector("#income_accrued");
let total = document.querySelector("#total_balance");
let expenseIncurred = document.querySelector("#expense_incurred");

// the income budget.........
calcBtn.addEventListener("click", function () {
  let budget = Number(inputAmount.value);
  if (!isNaN(budget)) {
    income += budget;
    incomAccrued.innerHTML = income;
    incomAccrued.style.color = "green";
    inputAmount.value = "";
    updateBalance();
    console.log(income);
  }
});

// reseting the income.......

btnReset = document.querySelector("#btn_reset");
btnReset.addEventListener("click", function () {
  incomAccrued.innerHTML = 0;
});

// the expense budget.......

let addExpense = document.querySelector("#add_expense");
let expTitle = document.querySelector("#exp_title");
let expAmt = document.querySelector("#exp_amt");
addExpense.addEventListener("click", function () {
  let addExpense = document.querySelector("#add_expense");
  let expTitle = document.querySelector("#exp_title");
  let expAmt = document.querySelector("#exp_amt");
  let expVal = document.querySelector("#exp_val");
  let expPrice = document.querySelector("#exp_price");
  let expenseList = document.querySelector("#exp_list");
  let expenseDetails = document.querySelector("#exp_inc");

  let expenseAmount = Number(expAmt.value);
  expense += expenseAmount;
  expenseIncurred.innerHTML = expense;
  let result = expTitle.value;
  expenseDetails.innerHTML += `<p>${result}</p>`;
  // expense = 0;
  let expensePrice = Number(expAmt.value);
  expVal.innerHTML += `<p>${expensePrice}</p>`;

  expenseIncurred.style.color = "red";
  expenseDetails.style.color = "red";
  expVal.style.color = "red";
  expTitle.value = "";
  expAmt.value = "";
  console.log(expenseDetails);
  updateBalance();
});

function updateBalance() {
  let balance = income - expense;
  let balanceEl = document.querySelector("#total_balance");
  balanceEl.innerHTML = balance;
  if (balance > 1) {
    balanceEl.style.color = "green";
  } else {
    balanceEl.style.color = "red";
  }
}
