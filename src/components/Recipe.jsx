import styles from "./Recipe.module.scss";

const Recipe = ({ title, image }) => {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="recette" />
      </div>

      <div
        className={`${styles.recipeTitle} d-flex flex-row align-items-center justify-content-center`}
      >
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Recipe;
