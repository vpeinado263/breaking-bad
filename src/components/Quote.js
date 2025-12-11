import styles from "@/styles/Quote.module.css";

const Quote = ({ quote }) => {
  const { text, author } = quote;

  return (
    <>
      <div className={styles["spinnercentro"]}>
        <blockquote>{text}</blockquote>
        <h3>{author}</h3>
      </div>
    </>
  );
};

export default Quote;
