import styles from './Button.module.scss'
function ToggleButton({ id, onToggle,isChecked }) {
    const handleChange = (e) => {
        onToggle(e.target.checked)
    }
    return (
        <div className={styles.btnToggle}>
            <input type="checkbox" id={id} checked={isChecked} onChange={handleChange} />
            <label htmlFor={id}>Toggle</label>
        </div>
    )
}

export default ToggleButton