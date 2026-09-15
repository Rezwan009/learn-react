import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";
const Main = () => {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    // setRecipeShown((prev) => !prev);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);

    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    // event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient").trim();
    if (!newIngredient) {
      return; // Don't add empty values
    }
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    // event.currentTarget.reset();
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>

      {/* Ingredients List details*/}
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {/* Recipe details */}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default Main;
