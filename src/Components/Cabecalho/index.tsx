import styles from "./styles.module.scss"

export default function Header() {

  return (
    <header className={styles.StyledHeader}>
      <img src="/logo.png" alt="Logo"/> 
      <a href="#">HOME</a>
      <a href="#">PRODUTOS</a>
      <a href="#">CONTATO</a>
      
    </header>

    
  );
};