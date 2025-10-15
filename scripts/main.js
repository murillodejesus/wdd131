const products = [
  {
    id: "fc-1888",
    name: "Capacitador de Fluxo",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Cabo de Energia",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Circuito de Fluxo",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "Reator de baixa voltagem",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Equalizador de fase",
    averagerating: 5.0
  }
];

function populateProductList() {
    const selectElement = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; 
        option.textContent = product.name; 
        selectElement.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateProductList);

function incrementReviewCounter() {

    let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

    reviewCount++;

    localStorage.setItem('reviewCount', reviewCount);

    document.getElementById('reviewCount').textContent = reviewCount;
}

document.addEventListener('DOMContentLoaded', incrementReviewCounter);