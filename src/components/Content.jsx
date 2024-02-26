import styles from "./Content.module.scss";
import Recipe from "./Recipe";

const Content = () => {
  return (
    <div className="flex-fill container">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className="card p-20">
        <div className={styles.grid}>
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
      </div>
    </div>
  );
};

export default Content;