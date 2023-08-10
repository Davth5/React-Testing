import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";


function App() {
  const [recipeFormShown, showRecipeForm] = useState(false);
  const [recipes, setRecipes] = useState([]);

  let submitRecipe = (event) => {
    event.preventDefault();

    const newRecipe = {
      name: event.target.elements["newRecipeName"].value,
      instructions: event.target.elements["newRecipeInstructions"].value,
    };

    setRecipes([...recipes, newRecipe]);
    showRecipeForm(false);
  };

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>

      {recipeFormShown ? (
        <>
          <form id="recipe-form" name="recipe-form" onSubmit={submitRecipe}>
            <label htmlFor="newRecipeName">Recipe name: </label>
            <input type="text" id="newRecipeName" name="newRecipeName" />
            <label htmlFor="newRecipeInstructions">Instructions:</label>
            <textarea
              id="newRecipeInstructions"
              name="newRecipeInstructions"
              placeholder="write recipe instructions here..."
            />
            <button type="submit" name="Submit">
              Submit
            </button>
          </form>
        </>
      ) : (
        <button onClick={() => showRecipeForm(!recipeFormShown)}>
          Add Recipe
        </button>
      )}

      {recipes.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.name}</h2>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}


export default App;