// JS Code here...

const btnSubmit = document.getElementById("submit-btn");

btnSubmit.addEventListener("click", submithandler);

function submithandler(e) {
  e.preventDefault();
  const form = e.target.closest("form");
  const alert = document.getElementById("alert");

  alert.innerText = "";
  const id = Math.ceil(Math.random() * 1000);
  const product = form.product.value;
  const price = form.price.value;
  const iva = form.iva.value;
  const date = new Date();

  if (product == "" || price == "") {
    alert.innerText = "Product or price is missing...";
    return;
  }

  const deleteBtn = document.createElement("btn");
  deleteBtn.innerText = "Delete";

  const table = document.getElementById("products-table");

  const prevTable = table.innerHTML;

  table.innerHTML =
    prevTable +
    `<tr>
  <td>${id}</td>
  <td>${product}</td>
  <td>$ ${price}</td>
  <td>${iva}%</td>
  <td>$${iva + price}</td>
  <td>${date.toISOString().slice(0, 10)}</td>
  <td id="controls"></td>
  </tr>`;

  const controls = document.getElementById("controls");
  console.log(controls);
  controls.appendChild(deleteBtn);
}
