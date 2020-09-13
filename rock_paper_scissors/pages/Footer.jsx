import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function Footer() {
  return (
    <div>
       <footer className={styles.footer}>
        <p>Created by Sara Lundkvist 2020</p>
      </footer>
    </div>
  );
}