import styles from "./app.module.css";
import jurgenIMg from "/images/jjurgen.jpg";
import liverpool from "/images/people.avif";

function App() {
  return (
    <>
      <header>
        <img src={liverpool} alt="livberpool fc" />
        <div className={styles.header1}></div>
        <div className={styles.header2}></div>
      </header>
      <h2>Categories and cards</h2>
      <div className={styles["cards-container"]}>
        <div className={styles.card}>
          <div className={styles["single-card"]}></div>
          <div className={styles.divtest}>
            <p className={styles.description}>Description about card</p>
            <span>test testing</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles["single-card"]}></div>
          <p className={styles.description}>Description about card</p>
          <span>test testing</span>
        </div>
        <div className={styles.card}>
          <div className={styles["single-card"]}></div>
          <p className={styles.description}> Description about card</p>
          <span>test testing</span>
        </div>
        <div className={styles.card}>
          <div className={styles["single-card"]}></div>
          <p className={styles.description}>Description about card</p>
          <span>test testing</span>
        </div>
      </div>
      <h2> News Catalog</h2>
      <div className={styles["news-container"]}>
        <div className={styles["news-post"]}>
          <img src={jurgenIMg} alt="Jurgen Klopp" />
          <div className={styles["news-info"]}>
            <p className={styles.title}>Title</p>
            <p className={styles["news-text"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              eaque tempore eos porro debitis eveniet, laboriosam repellat eius
              alias sed numquam suscipit fugiat! Consequatur vero aliquam
              accusamus, deleniti nobis quam. Voluptatem sit facere incidunt
              exercitationem, quas et iste natus laboriosam animi tempore earum
              eos dicta aspernatur maxime assumenda similique velit molestias?
              Iste magnam deleniti cum vel. Quos, impedit a. Explicabo.
            </p>
          </div>
        </div>
        <div className={styles["news-post"]}>
          <img src={jurgenIMg} alt="Jurgen Klopp" />
          <div className={styles["news-info"]}>
            <p className={styles.title}>Title</p>
            <p className={styles["news-text"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              eaque tempore eos porro debitis eveniet, laboriosam repellat eius
              alias sed numquam suscipit fugiat! Consequatur vero aliquam
              accusamus, deleniti nobis quam. Voluptatem sit facere incidunt
              exercitationem, quas et iste natus laboriosam animi tempore earum
              eos dicta aspernatur maxime assumenda similique velit molestias?
              Iste magnam deleniti cum vel. Quos, impedit a. Explicabo.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <h1 className="">footer</h1>
      </footer>
    </>
  );
}

export default App;
