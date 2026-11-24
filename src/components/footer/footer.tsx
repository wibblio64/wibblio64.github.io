import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Powered by <a href="https://nextjs.org/">Next.js</a></span>
    </footer>
  );
}
