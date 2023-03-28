import styles from "../../styles/Order.module.css";
import axios from "axios";

const Order = ({ orders }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr className={styles.tr} key={order._id}>
                  <td>
                    <span className={styles.id}>{order._id}</span>
                  </td>
                  <td>
                    <span className={styles.name}>{order.customer}</span>
                  </td>
                  <td>
                    <span className={styles.address}>{order.address}</span>
                  </td>
                  <td>
                    <span className={styles.total}>${order.total}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(
    'http://localhost:3000/api/orders/'
  );
  return {
    props: {
      orders: res.data,
    },
  };
};
export default Order;