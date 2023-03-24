import styles from "../styles/PizzaCard.module.css"
import Image from "next/image"

export const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="200" height="200" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipxum dolar sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}
