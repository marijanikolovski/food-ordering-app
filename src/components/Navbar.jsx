import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import { selectQuantity } from "@/store/products/selector"
import { useSelector } from "react-redux"

export const Navbar = () => {
  const quantity = useSelector(selectQuantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012587856</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <Link href={'/'}>
            <li className={styles.listItem}>Products</li>
          </Link>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="" width="160" height="69" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart">
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30" height="30" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
