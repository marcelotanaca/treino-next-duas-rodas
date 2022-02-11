import styles from "./styles.module.scss"

export default function Rodape() {
  return (
    <div className={styles.Rodape}>
       <header>
           <img src="/logo rodape.png" alt="Logo rodape" />
           <p>&copy; Copyright Duas Rodas Moto Peças - 2021</p>
       </header>
    </div>
       
  );
}