const form = document.getElementById("expense-form");
const desc = document.getElementById("desc");
const amount = document.getElementById("amount");
const list = document.getElementById("list");
const total = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Data view rendering
function render() {
  list.innerHTML = "";
  let sum = 0;

  expenses.forEach((exp, index) => {
    sum += exp.amount;

    // const li = document.createElement("li");
    // li.innerHTML = `
    //   ${exp.desc} - $${exp.amount}
    //   <button class='remove-btn' onclick="deleteExpense(${index})">x</button>
    // `;

    // test start

    const li = document.createElement("li");

    // text content
    const text = document.createElement("span");
    text.textContent = `${exp.desc} - $${exp.amount}`;

    // remove button
    const button = document.createElement("button");
    button.textContent = "x";
    button.classList.add("remove-btn");

    // event
    button.addEventListener("click", () => {
      deleteExpense(index);
    });

    // append elements
    li.appendChild(text);
    li.appendChild(button);

    list.appendChild(li);

    //test end

    list.appendChild(li);
  });

  total.textContent = sum;
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// add new expense
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!desc.value || !amount.value) {
    alert("Please fill all fields");
    return;
  }

  expenses.push({
    desc: desc.value,
    amount: Number(amount.value),
  });

  desc.value = "";
  amount.value = "";

  render();
});

// delete expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  render();
}

render();
