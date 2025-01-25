const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 // Get all elements with the class 'price'
  const priceElements = document.querySelectorAll(".price");

  // Calculate the sum of prices
  let total = 0;
  priceElements.forEach(priceElement => {
    total += parseFloat(priceElement.textContent);
  });

  // Create a new row to display the total price
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Set the cell to span both columns and display the total price
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = `Total Price: Rs ${total}`;
  totalCell.style.fontWeight = "bold";

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);

  // Disable the button after adding the total row to prevent duplicate rows
  getSumBtn.disabled = true;

  
};

getSumBtn.addEventListener("click", getSum);

