import { useEffect, useRef, useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";
const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });

      // const yCoord =
      //   recipeSection.current.getBoundingClientRect().top + window.scrollY;
      // window.scroll({
      //   top: yCoord,
      //   behavior: "smooth",
      // });
    }
  }, [recipe]);

  async function getRecipe() {
    try {
      setLoading(true);

      const recipeMarkdown = await getRecipeFromMistral(ingredients);

      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
        <IngredientsList
          loading={loading}
          recipeSection={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {/* Recipe details */}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default Main;
