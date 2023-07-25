// Add the API URL
const url = "http://127.0.0.1:5000/item_por_key";

// Select the legends UL from our HTML File
const ul = document.getElementById('legends');

// Create a DocumentFragment (explained below)
const list = document.createDocumentFragment();

// Create Asynchronous function to grab the data
async function getData() {
  try {
    // We are using fetch to get the response
    const response = await fetch(url);
    const data = await response.json();
    
    // Trigger the listData function and pass the result
    listData(data);
  } catch (error) {
    console.log(error);
  }
}

// Create a function that will insert the data into our legends UL.
function listData(data) {
  // Loop through each result and append the data.
  console.log(data)
  data.map(function (legend) {
    const legendText = `
      <div class="nickname">${legend.VM}</div>
    `;
    const item = document.createElement('li');
    item.innerHTML = legendText;
    list.appendChild(item);
  });
  // Finally append all the data to the UL.
  ul.appendChild(list);
}

// Start the getData function
getData();