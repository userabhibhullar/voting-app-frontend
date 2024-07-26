import styles from "./Option.module.css";
const Option = ({ id, value, selected, onChange }) => {
  return selected ? (
    <div className={styles.option}>
      <input
        className={styles.optionInput}
        onChange={onChange}
        type="radio"
        name={id}
        id={value}
        value={value}
      />
      <label htmlFor={value} className={styles.optionLabelSelected}>
        {value}
      </label>
    </div>
  ) : (
    <div className={styles.option}>
      <input
        className={styles.optionInput}
        onChange={onChange}
        type="radio"
        name={id}
        id={value}
        value={value}
      />
      <label className={styles.optionLabel} htmlFor={value}>
        {value}
      </label>
    </div>
  );
};

export default Option;
