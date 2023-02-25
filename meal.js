const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        console.log(meal);
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
        
    })
}
loadMeals();