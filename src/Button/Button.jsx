import styles from "./Button.module.css";

function Button() {
  return (
    <>
      <button className={styles.successButton}>Click me</button>
      <button className={styles.dangerButton}>Click me</button>
    </>
  );
}
export default Button;
