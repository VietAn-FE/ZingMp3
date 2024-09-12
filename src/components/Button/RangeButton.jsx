import styles from './Button.module.scss'
const RangeButton = ({valueRange, onChangeProcessBar}) =>{
    const defaultOnchange = () => {

    } 
    return(
        <input type='range' value={valueRange} className={styles.inputRange} onChange={onChangeProcessBar || defaultOnchange}  />
    )
}
export default RangeButton