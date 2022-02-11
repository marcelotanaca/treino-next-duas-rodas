import styles from "./styles.module.scss"
import Image from "next/image";
import mecanica from "../../../public/mecanica.png"
import pecas from "../../../public/pecas.jpg"
import assesorios from "../../../public/assesorios.jpg"

export default function Produtos() {
  return (
      <header className={styles.produtos}>
      <ul className={styles.produtos}>
        <a href=""><h2>Mecânica</h2>
          <Image src={mecanica} />
          <p className={styles.produtodesc1}>Especializada e com garantia confira!</p>
          <p className={styles.produtodesc}>Tire um orçamento</p>
        </a>
        <a href=""><h2>Peças</h2>
          <Image src={pecas}/>
          <p className={styles.produtodesc1}>Peças das melhores marcas e preço justo</p>
          <p className={styles.produtodesc}>Ligue para nós</p>
        </a>
        <a href=""><h2>Assesórios</h2>
          <Image src={assesorios}/>
          <p className={styles.produtodesc1}>Todos os assesórios para você e sua moto</p>
          <p className={styles.produtodesc}>Venha conferir</p>
        </a>
       </ul>
       </header>
   
       
  );
}