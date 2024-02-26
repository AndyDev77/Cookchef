import styles from "./Recipe.module.scss";
import recipe from "../assets/images/recette.jpg";

const Recipe = () => {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={recipe} alt="recette" />
      </div>

      <div
        className={`${styles.recipeTitle} d-flex flex-row align-items-center justify-content-center`}
      >
        <h3>Saumon & Asperge</h3>
      </div>
    </div>
  );
};

export default Recipe;
