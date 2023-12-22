const apiKey = 'O458yBYUv14sVfAhRvoV6bvnbGH0mOnfhaFYAEVE'; // Replace with your FoodData Central API key

function searchFood() {
    const foodSearchInput = document.getElementById('foodSearch').value;

    if (!foodSearchInput) {
        alert('Please enter a food item.');
        return;
    }

    const apiUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${foodSearchInput}&generalSearchInput=true&api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayFoodInfo(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayFoodInfo(data) {
    // Get the container element for displaying food information
    const foodInfoContainer = document.getElementById('foodInfo');
    foodInfoContainer.innerHTML = ''; // Clear previous results

    if (data.foods && data.foods.length > 0) {
        // Extract information from the first result
        const firstResult = data.foods[0];

        // Create a table element
        const table = document.createElement('table');
        table.border = '10'; // Add border to the table (optional)

        // Create a table row for the food name
        const nameRow = table.insertRow();
        const nameCell = nameRow.insertCell(0);
        nameCell.textContent = 'Food Name:';
        const nameValueCell = nameRow.insertCell(1);
        nameValueCell.textContent = firstResult.description;

        // Create a table row for the nutritional information
        const nutrients = firstResult.foodNutrients || [];
        if (nutrients.length > 0) {
            const nutrientsTitleRow = table.insertRow();
            const titleCell = nutrientsTitleRow.insertCell(0);
            titleCell.textContent = 'Nutritional Information:';

            // Create header row for nutrients
            const headerRow = table.insertRow();
            const nutrientNameHeaderCell = headerRow.insertCell(0);
            nutrientNameHeaderCell.textContent = 'Nutrient Name';
            const valueHeaderCell = headerRow.insertCell(1);
            valueHeaderCell.textContent = 'Value';
            const unitHeaderCell = headerRow.insertCell(2);
            unitHeaderCell.textContent = 'Unit';

            // Create rows for each nutrient
            nutrients.forEach(nutrient => {
                const nutrientRow = table.insertRow();
                const nutrientNameCell = nutrientRow.insertCell(0);
                nutrientNameCell.textContent = nutrient.nutrientName;
                const valueCell = nutrientRow.insertCell(1);
                valueCell.textContent = nutrient.value;
                const unitCell = nutrientRow.insertCell(2);
                unitCell.textContent = nutrient.unitName;
            });
        }

        // Append the table to the food information container
        foodInfoContainer.appendChild(table);
    } else {
        // Display an alert if no results are found
        alert('No results found.');
        return;
    }
}