import styles from "./Option.module.css";
const Option = ({ id, value, selected, onClick }) => {
  return selected ? (
    <div className={styles.option}>
      <input
        className={styles.optionInput}
        type="radio"
        name={id}
        id={value}
        value={value}
        onClick={onClick}
      />
      <label htmlFor={value} className={styles.optionLabelSelected}>
        {value}
      </label>
    </div>
  ) : (
    <div className={styles.option}>
      <input
        className={styles.optionInput}
        type="radio"
        name={id}
        id={value}
        value={value}
        onClick={onClick}
      />
      <label className={styles.optionLabel} htmlFor={value}>
        {value}
      </label>
    </div>
  );
};

export default Option;
