import styles from "./styles.module.scss"

export default function Header() {

  return (
    <header className={styles.StyledHeader}>
      <img src="/logo.png" alt="Logo"/> 
      <a href="/">HOME</a>
      <a href="/produtos">PRODUTOS</a>
      <a href="/contato">CONTATO</a>
      
    </header>

    
  );
};