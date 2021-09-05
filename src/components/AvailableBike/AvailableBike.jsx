import styles from './AvailableBike.module.css'

const AvailableBike = ({ name, type, price, onRent, onDelete }) => (
  <>
    <span className={styles.text}>{name} / {type} / ${price}</span>
    <button className={'button ' + styles.rentButton} type="button" onClick={onRent}>Rent</button>
    <button className={'button ' + styles.deleteButton} type="button" onClick={onDelete}>Delete</button>
  </>
)

export default AvailableBike;