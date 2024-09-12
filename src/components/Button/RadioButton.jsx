import styles from './Button.module.scss'
function RadioButton({ dataRadio }) {
    return (
        <div className={styles.subListRadio}>
            {dataRadio && dataRadio.length &&
                dataRadio.map((item, index) => {
                    return (
                        <label className={styles.btnRadio} key={index}>
                            <p >{item.label}</p>
                            <input type="radio" defaultChecked={item.checked} name={item.name} />
                            <span></span>
                        </label>
                    )
                })
            }
        </div>
    )
}

export default RadioButton